import CITImage from "@/assets/images/projects/cit.webp"
import EndavaMarketplaceImage from "@/assets/images/projects/endava-marketplace.webp"
import GastroGestProImage from "@/assets/images/projects/gastrogest-pro.webp"
import GoMedicusGroupImage from "@/assets/images/projects/gomedicus-group.webp"
import LulosImage from "@/assets/images/projects/lulos.webp"
import PortfolioV1Image from "@/assets/images/projects/portfolio-v1.webp"
import TiffanyEstheticGroupImage from "@/assets/images/projects/tiffany-esthetic-group.webp"

import type { Project } from "@/data/types.ts"

export const projects: Project[] = [
	{
		name: "Lulos Impulso Digital",
		description:
			"Digital growth agency, specializing in web development, SEO, GEO, AEO, and AI-powered digital solutions. The company combines technology, strategy, and data-driven approaches to help businesses strengthen their online visibility, connect with potential customers, and achieve measurable growth in both local and global markets.",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://lulosimpulsodigital.com/",
		imgSrc: LulosImage,
	},
	{
		name: "Consultoría Integral de Transito (CIT)",
		description:
			"Company specializing in traffic and vehicle-related procedures, offering professional legal and administrative support for services such as vehicle transfers, driver’s licenses, traffic fines, accident claims, and legal consulting. With more than 10 years of experience, the company focuses on providing reliable, transparent, and comprehensive solutions to help individuals efficiently navigate traffic and transportation processes.",
		technologies: ["Next.js", "TypeScript", "Google Analytics", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://transitocitcali.com/",
		imgSrc: CITImage,
	},
	{
		name: "Tiffany Esthetic Group IPS",
		description:
			"Healthcare institution specializing in plastic, aesthetic, and surgical services. The clinic provides professional medical care across a range of cosmetic and reconstructive procedures, supported by qualified specialists and a patient-centered approach focused on safety, personalized attention, and high-quality results.",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://tiffany-esthetic-group-ips-sas.vercel.app/",
		imgSrc: TiffanyEstheticGroupImage,
	},
	{
		name: "GastroGest Pro",
		description:
			"Cloud business management platform designed to help companies centralize and streamline their daily operations. Its integrated solutions include point-of-sale systems, inventory management, CRM and customer loyalty, purchasing, payroll, financial reporting, delivery management, digital catalogs, and electronic invoicing compliant with DIAN requirements. The platform serves entrepreneurs, SMEs, franchises, and independent professionals, offering flexible tools to improve efficiency, control, and business growth from any device.",
		technologies: ["Next.js", "TypeScript", "Google Analytics", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://gastrogestpro.com/",
		imgSrc: GastroGestProImage,
	},
	{
		name: "GoMedicus Group",
		description:
			"Germany based healthcare company focused on modernizing outpatient and primary care through an integrated hybrid healthcare model. By combining in-person medical practices with telemedicine, digital health tools, and coordinated care pathways, the company connects patients with physicians more efficiently while supporting doctors, healthcare providers, insurers, and regional partners. Its mission is to expand access to high-quality medical care across Germany through scalable, patient-centered, and technology-enabled solutions.",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss", "Swiper"],
		year: 2025,
		deployUrl: "https://www.gomedicusgroup.com/",
		imgSrc: GoMedicusGroupImage,
	},
	{
		name: "Endava Marketplace",
		description:
			"Internal platform designed for Endavans to easily and securely buy and sell personal items within the company community. Users can create listings with images, prices, and product details, manage the status of their items, track purchases and sales, leave ratings and reviews, and connect directly with sellers through Microsoft Teams to complete transactions. The platform also includes user profiles and administrative tools for managing categories, users, and marketplace content.",
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
		description:
			"My first personal portfolio designed to present a professional profile, showcase selected projects, and provide a clear overview of skills, experience, and career background. The platform serves as a central space where visitors and potential employers can explore previous work, learn more about the professional behind the projects, and easily access relevant information and contact channels.",
		technologies: ["JavaScript", "React", "Three.js", "Tailwindcss"],
		year: 2022,
		deployUrl: "https://portfolio-juanes.vercel.app/",
		imgSrc: PortfolioV1Image,
	},
]
