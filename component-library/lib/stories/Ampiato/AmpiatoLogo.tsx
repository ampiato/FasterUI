import { AmpiatoLogo as Model } from "../../gen";
import { useContext } from "react";
import { OptionsContext } from "../../RenderComponent";

export interface AmpiatoLogoComponent {

}

export const AmpiatoLogo: React.FC<Model> = () => {
  const options = useContext(OptionsContext);

  const prefix = options?.staticPrefix || "";

  return (
    <img
      className="mx-auto h-10 w-auto"
      srcSet={`
        ${prefix}/images/ampiato@1x.jpg 1x, 
        ${prefix}/images/ampiato@2x.jpg 2x, 
        ${prefix}/images/ampiato@3x.jpg 2x, 
        ${prefix}/images/ampiato@4x.jpg 4x
      `}
      src={`${prefix}/images/ampiato@1x.jpg`}
      alt="Ampiato"
    />
  )
}