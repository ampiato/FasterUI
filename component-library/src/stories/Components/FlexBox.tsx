import { FlexBox as Model } from "@/gen";
import { RenderComponent } from "@/RenderComponent";

export const FlexBox: React.FC<Model> = ({ dir, gap, children }) => {
  let className = "flex";
  switch (dir) {
    case "horizontal":
      className += " flex-row";
      break;
    case "vertical":
      className += " flex-col";
      break;
  }
  let styles: React.CSSProperties = {
  }
  if (gap !== undefined) {
    styles.gap = `${gap / 4}rem`
  }
  return (
    <div className={className} style={styles}>
      <RenderComponent c={children} />
    </div>
  )
}