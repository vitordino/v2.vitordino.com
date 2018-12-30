export const flattenEdges = obj => (
	obj.edges.map(({node: {html, frontmatter}}) => ({...frontmatter, html}))
)
