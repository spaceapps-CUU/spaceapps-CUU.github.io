import React from "react";
import "./parrafo.css";

export default function Parrafo({ alignText, title, text, image }) {
	const imagen = <img src={image} alt='Imagen' className='imagen' />;
	return (
		<div className='parrafoSection'>
			{alignText === "left" && imagen}
			<div className='lectura'>
				<h2>{title}</h2>
				{text.map((textito) => {
					return <p>{textito}</p>;
				})}
			</div>
			{alignText === "right" && imagen}
		</div>
	);
}
