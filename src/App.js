import logo from "./logo.svg";
import { useEffect, useRef } from "react";
import "./App.css";
import Topbar from "./components/topbar";
import MainPage from "./pages/mainPage";

function App() {
	useEffect(() => {
		scrollTo(refQueEsSpaceApps);
	}, []);
	let refQueEsSpaceApps = useRef();
	const handleTabsClick = (tabIdKey) => {
		switch (tabIdKey) {
			case 1:
				console.log("AAAAAAAAAAAAAAAAAA");
				scrollTo(refQueEsSpaceApps);
				break;

			default:
				break;
		}
	};
	function scrollTo(ref) {
		if (!ref.current) return;
		ref.current.scrollIntoView({ behavior: "smooth" });
	}
	return (
		<div className='App'>
			<Topbar />
			<MainPage />
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Si se pudo banda :D Ahora google es nuestro</p>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
