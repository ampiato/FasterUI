import { Button } from "../Components/Button"

export const Form = () => {
  return (
    <form method="post" className="mx-auto max-w-4xl">
      <div className="flex justify-end gap-4">
        <Button label="Reset" />
        <Button label="Save changes" primary />
      </div>
    </form>
  )
}