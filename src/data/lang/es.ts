// Blogs Images
import BlogImage1 from "@/assets/images/blogs/1.jpg"
import BlogImage2 from "@/assets/images/blogs/2.jpg"
import BlogImage3 from "@/assets/images/blogs/3.jpg"
// Certificates Images
import CertiprofImage from "@/assets/images/certificates/certiprof.webp"
import EducationFirstImage from "@/assets/images/certificates/education-first.webp"
import HelsinkiImage from "@/assets/images/certificates/helsinki.webp"

// Projects Images
import ProjectImage1 from "@/assets/images/projects/1.jpg"
import ProjectImage2 from "@/assets/images/projects/2.jpg"
import PortfolioImage from "@/assets/images/projects/portfolio-v1.webp"

import type {
	Certificate,
	Experience,
	Profile,
	Project,
	Social,
} from "@/data/types"

export const ui = {
	ally: {
		aboutMe: "Sobre mí",
		workExperience: "Experiencia laboral",
		selectedProjects: "Proyectos seleccionados",
		selectedCertificates: "Certificados seleccionados",
		selectedBlogs: "Blogs seleccionados",
		techUsed: "Tecnologías utilizadas",
		socialMediaLinks: "Redes sociales",
		opensInNewTab: "Se abre en una pestaña nueva",
		inPageJumpLinks: "Enlaces de navegación dentro de la página",
		languageSelector: "Selector de idioma",
		changeTheme: "Cambiar tema",
		canonicalUrl: "https://juanescacha.dev/es/",
		backToTop: "Volver a la parte superior",
	},
	basic: {
		present: "Presente",
		from: "Desde",
		to: "hasta",
		viewFullResume: "Ver Currículum",
	},
}

export const profile: Profile = {
	name: "Juan Camargo",
	role: "Ingeniero de Software",
	bio: "Un ingeniero de software apasionado por crear soluciones innovadoras.",
	about: `¡Hola! Soy Brittany y me encanta construir cosas. Soy ingeniera frontend con experiencia en crear interfaces de usuario accesibles y de calidad impecable. Me enorgullece crear productos cuidados e inclusivos, y tengo buen ojo para los pequeños detalles que separan un buen producto de uno excepcional. Disfruto sobre todo trabajar en la intersección entre diseño e ingeniería, donde una gran experiencia de usuario se encuentra con un código limpio y escalable.

Actualmente soy Senior Frontend Engineer en [**Klaviyo**](https://www.google.com "perra"), donde trabajo en nuestro design system y ayudo a construir nuevos productos, como [**Composer**](https://www.google.com "perra2"). Lidero los esfuerzos de ingeniería en nuestra librería de componentes y en la plataforma frontend, colaborando de cerca con diseñadores e ingenieros para asegurar que la accesibilidad esté integrada en la base de todo lo que lanzamos.

Anteriormente he trabajado en una amplia variedad de entornos —desde estudios de producto hasta startups y grandes empresas de tecnología— incluyendo Apple, Starry Internet y Upstatement. Fuera de mi trabajo diario, también creé hace algunos años un curso de video en línea que explica cómo construir, desde cero, una aplicación real basada en una API. Estas experiencias han moldeado mi forma de pensar sobre cómo construir productos bien hechos y ampliamente usables.

En mi tiempo libre, usualmente me pueden encontrar escalando, jugando tenis, pasando tiempo con mi esposa y mis dos gatos, o recorriendo Hyrule en busca de semillas Korok.`,
	footer: `Diseñado en [Figma](https://www.figma.com) y programado en [WebStorm](https://www.jetbrains.com/webstorm/) por Juan Camargo.

Construido con [Astro](https://astro.build/) y [Tailwind CSS](https://www.tailwindcss.com), desplegado con [Vercel](https://www.vercel.com).

&copy; ${new Date().getFullYear()}. Todos los derechos reservados.
`,
}

export const sections = {
	about: "perfil",
	experience: "experiencia",
	projects: "proyectos",
	certificates: "certificados",
	blogs: "blogs",
} as const

export const socials = [
	{
		title: "GitHub",
		url: "https://www.github.com/juanescacha",
		icon: "github",
	},
	{
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/juanescacha/",
		icon: "linkedin",
	},
	{
		title: "LeetCode",
		url: "https://leetcode.com/u/Juanescacha/",
		icon: "leetcode",
	},
	{
		title: "GitLab",
		url: "https://www.gitlab.com/juanescacha",
		icon: "gitlab",
	},
] satisfies Social[]

export const experiences = [
	{
		company: "Lulos",
		position: "Cofundador y Desarrollador Full Stack",
		country: "Colombia",
		description: `Empresa de soluciones digitales especializada en desarrollo web, SEO técnico, SEO local, e implementación de soluciones digitales escalables para negocios. Lidero el desarrollo integral de proyectos web, desde la planeación y la implementación técnica hasta la optimización, el despliegue y la mejora continua, combinando desarrollo de software, rendimiento y estrategia de posicionamiento orgánico.

Entregué soluciones digitales para clientes como CIT Consultoría Integral de Tránsito, GastroGest Pro y Tiffany Esthetic Group IPS, entre otros. Los proyectos han incluido desarrollo de sitios web, optimización técnica, transformación digital y mejoras de visibilidad en buscadores, alcanzando resultados como 48,000+ impresiones, 708 clics orgánicos y una posición promedio de 8.2 en Google Search Console.`,
		start: {
			// month: "FEB",
			year: 2026,
		},
		technologies: ["Next.js", "TypeScript"],
		url: "https://www.lulos.com/",
	},
	{
		company: "Cloudnonic",
		position: "Desarrollador Full Stack",
		country: "Canadá",
		description:
			"Construyo, diseño y lanzo sitios web, design systems, apps móviles y experiencias digitales de alta calidad para una amplia variedad de proyectos, para clientes como Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, entre otros. Aporto liderazgo dentro del área de ingeniería mediante colaboración cercana, sesiones de conocimiento compartido e impulsando el desarrollo de herramientas internas.",
		start: {
			// month: "DEC",
			year: 2024,
		},
		end: {
			// month: "FEB",
			year: 2026,
		},
		technologies: ["Next.js", "TypeScript", "Tailwindcss", "Node", "NestJs"],
		url: "https://www.cloudnonic.com/",
	},
	{
		company: "vr_BAND",
		position: "Desarrollador Full Stack",
		country: "República Checa",
		description:
			"Construyo, diseño y lanzo sitios web, design systems, apps móviles y experiencias digitales de alta calidad para una amplia variedad de proyectos, para clientes como Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, entre otros. Aporto liderazgo dentro del área de ingeniería mediante colaboración cercana, sesiones de conocimiento compartido e impulsando el desarrollo de herramientas internas.",
		start: {
			month: "FEB",
			// year: 2024,
		},
		end: {
			month: "NOV",
			year: 2024,
		},
		technologies: ["Vue", "TypeScript", "Tailwindcss"],
		url: "https://vrband.eu/",
	},
	{
		company: "Endava",
		position: "Practicante de Front End Developer",
		country: "Colombia",
		description:
			"Construyo, diseño y lanzo sitios web, design systems, apps móviles y experiencias digitales de alta calidad para una amplia variedad de proyectos, para clientes como Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, entre otros. Aporto liderazgo dentro del área de ingeniería mediante colaboración cercana, sesiones de conocimiento compartido e impulsando el desarrollo de herramientas internas.",
		start: {
			// month: "JUL",
			year: 2023,
		},
		end: {
			// month: "JAN",
			year: 2024,
		},
		technologies: [
			"TypeScript",
			"React",
			"Vue",
			"Tailwindcss",
			"Node",
			"Pinia",
			"Vitest",
			"Sass",
		],
		url: "https://www.endava.com/",
	},
	{
		company: "Teleperformance",
		position: "Asociado de Servicio al Cliente",
		country: "Colombia",
		description:
			"Construyo, diseño y lanzo sitios web, design systems, apps móviles y experiencias digitales de alta calidad para una amplia variedad de proyectos, para clientes como Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, entre otros. Aporto liderazgo dentro del área de ingeniería mediante colaboración cercana, sesiones de conocimiento compartido e impulsando el desarrollo de herramientas internas.",
		start: {
			// month: "JUL",
			year: 2023,
		},
		end: {
			// month: "JAN",
			year: 2024,
		},
		technologies: [],
		url: "https://www.tp.com/",
	},
] satisfies Experience[]

export const projects: Project[] = [
	{
		name: "GoMedicus Group",
		description: "Un proyecto sencillo",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss"],
		year: 2025,
		deployUrl: "",
		imgSrc: ProjectImage1,
	},
	{
		name: "Endava Marketplace",
		description: "Un proyecto sencillo",
		technologies: [
			"TypeScript",
			"Vue",
			"Tailwindcss",
			"Vitest",
			"Pinia",
			"Sass",
		],
		year: 2023,
		deployUrl: "",
		imgSrc: ProjectImage2,
	},
	{
		name: "Portfolio V1",
		description: "Un proyecto sencillo",
		technologies: ["JavaScript", "React", "Three.js", "Tailwindcss"],
		year: 2022,
		deployUrl: "https://portfolio-juanes.vercel.app/",
		imgSrc: PortfolioImage,
	},
]

export const certificates: Certificate[] = [
	{
		name: "Full Stack Open",
		issuer: "University of Helsinki",
		date: {
			month: "Marzo",
			year: 2023,
		},
		imgSrc: HelsinkiImage,
		url: "/certificate-fullstack.png",
	},
	{
		name: "GraphQL",
		issuer: "University of Helsinki",
		date: {
			month: "Abril",
			year: 2023,
		},
		imgSrc: HelsinkiImage,
		url: "/certificate-graphql.png",
	},
	{
		name: "TypeScript",
		issuer: "University of Helsinki",
		date: {
			month: "Mayo",
			year: 2023,
		},
		imgSrc: HelsinkiImage,
		url: "/certificate-typescript.png",
	},
	{
		name: "Scrum Foundation Professional Certificate",
		issuer: "CertiProf",
		date: {
			month: "Enero",
			year: 2023,
		},
		imgSrc: CertiprofImage,
		url: "certificate-scrum.pdf",
	},
	{
		name: "EF Standard English Test: C2 Proficiency",
		issuer: "EF Education First",
		date: {
			month: "Enero",
			year: 2023,
		},
		imgSrc: EducationFirstImage,
		url: "certificate-english.pdf",
	},
]

export const blogs = [
	{
		title: "React vs Next.js en 2026: ¿cuál elegir para tu proyecto?",
		date: {
			month: "Julio",
			year: 2026,
		},
		imgSrc: BlogImage1,
		url: "https://tri-devs.vercel.app/blog/react-vs-next-js-cual-elegir",
	},
	{
		title: "Core Web Vitals en 2026: guía técnica para desarrolladores",
		date: {
			month: "Marzo",
			year: 2026,
		},
		imgSrc: BlogImage2,
		url: "https://tri-devs.vercel.app/blog/core-web-vitals-guia-tecnica",
	},
	{
		title: "My First Blog Post",
		date: {
			month: "January",
			year: 2023,
		},
		imgSrc: BlogImage3,
		url: "",
	},
]
