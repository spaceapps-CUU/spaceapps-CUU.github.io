import React, { useState } from "react";
import { imagenes } from "../../images/imagenes";
import "./quote.css";

export default function Quote() {
	const [easterEgg, setEasterEgg] = useState(false);
	function showImage() {
		if (easterEgg) {
			setEasterEgg(false);
		} else {
			setEasterEgg(true);
		}
	}
	return (
		<div className='quoteSection'>
			<div className='theQuote'>
				<div className='quoteMain'>
					"UNA IDEA PUEDE CAMBIAR AL MUNDO, PERO SOLO UN GRAN EQUIPO
					<a className='innerQuote'>
						<br />
						LA HACE POSIBLE
					</a>
					"
					<div className='atte' onClick={showImage}>
						- SPACE APPS CHIHUAHUA
					</div>
				</div>
			</div>
			{easterEgg === true && (
				<img
					className='theImage'
					src={imagenes.EasterEggTeam}
					alt='Equipo SpaceApps Chihuahua'
				/>
			)}
		</div>
	);
}
