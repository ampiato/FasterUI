import { useEffect, useState } from "react"
import { Page404 } from "@/Page404"
import { RenderPageFromJSON } from "./RenderPageFromJSON"

export const RenderPageFromAPI = (): any => {
  const [data, setData] = useState<any | null>(null)
  const [is404, setIs404] = useState(false)
  const queryParameters = new URLSearchParams(window.location.search)
  const q = queryParameters.get("q")

  useEffect(() => {
    if (!q) {
      return
    }

    fetch(q, { method: 'GET' })
      .then(response => {
        if (!response.ok) {
          setIs404(true)
          throw new Error("HTTP status " + response.status)
        }
        return response.json()
      })
      .then(data => {
        setData(data)
      })
      .catch(error => {
        setIs404(true)
        console.error('Error:', error)
      })
  }, [q]);

  if (!data) {
    return (
      <h1 className="text-3xl font-bold underline">
        Loading...
      </h1>
    )
  }

  if (is404) {
    return (
      <Page404 />
    )
  }



  return <RenderPageFromJSON data={data} />
}