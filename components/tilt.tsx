import { Tilt } from "react-tilt"

type TiltType = {
  className?: string,
  children: React.ReactNode
}

function TiltCard({className, children}: TiltType ) {
    const defaultOptions = {
        reverse:        false,  
        max:            35,     
        perspective:    1000,   
        scale:          1.1,    
        speed:          1000,   
        transition:     true,   
        axis:           null,   
        reset:          true,   
        easing:         "cubic-bezier(.03,.98,.52,.99)",
    }

  return (
    <Tilt options={defaultOptions} className={className}>
      {children}
    </Tilt>
  )
}

export default TiltCard