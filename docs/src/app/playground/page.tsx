"use client";

import { RadioCards } from "@/components/RadioCards";
import { Component, ComponentFromJSON, RenderComponent } from "@ampiato/fasterui";
import "@ampiato/fasterui/style.css";
import Editor, { Monaco, OnMount, OnValidate } from "@monaco-editor/react";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { ExamplesRadio } from "./examples_radio";
import schema from "./fasterui.json";

function editorWillMount(monaco: Monaco) {
  monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
    validate: true,
    schemas: [
      {
        uri: "http://ampiato.com/fasterapi.json", // id of the first schema
        fileMatch: ["*"], // associate with our model
        schema: schema
      }
    ]
  });


}

type MarkersType = Parameters<OnValidate>[0];
type IStandaloneCodeEditor = Parameters<OnMount>[0];

const RenderMarkers = ({ markers }: { markers: MarkersType }) => {
  return (
    <div>
      {markers.map((marker, index) => {
        return (
          <div key={index}>
            {marker.message}
          </div>
        )
      })}
    </div>
  )
}

const DEFAULT_JSON = {
  "component_type": "SectionHeader",
  "title": "Section header",
  "subtitle": "This is subtitle",
  "children": {
    "component_type": "Button",
    "label": "I do nothing"
  }
}


export default function Page() {
  const [editorContent, setEditorContent] = useState<string | undefined>(undefined);
  const [problems, setProblems] = useState<MarkersType>([]);
  const [component, setComponent] = useState<Component | undefined>(ComponentFromJSON(DEFAULT_JSON));
  const [layout, setLayout] = useState<"full-width" | "centered">("full-width");
  const editorRef = useRef<IStandaloneCodeEditor | null>(null);

  const handleEditorValidate: OnValidate = (markers) => {
    setProblems(markers);
  };

  useEffect(() => {
    if (problems.length === 0 && editorContent) {
      try {
        const json = JSON.parse(editorContent);
        const component = ComponentFromJSON(json);
        setComponent(component);
      } catch {
        setComponent(undefined)
      }
    } else {
      setComponent(undefined);
    }
  }, [problems, editorContent]);

  const onExampleSelect = (id: string, layout: "full-width" | "centered") => {
    fetch(`https://fasterui.ampiato.com/api/examples/${id}/component.json`)
      .then((res) => res.json())
      .then((data) => {
        const editor = editorRef.current;

        if (editor !== null) {
          // @ts-ignore
          editor.getModel().setValue(JSON.stringify(data, null, 2));
          setLayout(layout);
        }
      })
  }

  return (
    <div className="flex flex-col min-h-full min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <div className="flex flex-row items-center justify-between text-center pb-8">
        <h1 className="mt-3 font-display text-3xl tracking-tight text-slate-900 dark:text-white">
          Playground
        </h1>
        <div>
          <RadioCards
            options={[
              {
                label: "Full-page layout",
                value: "full-width",
                disabled: false
              },
              {
                label: "Centered layout",
                value: "centered",
                disabled: false
              }
            ]}
            selected={layout}
            onChange={(v) => setLayout(v as "full-width" | "centered")}
          />
        </div>
      </div>
      <ExamplesRadio onSelect={onExampleSelect} />
      <div className='grid grid-cols-2 gap-x-4 grid-rows-1 flex-grow'>
        <Editor
          language="json"
          value={JSON.stringify(
            DEFAULT_JSON,
            null,
            2
          )}
          beforeMount={editorWillMount}
          onMount={(editor, monaco) => { editorRef.current = editor }}
          onChange={(v) => setEditorContent(v)}
          onValidate={handleEditorValidate}
          options={{ automaticLayout: true }}
        />
        <div
          className={clsx(
            "relative bg-white h-full px-6 py-6 border rounded shadow-md border-indigo-500",
            layout === "centered" ? "flex flex-col items-center justify-center" : ""
          )}
          style={{contain: "paint"}}
        >
          {problems.length > 0 ? <RenderMarkers markers={problems} /> : <RenderComponent c={component} />}
        </div>
      </div>
    </div>
  )
}
