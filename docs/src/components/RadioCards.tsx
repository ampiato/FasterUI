'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface Props {
  options: Option[];
  selected?: string
  onChange: (value: string) => void
}

export const RadioCards: React.FC<Props> = ({ options, selected, onChange }) => {
  return (
    <fieldset>
      <RadioGroup
        value={selected}
        onChange={onChange}
        className="mt-2 grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
        }}
      >
        {options.map((option) => (
          <Radio
            key={option.label}
            value={option.value}
            disabled={option.disabled}
            className={clsx(
              !option.disabled ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
              'flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus],[data-checked])]:ring-inset',
            )}
          >
            {option.label}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}