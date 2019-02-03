import React from 'react'
import styled from 'styled-components'
import {mix} from 'polished'
import above from '../../utils/above'
import Link from '../Link'
import {Paragraph} from '../Text'

const Wrapper = styled(Link)`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	text-decoration: none;
	margin: 3rem 0;
	padding-bottom: 1rem;
	color: currentColor;
	transition: 0.3s all;
`

const Title = styled(Paragraph)`
	color: ${p => p.hoverColor ? p.hoverColor : p.theme.colors.base88};
	@media (hover: hover) {
		color: ${p => p.theme.colors.base88};
	}
	${Wrapper}:hover &{
		color: ${p => p.hoverColor ? p.hoverColor : p.theme.colors.base88};
	}
`

const Image = styled.img`
	display: block;
	width: 2.5rem;
	height: 2.5rem;
	margin-right: 1rem;
	${above('md')`
		width: 3.5rem;
		height: 3.5rem;
		margin-right: 1.5rem;
	`}
	@media (hover: hover) {
		filter: grayscale(1);
	}
	${Wrapper}:hover &{
		filter: grayscale(0);
	}
`

const Description = styled(Paragraph)`
	color: ${p => p.hoverColor ? mix(0.66, p.hoverColor, p.theme.colors.white) : p.theme.colors.base44};
	@media (hover: hover) {
		opacity: ${p => p.hidden ? 0 : 1};
		color: ${p => p.theme.colors.base44};
	}
	${Wrapper}:hover &{
		opacity: 1;
		color: ${p => p.hoverColor ? mix(0.66, p.hoverColor, p.theme.colors.white) : p.theme.colors.base44};
	}
`

const Flex = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
`

const Item = ({title, description, date, to, color, template, image, ...props}) => (
	<Wrapper to={to} {...props}>
		{image && <Image src={`/assets/uploads/${image}`}/>}
		<div style={{flex: 1}}>
			<Flex>
				<Title size={6} hoverColor={p => color || p.theme.colors.base88}>
					{title}
				</Title>
				<Paragraph size={2} color={p => p.theme.colors.base44}>
					{date}
				</Paragraph>
			</Flex>
			<Description size={0} weight={600} hidden={template === 'experience'} hoverColor={color}>
				{description}
			</Description>
		</div>
	</Wrapper>
)

export default Item
