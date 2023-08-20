import React from "react";
import ReactDOM from "react-dom/client";
import "./topbar.css";
import logoSpaceApps from "../images/LogoCUU_Horizontal.svg";

const tabs = [
	{
		text: "¿Qué es Space Apps?",
		route: "/introduction",
		key: 1,
	},
	{
		text: "¡Súmate!",
		route: "/recruit",
		key: 2,
	},
	{
		text: "Partners",
		route: "/partners",
		key: 3,
	},
	{
		text: "FAQs",
		route: "/faqs",
		key: 4,
	},
	{
		text: "Equipo y Contacto",
		route: "/contact",
		key: 5,
	},
];

export default function Topbar() {
	return (
		<div className='topbar'>
			<img
				className='image-topBar'
				src={logoSpaceApps}
				alt='Space Apps CUU Logo'
			/>
			<div className='tabs'>
				{tabs.map((tab) => (
					<div className='tab'>
						<div className='tabText'>{tab.text}</div>
						<div className='innerAnimation' />
					</div>
				))}
			</div>
		</div>
	);
}
