import React from "react";
import "./miembro.css";

export default function Miembro({ personal }) {
	const pfp = (
		<img
			src={personal.pfp}
			height={"200px"}
			width={"200px"}
			style={{ objectFit: "cover" }}
			alt='Miembro SpaceApps'
			className='miembroImagenPerfil'
		/>
	);

	return (
		<div className='miembroSAComponente'>
			<div className='miembroFondo'>
				<div className='miembroNombre'>
					{personal.nombres}
					<br />
					{personal.apellidos}
					<hr />
					{personal.rol}
				</div>
			</div>
			{pfp}
		</div>
	);
}
