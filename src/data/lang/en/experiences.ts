import type { Experience } from "@/data/types.ts"

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
		url: "https://tri-devs.vercel.app/",
	},
	{
		company: "Cloudnonic",
		position: "Full Stack Developer",
		country: "Canada",
		description:
			"Contributed to the development and evolution of complex, production-grade platforms across healthcare, government, and education. I took ownership of key product features from implementation to delivery, working across the stack to build scalable solutions, improve application performance, and enhance overall user experience. Beyond feature development, I actively contributed to code reviews, CI/CD workflows, architecture decisions, and engineering best practices, while mentoring new developers and collaborating closely with international clients and cross-functional teams. I also worked in an AI-first environment, leveraging AI tools, LLM integrations, and emerging AI workflows to accelerate development and contribute to AI-powered product capabilities.",
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
			"Worked on the design, development, and evolution of business-critical web platforms, taking ownership of features across the full development lifecycle. I independently built a SaaS product from the ground up, contributing to product architecture, system design, third-party integrations, authentication flows, payments, and data-driven dashboards. I also helped modernize and improve existing enterprise systems by developing new modules, enhancing usability, refactoring legacy code, and reducing technical debt. My role required strong problem-solving skills, autonomy, and the ability to work with complex external services and documentation while delivering scalable, maintainable, and reliable solutions.",
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
			"Contributed to the development of a retail and eCommerce marketplace, taking an active role in shaping the frontend architecture, implementation standards, and overall user experience. Built responsive and accessible product experiences, collaborated closely with developers and stakeholders in an agile environment, and participated in feature planning and technical decision-making. Despite being in an internship role, demonstrated strong ownership by independently driving implementation decisions and delivering complete features from initial design through integration.",
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
	// {
	// 	company: "Teleperformance",
	// 	position: "Customer Service Associate",
	// 	country: "Colombia",
	// 	description:
	// 		"Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
	// 	start: {
	// 		// month: "JUL",
	// 		year: 2023,
	// 	},
	// 	end: {
	// 		// month: "JAN",
	// 		year: 2024,
	// 	},
	// 	technologies: [],
	// 	url: "https://www.tp.com/",
	// },
] satisfies Experience[]
