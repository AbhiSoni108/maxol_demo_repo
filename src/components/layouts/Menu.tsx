import * as React from "react";
import Link from "../commons/Link";

function Menu (props: any) {
  
  // //console.log(data)
  return (
    <>
      <ul className="primary-nav">
        {props._site.c_menu.map((element: any) => {
          return (
          <>
            {element.menubar.map((element2: any) => {
              return (
                <>
                {element2.label}
                </>
              )
            })}
          </>
          )})
        }

      </ul>
    </>
  )
}

export default Menu