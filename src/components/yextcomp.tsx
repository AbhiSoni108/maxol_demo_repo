import * as React from "react";

const  ImageBanner = (props: any) => {
return (
    <>
    <h1>{props.props.text}</h1>
    <p>{props.props.desc}</p>
    <img src={props.props.pic.url}></img>
    <button>{props.props.show.label} 
    </button> 
    </>
);
}

export default ImageBanner;