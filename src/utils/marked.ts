import { marked } from "marked"
import { getContent } from "@/data"

const { ui } = getContent()

const renderer = new marked.Renderer()

renderer.link = function ({ href, title, tokens }) {
	const text = this.parser.parseInline(tokens)
	const titleAttr = title ? ` title="${title}"` : ""

	return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer" aria-label="${text} (${ui.ally.opensInNewTab})">${text}</a>`
}

marked.use({ renderer })

export { marked }
