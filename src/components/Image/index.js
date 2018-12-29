import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import {above} from '../../utils/above'

const Inner = styled(GatsbyImage)`
	display: block;
	object-fit: cover;
	height: 100%;
	min-width: 100%;
	flex: 1;
	& img {
		user-select: none;
		user-drag: none;
	}
	& img[src^='data:'] {
		filter: blur(1rem) grayscale(25%);
		transform: scale(1.025);
	}
`

const Image = ({image, maxHeight, position = 'relative', ...props}) => (
	<Inner
		{...image}
		style={{...props.style, position}}
		position={position}
		maxHeight={maxHeight}
		{...props}
	/>
)

export default Image
