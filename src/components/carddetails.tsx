import * as React from "react";

const CardDetails = (props: any) => {
    return (
        <div className="Info-subCol">

            <h3 className="Info-label">{props.c_cardHeading}</h3>
            <ul className="Info-fuelCards">
                {
                    props.c_cardDetails.map((index: any) => {
                        return (
                            <>
                                <li className="Info-fuelCard">{index.icon.image ? <img className="Info-fuelCardImage" src={index.icon.image.url} /> : "Use Photo"}<span
                                    className="Info-fuelCardText">{index.text}</span></li>
                            </>
                        )
                    })
                }
            </ul>

        </div>

    )
};

export default CardDetails;








