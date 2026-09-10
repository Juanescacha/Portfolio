import CITImage from "@/assets/images/projects/cit.webp"
import EndavaMarketplaceImage from "@/assets/images/projects/endava-marketplace.webp"
import GastroGestProImage from "@/assets/images/projects/gastrogest-pro.webp"
import GoMedicusGroupImage from "@/assets/images/projects/gomedicus-group.webp"
import PortfolioV1Image from "@/assets/images/projects/portfolio-v1.webp"
import TiffanyEstheticGroupImage from "@/assets/images/projects/tiffany-esthetic-group.webp"

import type { Project } from "@/data/types.ts"

export const projects: Project[] = [
	{
		name: "Consultoría Integral de Transito (CIT)",
		description: "A simple project",
		technologies: ["Next.js", "TypeScript", "Google Analytics", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://transitocitcali.com/",
		imgSrc: CITImage,
	},
	{
		name: "Tiffany Esthetic Group IPS",
		description: "A simple project",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://tiffany-esthetic-group-ips-sas.vercel.app/",
		imgSrc: TiffanyEstheticGroupImage,
	},
	{
		name: "GastroGest Pro",
		description: "A simple project",
		technologies: ["Next.js", "TypeScript", "Google Analytics", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://gastrogestpro.com/",
		imgSrc: GastroGestProImage,
	},
	{
		name: "GoMedicus Group",
		description: "A simple project",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss", "Swiper"],
		year: 2025,
		deployUrl: "https://www.gomedicusgroup.com/",
		imgSrc: GoMedicusGroupImage,
	},
	{
		name: "Endava Marketplace",
		description: "A simple project",
		technologies: [
			"Vue",
			"JavaScript",
			"Tailwindcss",
			"Vitest",
			"Pinia",
			"Sass",
		],
		year: 2023,
		deployUrl: "https://endava-marketplace.vercel.app/",
		imgSrc: EndavaMarketplaceImage,
	},
	{
		name: "Portfolio V1",
		description: "A simple project",
		technologies: ["JavaScript", "React", "Three.js", "Tailwindcss"],
		year: 2022,
		deployUrl: "https://portfolio-juanes.vercel.app/",
		imgSrc: PortfolioV1Image,
	},
]
