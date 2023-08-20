import React from "react";
import logo from "../../images/LogoNASA_Horizontal.svg";
import "./quote.css";

export default function Quote() {
	return (
		<div className='quoteSection'>
			<div className='theQuote'>
				<div className='quoteMain'>
					"UNA IDEA PUEDE CAMBIAR AL MUNDO, PERO SOLO UN GRAN EQUIPO
					<a className='innerQuote'>
						<br />
						LA HACE POSIBLE
					</a>
					"<div className='atte'>- SPACE APPS CHIHUAHUA</div>
				</div>
			</div>
			<img className='theImage' src={logo} alt='Logo NASA SPACEAPPS' />
		</div>
	);
}
