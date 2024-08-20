import { Input } from "../Forms/Input"
import { DayTimeRange } from "./DayTimeRange"

export const BidEditor = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row">
        <DayTimeRange
          nHours={24}
          range={undefined}
          onRangeSelect={() => { }}
        />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  )
}