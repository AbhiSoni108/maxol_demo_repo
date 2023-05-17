import { Link } from "@yext/pages/components";
import * as React from "react";
import abbanner from "../../images/ab-banner.jpg"
import dt12 from "../../images/dtl2.jpg"
import PhotoSlider from "./PhotoSlider"
import RtfConverter from "@yext/rtf-converter";
import { ClimbingBoxLoader } from "react-spinners";

export default function About(props: any) {
  function convertToRtf(rtf: any) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
    rtf = rtf.replace('/', '');
    rtf = rtf.replace(';', '');
    rtf = rtf.replace('-', '');
    return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
  }

  return (
    <>
      <div className="about-sec ">
        <div className="container-custom">
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 about-inner-sec">
            <p>{props._site.c_imagetext.desc}
            </p>
            <div className="testimonial_company home_testimonial">
              <h3>Ajay Sharma<span>Dotsquares</span></h3>
              <span><img src={props._site.c_imagetext.pic.url} alt="aboutimg" /></span>
            </div>
          </div>
           
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
              <div className="img-slide">
                  <h2 className="title-heading"><strong>{props._site.c_imagetext.text}</strong></h2>
                  <div className="card-image">
                      {props._site.c_cTAButton.map((element: any) => {
                      return (
                        <>
                          
                            <a href={element.url}><img height={100} width={100} src={element.images?.url} alt="photo" /></a>
                        
                        </>
                      )}
                    )}
                  </div>
              </div>
            </div>  
            
          </div>
        </div>
    </>
  )


}