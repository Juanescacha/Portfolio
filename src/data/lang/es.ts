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
	about: `Hola soy Juanes, Full Stack Developer con base en Colombia 🇨🇴 con **3+ años** de experiencia construyendo plataformas web integrales. Trabajo principalmente en el ecosistema JavaScript/TypeScript — React, Next.js y Vue.js en el Front End; NestJS, Prisma y PostgreSQL en el Back End. Mi trabajo ha sido en salud, SaaS, ERP y e-commerce, usualmente para equipos que trabajan en múltiples países y zonas horarias.

Soy el Co-Founder y Full Stack Developer en **[Lulos Impulso Digital](https://tri-devs.vercel.app/)**, donde construimos plataformas web, aplicativos e impulsamos el SEO técnico y local para clientes como **[CIT](https://transitocitcali.com/)**, **[GastroGest Pro]()** y **[Tiffany Esthetic Group](https://tiffany-esthetic-group-ips-sas.vercel.app/)**, hemos entregado resultados medibles — incluyendo 48,000+ impresiones de búsqueda, 708+ clics orgánicos, y una posición promedio de 8.2 en Google Search Console.

En **[Cloudnonic](https://www.cloudnonic.com/)** ayudé a construir una plataforma de salud multi-tenant con React, TypeScript, Redux Toolkit, React Query, NestJS y Prisma. En **[Vrband](https://vrband.eu/)** construí desde cero una plataforma de analítica SaaS y un sistema ERP. Tengo un nivel de inglés C2 y un certificado Full Stack Open de la **[University of Helsinki](https://www.helsinki.fi/en)**.

Estoy terminando mi carrera de Ingeniería de Sistemas en la **[Universidad del Valle](https://www.univalle.edu.co/)**. Fuera del código, me interesa el cine especialmente IMAX y aprender japonés, con la meta de viajar algún día a Japón y desenvolverme hablando solo japonés.`,

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
		url: "certificate-scrum.png",
	},
	{
		name: "EF Standard English Test: C2 Proficiency",
		issuer: "EF Education First",
		date: {
			month: "Enero",
			year: 2023,
		},
		imgSrc: EducationFirstImage,
		url: "certificate-english.png",
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
