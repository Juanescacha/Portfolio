import CertiprofImage from "@/assets/images/certificates/certiprof.webp"
import EducationFirstImage from "@/assets/images/certificates/education-first.webp"
import HelsinkiImage from "@/assets/images/certificates/helsinki.webp"

import type { Certificate } from "@/data/types.ts"

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
