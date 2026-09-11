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
			"Agencia de crecimiento digital especializada en desarrollo web, SEO, GEO, AEO y soluciones digitales impulsadas por inteligencia artificial. La empresa combina tecnología, estrategia y enfoques basados en datos para ayudar a las empresas a fortalecer su presencia en línea, conectar con clientes potenciales y lograr un crecimiento medible tanto en mercados locales como globales.",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://tri-devs.vercel.app/",
		imgSrc: LulosImage,
	},
	{
		name: "Consultoría Integral de Transito (CIT)",
		description:
			"Empresa especializada en trámites de tránsito y vehículos, que ofrece acompañamiento profesional, legal y administrativo en servicios como traspasos de vehículos, licencias de conducción, multas de tránsito, reclamaciones por accidentes y asesoría jurídica. Con más de 10 años de experiencia, la empresa se enfoca en brindar soluciones confiables, transparentes e integrales para ayudar a las personas a gestionar de manera eficiente sus trámites",
		technologies: ["Next.js", "TypeScript", "Google Analytics", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://transitocitcali.com/",
		imgSrc: CITImage,
	},
	{
		name: "Tiffany Esthetic Group IPS",
		description:
			"Institución de salud especializada en servicios de cirugía plástica, estética y quirúrgica. La clínica brinda atención médica profesional en una amplia variedad de procedimientos estéticos y reconstructivos, respaldada por especialistas calificados y un enfoque centrado en el paciente, con énfasis en la seguridad, la atención personalizada y resultados de alta calidad.",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://tiffany-esthetic-group-ips-sas.vercel.app/",
		imgSrc: TiffanyEstheticGroupImage,
	},
	{
		name: "GastroGest Pro",
		description:
			"Plataforma de gestión empresarial en la nube diseñada para ayudar a las empresas a centralizar y optimizar sus operaciones diarias. Sus soluciones integradas incluyen sistemas de punto de venta, gestión de inventarios, CRM y fidelización de clientes, compras, nómina, reportes financieros, gestión de domicilios, catálogos digitales y facturación electrónica conforme a los requisitos de la DIAN. La plataforma está dirigida a emprendedores, pymes, franquicias y profesionales independientes, y ofrece herramientas flexibles para mejorar la eficiencia, el control y el crecimiento del negocio desde cualquier dispositivo.",
		technologies: ["Next.js", "TypeScript", "Google Analytics", "Tailwindcss"],
		year: 2026,
		deployUrl: "https://gastrogestpro.com/",
		imgSrc: GastroGestProImage,
	},
	{
		name: "GoMedicus Group",
		description:
			"Empresa de salud con sede en Alemania enfocada en modernizar la atención ambulatoria y primaria mediante un modelo de atención híbrida e integrada. Al combinar consultas médicas presenciales con telemedicina, herramientas digitales de salud y rutas de atención coordinadas, la empresa conecta a los pacientes con los médicos de manera más eficiente, al tiempo que brinda apoyo a profesionales de la salud, proveedores médicos, aseguradoras y aliados regionales. Su misión es ampliar el acceso a una atención médica de alta calidad en toda Alemania mediante soluciones escalables, centradas en el paciente y respaldadas por tecnología.",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss"],
		year: 2025,
		deployUrl: "https://www.gomedicusgroup.com/",
		imgSrc: GoMedicusGroupImage,
	},
	{
		name: "Endava Marketplace",
		description:
			"Plataforma interna diseñada para que los Endavans puedan comprar y vender artículos personales de forma fácil y segura dentro de la comunidad de la empresa. Los usuarios pueden crear publicaciones con imágenes, precios y detalles de los productos, gestionar el estado de sus artículos, hacer seguimiento a sus compras y ventas, dejar calificaciones y reseñas, y comunicarse directamente con los vendedores a través de Microsoft Teams para completar las transacciones. La plataforma también incluye perfiles de usuario y herramientas administrativas para gestionar categorías, usuarios y contenido del marketplace.",
		technologies: [
			"Vue",
			"JavaScript",
			"Tailwindcss",
			"Vitest",
			"Pinia",
			"Sass",
		],
		year: 2023,
		deployUrl: "https://endava-marketplace.vercel.app/  ",
		imgSrc: EndavaMarketplaceImage,
	},
	{
		name: "Portfolio V1",
		description:
			"Mi primer portafolio personal, diseñado para presentar mi perfil profesional, destacar proyectos seleccionados y ofrecer una visión clara de mis habilidades, experiencia y trayectoria profesional. La plataforma funciona como un espacio central donde visitantes y posibles empleadores pueden explorar trabajos anteriores, conocer más sobre el profesional detrás de los proyectos y acceder fácilmente a información relevante y canales de contacto.",
		technologies: ["JavaScript", "React", "Three.js", "Tailwindcss"],
		year: 2022,
		deployUrl: "https://portfolio-juanes.vercel.app/",
		imgSrc: PortfolioV1Image,
	},
]
