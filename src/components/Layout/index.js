import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, css, createGlobalStyle } from 'styled-components'
import reset from 'minireset.css'
import fontFace from '../../utils/fontFace'
import above from '../../utils/above'
import theme from '../../theme'
import Sidebar from '../Sidebar'

const fontStyle = ([
	{name: 'FaktPro', src: 'FaktPro-Hair', fontWeight: 100},
	{name: 'FaktPro', src: 'FaktPro-Thin', fontWeight: 200},
	{name: 'FaktPro', src: 'FaktPro-Light', fontWeight: 300},
	{name: 'FaktPro', src: 'FaktPro-Blond', fontWeight: 400},
	{name: 'FaktPro', src: 'FaktPro-Normal', fontWeight: 500},
	{name: 'FaktPro', src: 'FaktPro-Medium', fontWeight: 600},
	{name: 'FaktPro', src: 'FaktPro-SemiBold', fontWeight: 700},
]).map(font => fontFace(font)).join('\n')

const GlobalStyle = createGlobalStyle`
	${reset}
	${fontStyle}
	html {
		font-family: ${theme.fonts.default};
		background: ${theme.colors.base03};
		text-rendering: optimizeLegibility;
		font-smooth: antialised;
		font-smoothing: antialised;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'pnum' 0, 'tnum' 1, 'onum' 0, 'lnum' 1, 'dlig' 1, 'zero' 1, 'case' 1;
	}
	::selection{
		background: ${theme.colors.base03};
		color: ${theme.colors.base88};
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

const Wrapper = styled.div`
	${above('md')`
		display: flex;
	`}
`

const Main = styled.main`
	background: ${p => p.theme.colors.white};
	flex: 125;
	min-height: 100vh;
`

const Layout = ({ children }) => (
	<StaticQuery query={query}>
		{data => (
			<ThemeProvider theme={theme}>
				<Fragment>
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
					<Wrapper>
						<Sidebar/>
						<Main>{children}</Main>
					</Wrapper>
				</Fragment>
			</ThemeProvider>
		)}
	</StaticQuery>
)

export default Layout
