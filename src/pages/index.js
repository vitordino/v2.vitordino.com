import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import above from '../utils/above'
import {flattenEdges} from '../utils/data'
import Layout from '../components/Layout'
import {Heading} from '../components/Text'
import List from '../components/List'

const Wrapper = styled.div`
	padding: 1.5rem 1rem;
	${above('sm')`padding: 2.5rem 1.5rem;`}
	${above('md')`padding: 3.125rem 2rem;`}
	${above('lg')`padding: 4.25rem 3.5rem;`}
	${above('xg')`padding: 3.75rem 3.5rem;`}
`

const IndexPage = ({data: {allExperience, allWork, allProjects}}) => (
	<Layout>
		<Wrapper>
			<Heading weight={300} color={p => p.theme.colors.base44}>
				move fast, learn everyday
			</Heading>
			<List title='Experience' items={flattenEdges(allExperience)}/>
			<List title='Works' items={flattenEdges(allWork)}/>
			<List title='Open source' items={flattenEdges(allProjects)}/>
		</Wrapper>
	</Layout>
)

export default IndexPage

export const pageQuery = graphql`
	query IndexQuery {
		allExperience: allMarkdownRemark(
			filter: {frontmatter: { template: { eq: "experience" } }}
			sort: {fields: fields___slug}
		) {
			edges {
				node {
					html
					frontmatter {
						template
						title
						date
						description
						to
					}
				}
			}
		}
		allWork: allMarkdownRemark(
			filter: {frontmatter: { template: { eq: "work" } }}
			sort: {fields: fields___slug}
		) {
			edges {
				node {
					html
					frontmatter {
						template
						title
						description
						date
						to
						color
						image {
							publicURL
						}
					}
				}
			}
		}
		allProjects: allMarkdownRemark(
			filter: {frontmatter: { template: { eq: "project" } }}
			sort: {fields: fields___slug}
		) {
			edges {
				node {
					html
					frontmatter {
						template
						title
						description
						date
						to
						color
						image {
							publicURL
						}
					}
				}
			}
		}
	}
`
