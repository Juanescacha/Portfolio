import type { Certificate, Experience, Profile, Project, Social } from "./types"

export type { Certificate, Experience, Profile, Project, Social }

export const profile: Profile = {
	name: "Juan Esteban Camargo",
	role: "Software Engineer",
	bio: "A passionate software engineer with a love for creating innovative solutions.",
	about: [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec quam sem. Morbi lacinia viverra dui ut tristique. Cras fermentum nec justo in volutpat. Duis a ex ipsum. Pellentesque rhoncus tortor fringilla, fringilla arcu at, pulvinar metus. Duis iaculis nunc vel felis tincidunt, nec semper diam sollicitudin. Aliquam interdum, neque non tincidunt vulputate, turpis libero vehicula purus, in lobortis est urna ac velit. Sed sit amet metus eu orci ultricies lobortis sit amet et dolor. Duis a auctor enim, et porta nibh. Nam massa erat, ornare in commodo vel, pulvinar posuere est. Quisque ultrices ex vitae nibh aliquam, ut vestibulum elit varius. Vivamus mollis lacus ut luctus tempor. Nulla egestas mi vitae lobortis auctor. Praesent tellus odio, euismod ut quam non, volutpat vehicula nibh. Proin mattis, metus nec mollis consequat, orci neque sollicitudin neque, vel condimentum metus erat ut justo. Nullam in velit id nulla consequat sollicitudin.",

		"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse et dapibus nunc. Aenean id faucibus quam. Donec sodales pharetra dui sed convallis. Sed consectetur diam a lacus posuere ultricies. In dictum nunc ut leo tincidunt, non hendrerit quam pulvinar. Sed non suscipit turpis. Fusce et dolor et eros tincidunt rhoncus ac sed magna. Cras ut tempor sem, a pulvinar odio. Nunc dictum iaculis rutrum.",

		"Nullam tincidunt, enim non aliquam pulvinar, odio eros laoreet nunc, vehicula vehicula lorem diam ut lacus. Nullam ac viverra neque. Nulla porttitor, sapien quis semper suscipit, nisl magna consequat nisi, nec fermentum augue nisi ut nisl. Praesent condimentum non ex et varius. Etiam pulvinar maximus sem eleifend efficitur. Phasellus eu purus nec massa eleifend blandit a sed lorem. Donec porta gravida arcu, id sodales mi mollis eget. Integer sit amet augue ullamcorper, congue elit vitae, tempor lorem. Suspendisse non magna a mauris luctus mollis in ut enim.",

		"Integer viverra urna sit amet vestibulum vestibulum. Vivamus id lorem vulputate dolor placerat fringilla at in lectus. Fusce ac nisi ut ex maximus vehicula. Maecenas justo orci, rhoncus sit amet suscipit ac, tristique ut lorem. Ut venenatis tincidunt quam id consequat. Ut mollis convallis justo vel semper. Curabitur at turpis in augue sodales varius. Etiam eu nunc arcu. Curabitur eget ultrices turpis. Nunc egestas sagittis purus vel mollis. Pellentesque ex lorem, euismod non ex quis, dignissim semper sapien. Praesent nec lectus eu ex viverra suscipit ut eget lectus.",
	],
}

export const sections = {
	about: "about",
	experience: "experience",
	projects: "projects",
} as const

export const socials = [
	{
		title: "GitHub",
		url: "https://www.github.com/juanescacha",
		icon: "",
	},
	{
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/juanescacha/",
		icon: "",
	},
	{
		title: "LeetCode",
		url: "https://leetcode.com/u/Juanescacha/",
		icon: "",
	},
	{
		title: "GitLab",
		url: "https://www.gitlab.com/juanescacha",
		icon: "",
	},
] satisfies Social[]

export const experiences = [
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
		imgSrc: "https://picsum.photos/200/201",
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
		imgSrc: "https://picsum.photos/200/202",
	},
	{
		name: "Portfolio V1",
		description: "A simple project",
		technologies: ["JavaScript", "React", "Three.js", "Tailwindcss"],
		year: 2022,
		deployUrl: "",
		imgSrc: "https://picsum.photos/200/203",
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
		imgSrc: "",
	},
	{
		name: "Scrum Foundation Professional Certificate",
		issuer: "CertiProf",
		date: {
			month: "January",
			year: 2023,
		},
		imgSrc: "",
	},
	{
		name: "EF Standard English Test: C2 Proficiency",
		issuer: "EF Education First",
		date: {
			month: "January",
			year: 2023,
		},
		imgSrc: "",
	},
]
