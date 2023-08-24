import React from "react";
import { useState } from "react";
import Quote from "./sections/quote";
import Despegue from "./sections/despegue";
import Parrafo from "./sections/parrafo";
import "./mainPage.css";
import { textos, titulos } from "./sections/textos";
import { imagenes } from "../images/imagenes";

export default function MainPage() {
	return (
		<div className='mainPage'>
			<Despegue />
			<Parrafo
				alignText={"right"}
				text={textos.esMomentoDeAbordar}
				title={titulos.esMomentoDeAbordar}
				image={imagenes.LogoCUU_Vertical}
			/>
			<Parrafo
				alignText={"left"}
				text={textos.queEsNasa}
				title={titulos.queEsNasa}
				image={imagenes.LogoNASA_Horizontal}
			/>
			<Parrafo
				alignText={"right"}
				text={textos.proyectosDestacados}
				title={titulos.proyectosDestacados}
				image={imagenes.Computadora_Cohete}
			/>

			<Quote />
		</div>
	);
}
