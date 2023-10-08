import React from "react";
import { staff } from "../images/staff/staff";
import Miembro from "./miembro";

export default function Miembros() {
	return (
		<div className='miembrosGrid'>
			{staff.map((personal) => {
				return <Miembro personal={personal} />;
			})}
		</div>
	);
}
