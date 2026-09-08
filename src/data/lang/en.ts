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
	Blog,
	Certificate,
	Experience,
	Profile,
	Project,
	Social,
} from "@/data/types"

export const ui = {
	ally: {
		aboutMe: "About me",
		workExperience: "Work experience",
		selectedProjects: "Selected Projects",
		selectedCertificates: "Selected Certificates",
		selectedBlogs: "Selected Blogs",
		techUsed: "Technologies used",
		socialMediaLinks: "Social media",
		opensInNewTab: "Opens in a new tab",
		inPageJumpLinks: "In-page jump links",
		languageSelector: "Language selector",
		changeTheme: "Change theme",
		canonicalUrl: "https://juanescacha.dev/",
		backToTop: "Back to top",
	},
	basic: {
		present: "Present",
		from: "From",
		to: "to",
		viewFullResume: "View Full Resume",
	},
}

export const profile: Profile = {
	name: "Juan Camargo",
	role: "Software Engineer",
	bio: "A passionate software engineer with a love for creating innovative solutions.",
	about: `Hi, I'm Juanes, a Full Stack Developer based in Cali, Colombia, with over 3 years of experience building web platforms end-to-end: system architecture, backend APIs, and accessible, pixel-perfect interfaces. I work mainly in the JavaScript/TypeScript ecosystem — React, Next.js, and Vue.js on the frontend; NestJS, Prisma, and PostgreSQL on the backend — and I like owning a problem from planning through deployment instead of just shipping isolated features. My work has spanned healthcare, SaaS, ERP, and e-commerce products, usually for teams working across multiple countries and time zones.

Right now, I'm the Co-Founder and Fullstack Developer at Lulos Impulso Digital, a digital solutions company I launched with two partners, where we build web platforms and drive technical and local SEO for businesses. For clients like CIT Consultoría Integral de Tránsito, GastroGest Pro, and Tiffany Esthetic Group IPS, we've delivered measurable results — including 48,000+ search impressions, 708+ organic clicks, and an average Google Search Console position of 8.2. That sits alongside three-plus years of professional experience from Full Stack Developer roles at Cloudnonic (Canada) and Vrband (Czech Republic), plus a Front End Developer internship at Endava (Colombia).

At Cloudnonic, I helped build a multi-tenant healthcare platform — appointment flows, role-based dashboards for patients, doctors, and providers, and telemedicine workflows — using React, TypeScript, Redux Toolkit, NestJS, and Prisma, while mentoring other developers and working in an AI-first environment with LLM and MCP integrations. At Vrband, I built a SaaS marketing analytics platform and an ERP system independently from scratch, owning frontend, backend, and architecture decisions with Vue.js and Laravel. That range — healthcare, SaaS, ERP, retail — plus C2-level English proficiency and a Full Stack Open certificate from the University of Helsinki, is what I bring to any team I join.

I'm finishing my degree in Systems Engineering at Universidad del Valle. Outside of code, I'm a bit of a cinema nerd — I love IMAX and the technical side of film, from projection systems to color grading — and I'm learning Japanese (I studied it at Centro Educativo Colombo Japonés and I'm currently at an A1 level), with a very specific goal: traveling to Japan someday and getting by speaking only Japanese.`,
	footer: `Designed in [Figma](https://www.figma.com) and coded in [WebStorm](https://www.jetbrains.com/webstorm/) by Juan Camargo.

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://www.tailwindcss.com), deployed with [Vercel](https://www.vercel.com).

&copy; ${new Date().getFullYear()}. All rights reserved.
`,
}

export const sections = {
	about: "about",
	experience: "experience",
	projects: "projects",
	certificates: "certificates",
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
		position: "Co-Founder & Full Stack Developer",
		country: "Colombia",
		description: `Digital solutions company specializing in web development, technical SEO, local SEO, and the implementation of scalable digital solutions for businesses. Lead the end-to-end development of web projects, from planning and technical implementation to optimization, deployment, and continuous improvement, combining software development, performance, and organic search strategy.

Delivered digital solutions for clients including CIT Consultoría Integral de Tránsito, GastroGest Pro, and Tiffany Esthetic Group IPS, among others. Projects have included website development, technical optimization, digital transformation, and search visibility improvements, achieving results such as 48,000+ impressions, 708 organic clicks, and an average Google Search Console position of 8.2.`,
		start: {
			// month: "FEB",
			year: 2026,
		},
		technologies: ["Next.js", "TypeScript"],
		url: "https://www.lulos.com/",
	},
	{
		company: "Cloudnonic",
		position: "Full Stack Developer",
		country: "Canada",
		description:
			"Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
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
		position: "Full Stack Developer",
		country: "Czech Republic",
		description:
			"Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
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
		position: "Front End Developer Intern",
		country: "Colombia",
		description:
			"Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
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
		position: "Customer Service Associate",
		country: "Colombia",
		description:
			"Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
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
		description: "A simple project",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss"],
		year: 2025,
		deployUrl: "",
		imgSrc: ProjectImage1,
	},
	{
		name: "Endava Marketplace",
		description: "A simple project",
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
		description: "A simple project",
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
			month: "March",
			year: 2023,
		},
		imgSrc: HelsinkiImage,
		url: "/certificate-fullstack.png",
	},
	{
		name: "GraphQL",
		issuer: "University of Helsinki",
		date: {
			month: "April",
			year: 2023,
		},
		imgSrc: HelsinkiImage,
		url: "/certificate-graphql.png",
	},
	{
		name: "TypeScript",
		issuer: "University of Helsinki",
		date: {
			month: "May",
			year: 2023,
		},
		imgSrc: HelsinkiImage,
		url: "/certificate-typescript.png",
	},
	{
		name: "Scrum Foundation Professional Certificate",
		issuer: "CertiProf",
		date: {
			month: "January",
			year: 2023,
		},
		imgSrc: CertiprofImage,
		url: "/certificate-scrum.png",
	},
	{
		name: "EF Standard English Test: C2 Proficiency",
		issuer: "EF Education First",
		date: {
			month: "January",
			year: 2023,
		},
		imgSrc: EducationFirstImage,
		url: "/certificate-english.png",
	},
]

export const blogs: Blog[] = [
	{
		title: "React vs Next.js in 2026: Which to Choose for Your Project?",
		date: {
			month: "July",
			year: 2026,
		},
		imgSrc: BlogImage1,
		url: "https://tri-devs.vercel.app/blog/react-vs-next-js-cual-elegir",
	},
	{
		title: "Core Web Vitals in 2026: A Technical Guide for Developers",
		date: {
			month: "March",
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
