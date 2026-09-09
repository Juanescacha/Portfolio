import BlogImage1 from "@/assets/images/blogs/1.jpg"
import BlogImage2 from "@/assets/images/blogs/2.jpg"
import BlogImage3 from "@/assets/images/blogs/3.jpg"
import type { Blog } from "@/data/types.ts"

export const blogs: Blog[] = [
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
