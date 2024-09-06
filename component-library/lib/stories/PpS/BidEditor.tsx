import { Combobox } from "../Forms/Combobox"
import { Input } from "../Forms/Input"
import { DayTimeRange } from "./DayTimeRange"

export const BidEditor = () => {
  return (
    <div className="grid gap-4 w-full" style={{ gridTemplateColumns: 'minmax(400px, auto) repeat(4, 1fr)' }}>
      <DayTimeRange
        nHours={24}
        range={undefined}
        onRangeSelect={() => { }}
      />
      <Combobox
        value="afrrp"
        onChange={() => { }}
        options={[
          {
            id: "fcr",
            name: "FCR"
          },
          {
            id: "afrrp",
            name: "aFRR+"
          },
          {
            id: "afrrm",
            name: "aFRR-"
          },
          {
            id: "mfrrp",
            name: "mFRR+"
          },
          {
            id: "mfrrm",
            name: "mFRR-"
          },
          {
            id: "mfrr5",
            name: "mFRR5"
          }
        ]}
      />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  )
}