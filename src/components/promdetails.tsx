import * as React from "react";

const PromoDetails = (props: any) => {

    return (
        <div className="Info-col l-col-xs-12 l-col-sm-6-up">
            <div className="Info-promo">
                <h3 className="Info-promoTitle">{props.c_promoDetails?props.c_promoDetails.heading:""}</h3>
                <div className="Info-promoImageWrapper">{props.c_promoDetails.servicephoto ? <img src={props.c_promoDetails.servicephoto.url} /> : "Use Photo"}</div>
                <div className="Info-promoDescription">
                    <p>{props.c_promoDetails.details}</p>
                    
                        <a href="https://www.facebook.com/hashtag/supportlocal?__eep__=6&amp;__cft__%5B0%5D=AZVSljq60urXxyYe0I2g1CUfR88AuweM9v3fi-sJY7op0enRvowwliBQKLoC0GdwxyD_jfdDn7UvLxlkkO2thGg5vkTM5OOYOg8VoW5Uz-PF_2DXLy9KEDUEpyezYR3JbgsjMh5CvpGa0Jal9vdv_K6rxnr64QlsKA6t3P4_7GDnGThTUC6xB3MCmyNq5YQ4FjjkWApE_3KJZOEMcBm3bc4A6_8qH7_hkVi0e2yBqkC3Bw&amp;__tn__=*NK-R">#supportlocal</a>
                
                    <p><a href="https://homegrown.maxol.ie/">{props.c_promoDetails.link.label}</a></p>
                </div>
            </div>
        </div>
        
    )};

export default PromoDetails;