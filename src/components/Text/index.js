import React from 'react'
import styled from 'styled-components'
import above from '../../utils/above'
import { defaultTag } from '../../utils/react'

const pickColor = ({color, theme}) => color ? (theme.colors[color] || color) : 'currentColor'
const pickWeight = ({weight}) => typeof weight === 'number' ? weight : 'inherit'

const sizes = {
	0: {fontSize: '0.750rem', lineHeight: '1.25rem'},
	1: {fontSize: '0.875rem', lineHeight: '1.50rem'},
	2: {fontSize: '1.000rem', lineHeight: '1.75rem'},
	3: {fontSize: '1.125rem', lineHeight: '1.875rem'},
	4: {fontSize: '1.250rem', lineHeight: '2.00rem'},
	5: {fontSize: '1.500rem', lineHeight: '2.25rem'},
	6: {fontSize: '2.000rem', lineHeight: '2.50rem'},
	7: {fontSize: '2.500rem', lineHeight: '3.00rem'},
	8: {fontSize: '3.000rem', lineHeight: '3.50rem'},
	9: {fontSize: '3.500rem', lineHeight: '4.00rem'},
}


export const Paragraph = styled(
	// eslint-disable-next-line no-unused-vars
	({color, weight, size, uppercase, align, ...props}) => <div {...props}/>
)`
	display: block;
	color: ${pickColor};
	text-transform: ${p => p.uppercase ? 'uppercase' : 'none'};
	font-weight: ${pickWeight};
	font-size: ${p => sizes[p.size].fontSize};
	line-height: ${p => sizes[p.size].lineHeight};
	text-align: ${p => p.align || 'left'};
	${above('md')`
		font-size: ${p => sizes[p.size+1].fontSize};
		line-height: ${p => sizes[p.size+1].lineHeight};
	`}
`
Paragraph.defaultProps = {size: 1}


export const Heading = styled(Paragraph.withComponent(defaultTag('h2')))`
	${above('xg')`
		font-size: ${p => sizes[p.size+2].fontSize};
		line-height: ${p => sizes[p.size+2].lineHeight};
	`}
`
Heading.defaultProps = {size: 5}
