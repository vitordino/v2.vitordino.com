import React from 'react'
import styled from 'styled-components'
import {above} from '../../utils/above'
import Link from '../Link'

const Wrapper = styled(Link)`
	display: block;
	text-decoration: none;
	color: currentColor;
	padding: 1rem;
	opacity: 0.44;
	&:hover{
		opacity: 0.88;
	}
	img{
		width: 1.25rem;
		height: auto;
		display: block;
	}
	${above('md')`
		opacity: 0.22;
		img{
			width: auto;
		}
	`}
`

const IconLink = ({icon, to, ...props}) => (
	<Wrapper to={to} {...props}>
		<img src={`/assets/icons/${icon}.svg`}/>
	</Wrapper>
)

export default IconLink
