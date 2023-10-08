import React, { useState } from "react";
import "./parrafo.css";

export default function Partners({ mostrar }) {
	return (
		<div className='parrafoSection' style={{ display: "block " }}>
			<div className='lecturaPartner'>
				<h2>{mostrar.titulo}</h2>
				{mostrar.contenido.map((parrafo) => {
					return <p>{parrafo}</p>;
				})}
			</div>
			<div className='partnersImages'>
				{mostrar.imagen.map((imagen) => {
					return (
						<div className='partnerBlock'>
							<img src={imagen} alt='Patrocinador' className='partnerImage' />
						</div>
					);
				})}
			</div>
		</div>
	);
}
