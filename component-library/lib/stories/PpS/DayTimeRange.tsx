import { classNames } from '../../utils'
import { FC, useEffect, useState } from 'react'

export interface Range {
  hourFrom: number,
  hourTo: number
}

interface Props {
  nHours: 23 | 24 | 25,
  disabled?: boolean,
  range?: Range,
  onRangeSelect: (range: Range | undefined) => void
}

type ItemState = "edge" | "in-range" | "not-selected"

interface DayTimeRangeItemProps {
  hour: number,
  disabled?: boolean,
  nHours: number,
  state: ItemState,
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const DayTimeRangeItem: FC<DayTimeRangeItemProps> = ({ hour, disabled, nHours, state, onClick, onMouseEnter, onMouseLeave }) => {
  let stateClassNames
  switch (state) {
    case "edge":
      stateClassNames = "bg-indigo-600 text-white"
      break
    case "in-range":
      stateClassNames = "bg-indigo-50 text-indigo-600"
      break
    case "not-selected":
      stateClassNames = "bg-white text-gray-900"
      break
  }

  return (
    <button
      aria-current="page"
      disabled={disabled}
      className={classNames(
        "w-6 py-1 sm:py-2 text-sm ring-1 ring-inset ring-gray-300",
        stateClassNames,
        hour === 0 ? "rounded-l-md" : "",
        hour === nHours - 1 ? "rounded-r-md" : "",
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hour + 1}
    </button>
  )
}

function calculateStateFromRange(range: Range | undefined, nHours: number): [number | undefined, number | undefined] {
  if (range !== undefined) {
    const isValidRange = range.hourFrom >= 0 && range.hourTo <= nHours && range.hourFrom <= range.hourTo
    if (isValidRange) {
      return [range.hourFrom - 1, range.hourTo - 1]
    } else {
      return [undefined, undefined]
    }
  } else {
    return [undefined, undefined]
  }
}

function calculateDisplayRange(stateRange: [number | undefined, number | undefined], hoverState: number | undefined): [number | undefined, number | undefined] {
  if (hoverState === undefined) {
    return stateRange
  } else {
    const isBothEndsSelected = stateRange[0] !== undefined && stateRange[1] !== undefined
    const isBothEndsUndefined = stateRange[0] === undefined && stateRange[1] === undefined

    if (isBothEndsSelected || isBothEndsUndefined) {
      // Case 1
      return [hoverState, hoverState]
    } else {
      // Case 2
      if (hoverState < stateRange[0]!) {
        return [hoverState, hoverState]
      } else {
        return [stateRange[0], hoverState]
      }
    }
  }
}

function getState(displayRange: [number | undefined, number | undefined], hour: number): ItemState {
  if (displayRange[0] === hour || displayRange[1] === hour) {
    return "edge"
  } else if (displayRange[0] !== undefined && displayRange[1] !== undefined && displayRange[0] < hour && hour < displayRange[1]) {
    return "in-range"
  } else {
    return "not-selected"
  }
}

/**
 * Case 1: Když není vybráno nic: Co je hover, tak to je vybrané.
 * Case 2: Když je vybraná jedna hodina: 
 *  a. Když je hover na nebo za vybranou hodinu, tak se ukazuje rozsah. Nastavuje se konec.
 *  b. Když je hover před vybranou hodinou, tak se posouvá začátek.
 * Když vybere rozsah: Aplikuje se akce.
 * Změna propsů nebo vyjetí myší zahodí rozeditovaný rozsah.
 */
export const DayTimeRange: FC<Props> = ({ disabled, nHours, range, onRangeSelect }) => {
  // State
  const [stateRange, setStateRange] = useState<[number | undefined, number | undefined]>([undefined, undefined])
  const [hoverState, setHoverState] = useState<number | undefined>(undefined)

  // Effects
  useEffect(() => { 
    setStateRange(calculateStateFromRange(range, nHours)) 
    setHoverState(undefined)
  }, [range])

  // Helper indicators
  const hours = Array.from({ length: nHours }, (_, i) => i)
  const isBaseloadSelected = stateRange[0] === 0 && (stateRange[1] === nHours - 1 || hoverState === nHours - 1)
  const displayRange = calculateDisplayRange(stateRange, hoverState)

  // Actions
  const onBaseloadClick = () => {
    setHoverState(undefined)
    if (isBaseloadSelected) {
      setStateRange([undefined, undefined])
      onRangeSelect(undefined)
    } else {
      setStateRange([0, nHours - 1])
      onRangeSelect({ hourFrom: 1, hourTo: nHours })
    }
  }
  const onClick = (hour: number) => {
    const isBothUndefined = stateRange[0] === undefined && stateRange[1] === undefined
    const isBothDefined = stateRange[0] !== undefined && stateRange[1] !== undefined
    if (isBothUndefined || isBothDefined) {
      // Case 1
      setStateRange([hour, undefined])
    } else if (stateRange[0] !== undefined && stateRange[1] === undefined) {
      // Case 2
      if (hour < stateRange[0]!) {
        // Case 2a
        setStateRange([hour, undefined])
      } else {
        // Case 2b
        setStateRange([stateRange[0], hour])
        setHoverState(undefined)
        onRangeSelect({ hourFrom: stateRange[0]! + 1, hourTo: hour + 1 })
      }
    }
  }
  const onMouseEnter = (hour: number) => {
    if (hoverState !== hour) {
      setHoverState(hour)
    }
  }
  const onMouseLeave = (hour: number) => {
    if (hoverState === hour) {
      setHoverState(undefined)
    }
  }
  const onMouseLeaveAll = () => {
    if (hoverState !== undefined) {
      setHoverState(undefined)
      setStateRange(calculateStateFromRange(range, nHours))
    }
  }


  return (
    <div className="flex flex-1 sm:items-center gap-x-2">
      <button
        className={classNames(
          "relative inline-flex items-center rounded-l-md rounded-r-md px-2 py-2 text-sm ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0",
          isBaseloadSelected
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-white text-gray-900 hover:bg-indigo-600 hover:text-white"
        )}
        onClick={onBaseloadClick}
        disabled={disabled}
      >
        BL
      </button>
      <nav
        className="isolate grid grid-cols-[repeat(12,minmax(0,1fr))] min-[640px]:max-lg:grid-cols-[repeat(24,minmax(0,1fr))] min-[1550px]:grid-cols-[repeat(24,minmax(0,1fr))] -space-x-px rounded-md shadow-sm"
        onMouseLeave={onMouseLeaveAll}
      >
        {hours.map((hour) => <DayTimeRangeItem
          key={hour}
          disabled={disabled}
          hour={hour}
          nHours={nHours}
          state={getState(displayRange, hour)}
          onClick={() => onClick(hour)}
          onMouseEnter={() => onMouseEnter(hour)}
          onMouseLeave={() => onMouseLeave(hour)}
        />)}
      </nav>
    </div>
  )
}
