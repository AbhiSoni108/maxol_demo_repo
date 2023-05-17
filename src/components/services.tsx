import * as React from "react";

const MyServices = (props: any) => {
    return (
        <>
            <div className="Info-subRow Info-servicesContent">
                
                            <h2 className="Info-label">{props.c_heading}</h2>
                      
                <ul className="Info-services">
                    {
                        props.c_customServices.map((index: any) => {
                            return (
                                <li className="Info-service">
                                    <div className="Info-serviceIconWrapper">{index.icon.image ? <img className="Info-serviceIcon" src={index.icon.image.url} /> : ""}
                                    </div><span className="Info-serviceText">{index.text}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
};

export default MyServices;