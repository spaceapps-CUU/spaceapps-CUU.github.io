import React from "react";
import { useState } from "react";
import Quote from "./landPageSections/quote";
import Despegue from "./landPageSections/despegue";
import Parrafo from "./landPageSections/parrafo";
import Partners from "./landPageSections/partners";
import "./mainPage.css";
import { parrafos } from "./landPageSections/textos";

export default function MainPage() {
	return (
		<div className='mainPage'>
			<Despegue />
			<Parrafo mostrar={parrafos.esMomentoDeAbordar} />
			<Parrafo mostrar={parrafos.queEsNasa} />
			<Parrafo mostrar={parrafos.proyectosDestacados} />
			<Partners mostrar={parrafos.partnersCUU} />
			<Quote />
		</div>
	);
}
