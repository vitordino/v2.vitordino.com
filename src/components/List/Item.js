import React from 'react'
import styled from 'styled-components'
import {mix} from 'polished'
import Link from '../Link'
import {Paragraph, Heading} from '../Text'

const Description = styled(Paragraph)`
	opacity: 0;
	transition: 0.3s all;
`

const Wrapper = styled(Link)`
	display: block;
	text-decoration: none;
	color: currentColor;
	margin: 3rem 0;
	padding-bottom: 1rem;
	&:hover ${Description}{
		opacity: 1;
	}
`

const Flex = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
`

const Item = ({title, description, date, to, color, ...props}) => (
	<Wrapper to={to} {...props}>
		<Flex>
			<Paragraph size={6} color={p => color || p.theme.colors.base88}>
				{title}
			</Paragraph>
			<Paragraph size={2} color={p => p.theme.colors.base44}>
				{date}
			</Paragraph>
		</Flex>
		<Description
			size={0}
			weight={600}
			color={p => color ? mix(0.66, color, p.theme.colors.white) : p.theme.colors.base44}
		>
			{description}
		</Description>
	</Wrapper>
)

export default Item
