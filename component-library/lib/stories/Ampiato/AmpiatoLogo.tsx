export interface AmpiatoLogoComponent {

}

export const AmpiatoLogo = () => {
  return (
    <img
      className="mx-auto h-10 w-auto"
      srcSet="
      /images/ampiato@1x.jpg 1x, 
      /images/ampiato@2x.jpg 2x, 
      /images/ampiato@3x.jpg 2x, 
      /images/ampiato@4x.jpg 4x"
      src="/images/ampiato@1x.jpg"
      alt="Ampiato"
    />
  )
}