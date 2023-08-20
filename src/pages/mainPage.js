import React from "react";
import { useState } from "react";
import Quote from "./sections/quote";
import Despegue from "./sections/despegue";
import "./mainPage.css";

export default function MainPage() {
	return (
		<div className='mainPage'>
			<Despegue />
			<Quote />
		</div>
	);
}
