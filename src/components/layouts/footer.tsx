import * as React from "react";
import "../../index.css";
import logofooter from "../../images/logo-footer.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import printest from "../../images/printest.svg";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";

const Footer = (props: any) => {
	const Footer = props._site.c_footer;


	return (
		<>

			<footer className="Footer">

				<div className="Footer-main">
					<div className="Footer-mainContainer l-container">
						<div className="Footer-mainRow l-row">
							<div className="Footer-col Footer-col--1 l-col-xs-6 l-col-sm-5 l-col-md-3-up">
								<div className="Footer-logoWrapper">
									<img src={Footer.footerLogo.url} alt="logo" />
								</div>
							</div>

								<div className="Footer-col Footer-col--2 l-col-xs-6 l-col-sm-7 l-col-md-4-up">
									<div className="Footer-label">
										<h1>{Footer.heading}</h1>
										<div className="Footer-colContent">
											<div className="Footer-address">
												<div>
													<span>{Footer.address}</span>
												</div>
											</div>
											<div className="Footer-phone">
												<p>{Footer.contact}</p>
											</div>
										</div>
									</div>
								</div>
								<div className="Footer-col Footer-col--3 l-col-xs-12 l-col-sm-12 l-col-md-5-up">
									<div className="Footer-label">
										{props._site.c_socialLogo.heading}
										<div className="Footer-socialLinkWrapper">
											<a href="#" target="_blank" className="Link Footer-link Footer-facebook"><img className="Image Footer-image"
													src={props._site.c_socialLogo.image.url}
													height="20" alt="social" width="21"></img><span>{props._site.c_socialLogo.label.label}</span>
											</a>	
										</div>
									</div>
								</div>
						</div>
					</div>
				</div>
				<div className="Footer-bottom">
					<div className="Footer-bottomContainer l-container">
						<div className="Footer-bottomCol Footer-bottomCol--1 l-col-xs-12 l-col-sm-12 l-col-md-4-up">
							<span className="Maxolgroup">Copyright The Maxol Group 2020</span>
							<a className="Footer-bottomLink Footer-bottomEl" href="https://www.maxol.ie/privacy-statement" data-ya-track="link#">privacy statement</a>
							<a className="Footer-bottomLink Footer-bottomEl" href="https://www.maxol.ie/cookies" data-ya-track="link#">cookie policy</a>
						</div>
						<div className="Footer-bottomCol Footer-bottomCol--2 u-mobile-footer-hide l-col-md-5-up">
							<a className="Footer-bottomLink Footer-bottomEl" href="https://www.emaxol.com/" data-ya-track="link#">go to emaxol.com</a>
						</div>
					</div>
				</div>
			</footer>


		</>
	);
};

export default Footer;

