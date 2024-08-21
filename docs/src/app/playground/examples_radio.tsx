"use client"

import { Button } from "@/components/Button"
import { useEffect, useState } from "react"

interface Props {
  onSelect: (value: string, layout: "full-width" | "centered") => void
}

export const ExamplesRadio: React.FC<Props> = ({onSelect}) => {
  const [data, setData] = useState<{ examples: any[] } | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fasterui.ampiato.com/api/examples')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No examples</p>

  const buttons = data.examples.map((item) => (
    <Button key={item.id} variant="secondary" onClick={() => onSelect(item.id, item.layout)}>
      {item.title}
    </Button>
  ))

  return (
    <div className="flex flex-row items-center gap-4 pb-8">
      <span className="font-semibold">Load example: </span>
      {buttons}
    </div>
  )
}