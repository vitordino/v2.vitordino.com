import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const IndexPage = ({data: {generalObject}}) => {
	const general = generalObject.frontmatter
	return (
		<Layout>
			hey home
		</Layout>
	)
}

export default IndexPage

export const pageQuery = graphql`
	query IndexQuery {
		generalObject: markdownRemark(frontmatter: { template: { eq: "general" } }) {
			frontmatter {
				title
			}
		}
	}
`
