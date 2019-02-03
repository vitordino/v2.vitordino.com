import React from 'react'
import styled from 'styled-components'
import { Paragraph } from '../Text'
import Item from './Item'

const Wrapper = styled.div`
	margin: 12rem 0;
`

const TitleBar = styled.div`
	border-bottom: 2px solid ${p => p.theme.colors.base06};
	padding: 0.25rem 0;
	position: sticky;
	padding-top: 1rem;
	top: 0;
	background: ${p => p.theme.colors.white};
	z-index: 1;
`

const List = ({title, items = []}) => (
	<Wrapper>
		<TitleBar>
			<Paragraph size={3} weight={500} lowercase color={p => p.theme.colors.base66}>
				{title}
			</Paragraph>
		</TitleBar>
		{items.map(item => <Item key={item.title} {...item}/>)}
	</Wrapper>
)

export default List
