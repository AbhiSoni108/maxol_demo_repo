import * as React from "react";
import Cta from "../commons/cta";

type Link = {
  label: string;
  url: string;
};

const Header = (props: any) => {
  const MenuVar = props._site.c_menu.map((link: any) => (
    <ul className="Header-topMenuLinks" key={link.label}>
      {link.menubar.map((data: any) =>
        <li className="Header-menuItem" role="presentation"><a className="Header-link" href={data.url}>
          {data.label}
        </a></li>
      )}
    </ul>
  ));

 
    const MainMenu = props._site.c_headerMain.map((value: any) => (
      <ul className="Header-mainmenu" key={value.label}>
          {value.menubar.map((datavalue: any) => 
          <li className="Header-mainmenuItem"><a className="Header-mainmenu-link" href={datavalue.url}>
            {datavalue.label}
            </a></li>
          )}
      </ul>
    ));

  return (
    <>
      <header className="Header" data-ya-scope="header">
        <div className="Header-container">
          <nav className="Header-menuMain" aria-label="Main navigation menu">
            <div className="Header-top">
            <div className="Header-logoWrapper">
              <img className="Header-logoImage" src={props._site.c_headerLogo.url}></img>
            </div>
            <div className="Header-topMenu">{MenuVar}</div>
            <div className="SocialLinks-linkWrapper"><a href={props._site.c_socialLogo.label.link}
                                className="Link SocialLinks-link SocialLinks-facebook" data-ya-track="facebook"><img
                                    className="Image SocialLinks-image"
                                    src={props._site.c_socialLogo.image.url} /></a>
            </div>
            </div>
            <div className="Header-main">
            <div className="Header-content">{MainMenu}</div>   
            </div>        
          </nav>
           
        </div>
      </header>
    </>
  );
};

export default Header;


