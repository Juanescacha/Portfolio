import ProjectImage1 from "@/assets/images/projects/1.jpg"
import ProjectImage2 from "@/assets/images/projects/2.jpg"
import PortfolioImage from "@/assets/images/projects/portfolio-v1.webp"
import type { Project } from "@/data/types.ts"

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
