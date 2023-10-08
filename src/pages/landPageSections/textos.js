import { imagenes } from "../../images/imagenes";

const plantillaVacia = {
	nuevoElemento: {
		titulo: "",
		contenido: [``],
		direccion: "",
		imagen: false,
	},
};

export const parrafos = {
	esMomentoDeAbordar: {
		titulo: "Es momento de abordar",
		contenido: [
			`En tiempos pasados, la humanidad ha enfrentado diversos desafíos que han forjado su camino hacia el futuro. Desde remotos, hemos lidiado con cuestiones de sustentabilidad, resistiendo embates de desastres naturales, buscando la mejora de la salud y explorando los límites de la ciencia y la tecnología.`,
			`Hoy, en la era moderna, nos enfrentamos a desafíos similares y nuevos. Sin embargo, hemos aprendido que la colaboración es la clave para resolver problemas globales. A través de alianzas entre naciones, instituciones, científicos, líderes y ciudadanos comunes, hemos sido capaces de encontrar soluciones que impacten positivamente en nuestra sociedad y medio ambiente.`,
			`En este presente, se nos presenta la oportunidad de participar en eventos como "Space Apps", donde podemos explorar, experimentar y crear soluciones innovadoras que marquen la diferencia. Así, pode- mos continuar construyendo un futuro prometedor, uno permita a la humanidad seguir avanzando en el camino hacia la prosperidad y la armonía con nuestro planeta.`,
		],
		direccion: "right",
		imagen: imagenes.LogoCUU_Vertical,
	},
	queEsNasa: {
		titulo: "NASA International Space Apps Challenge",
		contenido: [
			`Space Apps es un evento anual organizado por la NASA (Administra- ción Nacional de Aeronáutica y del Espacio) en colaboración con agencias espaciales internacionales, empresas, instituciones académicas y organizaciones de todo el mundo. Durante el evento, se lleva a cabo una maratón de desarrollo de aplicaciones y soluciones creativas para abordar desafíos en temas relacionados con el espacio y la ciencia espacial.`,
			`El objetivo principal de Space Apps es fomentar la innovación y la creatividad para encontrar soluciones a problemas reales que enfrenta la exploración espacial y la ciencia espacial en general. Los participantes, que pueden ser programadores, diseñadores, científicos, ingenieros y cualquier persona interesada en el espacio, trabajan en equipos durante un fin de semana para desarrollar prototipos y soluciones prácticas.`,
		],
		direccion: "left",
		imagen: imagenes.LogoNASA_Horizontal,
	},
	partnersCUU: {
		titulo: "Partners CUU",
		contenido: [
			"En cada edición buscamos aliarnos con las mejores marcas de la ciudad, con las cuales podamos coloborar para mostrar el potencial de los chihuahuenses, es por eso que en esta edicion contamos con el apoyo de las siguientes marcas. ",
		],
		direccion: "no",
		imagen: [
			imagenes.Computadora_Cohete,
			imagenes.EasterEggTeam,
			imagenes.SocialMedia,
			imagenes.LogoNASA_Horizontal,
			imagenes.LogoCUU_Vertical,
		],
	},
	proyectosDestacados: {
		titulo: "Proyectos Destacados",
		contenido: [
			"Conoce algunos de los proyectos que han nacido en ediciónes pasadas y que son orgullosamente chihuahuenses.",
			"Proyecto 1 - Equipo",
			"Proyecto 2 - Equipo",
			"Proyecto 3 - Equipo",
			"Proyecto 4 - Equipo",
			"Proyecto 5 - Equipo",
		],
		direccion: "right",
		imagen: imagenes.Computadora_Cohete,
	},
};
