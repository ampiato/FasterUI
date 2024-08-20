import { Grid as Model } from "../../gen"
import { RenderComponent } from "../..//RenderComponent"


export const Grid: React.FC<Model> = ({ cols, gapX, gapY, children }) => {
  let styles: React.CSSProperties = {
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
  }
  if (gapX) {
    styles.columnGap = `${gapX / 4}rem`
  }
  if (gapY) {
    styles.rowGap = `${gapY / 4}rem`
  }
  return (
    <div className="grid" style={styles}>
      <RenderComponent c={children} />
    </div>
  )
}