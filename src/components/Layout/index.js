import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, css, createGlobalStyle } from 'styled-components'
import reset from 'minireset.css'
import fontFace from '../../utils/fontFace'
import theme from '../../theme'

const GlobalStyle = createGlobalStyle`
	${reset}
	html {
		font-family: ${theme.fonts.default};
	}
`

const query = graphql`
	query HeadingQuery {
		site {
			siteMetadata {
				title,
				description,
			}
		}
	}
`

const Main = styled.main`
	text-rendering: optimizeLegibility;
	font-smooth: antialised;
	font-smoothing: antialised;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Layout = ({ children }) => (
	<StaticQuery query={query}>
		{data => (
			<ThemeProvider theme={theme}>
				<div>
					<GlobalStyle/>
					<Helmet>
						<html lang="en"/>
						<title>{data.site.siteMetadata.title}</title>
						<meta name="description" content={data.site.siteMetadata.description}/>
						<link rel="icon" type="image/png" href="/assets/favicon-32x32.png" sizes="32x32"/>
						<link rel="icon" type="image/png" href="/assets/favicon-16x16.png" sizes="16x16"/>
						<link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#ff4400"/>
						<meta name="theme-color" content="#fff"/>
						<meta property="og:type" content="business.business"/>
						<meta property="og:title" content={data.site.siteMetadata.title}/>
						<meta property="og:url" content="/"/>
						<meta property="og:image" content="/assets/og-image.jpg"/>
					</Helmet>
					<Main>{children}</Main>
				</div>
			</ThemeProvider>
		)}
	</StaticQuery>
)

export default Layout
