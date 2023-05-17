import * as React from "react";
import { useEffect, useState } from "react";
import Logo from "../../images/logo-header.svg";
import Menu from "./Menu";
import { CSSTransition } from "react-transition-group";
import { humburgerIcon, logo } from "../../../sites-global/global";
import Cta from "../commons/cta";

const Nav = (props: any) => {
//console.log(props)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  })
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("menu-opened");
  };

  type Link = {
    label: string;
    url: string;
  };

  const links: Link[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Menu",
      url: "/menu.html",
    },
    {
      label: "Locator",
      url: "/locator",
    }
  ];



    const linkDoms = links.map((link) => (
      <div key={link.label}>
        <a href={link.url} >
          {link.label}
        </a>
      </div>
    ));

  return (
    <>
    <div className="container">
        <nav className="py-3 flex items-center justify-between">
              {props._site.c_footer.footerLogo?
              <img src={props._site.c_footer.footerLogo.url} alt="logo" />:
              <div dangerouslySetInnerHTML={{ __html: logo }} />}
            <div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
          <div className="hidden space-x-5 sm:block">
            <Cta buttonText="Order Pickup" url="#" style="primary-cta"></Cta>
            <Cta buttonText="Order Delivery" url="#" style="secondary-cta"></Cta>
          </div>
        </nav>
      </div>
      <div className="site-header">
        
       
        <button type="button" className="menu-btn" id="menu-btn" onClick={toggle}>
          <div dangerouslySetInnerHTML={{ __html: humburgerIcon }} />
          <span>Menu</span>
        </button>
      </div>
    </>
  )
}


export default Nav;
