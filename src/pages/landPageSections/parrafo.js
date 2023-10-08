import React from "react";
import "./parrafo.css";

export default function Parrafo({ mostrar }) {
	const imagen = <img src={mostrar.imagen} alt='Imagen' className='imagen' />;
	const textos = mostrar.contenido;
	return (
		<div className='parrafoSection'>
			{mostrar.direccion === "left" && imagen}
			<div className='lectura'>
				<h2>{mostrar.titulo}</h2>
				{textos.map((parrafo) => {
					return <p>{parrafo}</p>;
				})}
			</div>
			{mostrar.direccion === "right" && imagen}
		</div>
	);
}
