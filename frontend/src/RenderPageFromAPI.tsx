import { useEffect, useState } from "react"
import { RenderPageFromJSON } from "./RenderPageFromJSON"

type State = "404" | "error" | "no-q" | "loading" | "loaded"

const STATE_DESCIRPTIONS: Record<State, string> = {
  "404": "Page not found",
  "error": "Error loading page",
  "no-q": "No query parameter",
  "loading": "Loading...",
  "loaded": "Loaded"
}

export const RenderPageFromAPI = (): any => {
  const [data, setData] = useState<any | null>(null)
  const [state, setState] = useState<State>("no-q")
  const queryParameters = new URLSearchParams(window.location.search)
  const q = queryParameters.get("q")

  useEffect(() => {
    if (!q) {
      setState("no-q")
      return
    }

    setState("loading")

    fetch(q, { method: 'GET' })
      .then(response => {
        console.log(response)
        if (!response.ok) {
          setState("404")
          throw new Error("HTTP status " + response.status)
        }
        return response.json()
      })
      .then(data => {
        setState("loaded")
        setData(data)
      })
      .catch(error => {
        setState("error")
        console.error('Error:', error)
      })
  }, [q]);

  if (state !== "loaded") {
    return (
      <h1 className="text-3xl font-bold underline">
        {STATE_DESCIRPTIONS[state]}
      </h1>
    )
  }

  return <RenderPageFromJSON data={data} />
}