import * as React from "react";

   const CardService = (props: any) => {
return (
                            <div className="Info-subCol">
                                <h3 className="Info-label">{props.c_fuelHeading}</h3>
                                <ul className="Info-fuelsAvailable">
                                {/* { props.c_availability.map((index: any)=> {
                                    return ( */}
                                    <li className="Info-fuelAvailable"><span className="Info-fuelAvailableText">{props.c_availability}</span></li>
                                    {/* )
                                })      
                                    }        */}
                        
                                </ul>
                            </div> 
            
)};

export default CardService;