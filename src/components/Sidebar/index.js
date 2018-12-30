import React from 'react'
import styled from 'styled-components'
import {above} from '../../utils/above'
import {Paragraph, Heading} from '../Text'

const Relative = styled.div`
	position: relative;
	overflow: hidden;
	background: ${p => p.theme.colors.base03};
	${above('md')`
		min-width: 18rem;
	`}
	${above('lg')`
		flex: 100;
	`}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-self: stretch;
	height: 100%;
	padding: 2rem 1rem;
	${above('md')`
	position: fixed;
		padding: 3rem 2rem;
	`}
	${above('lg')`
		padding: 4rem 3.5rem;
	`}
`

const Sidebar = () => (
	<Relative>
		<Wrapper>
			<Paragraph
				size={5}
				weight={600}
				color={p => p.theme.colors.base88}
				style={{marginBottom: '-0.125em'}}
			>
				Vitor Dino
			</Paragraph>
			<Paragraph
				size={2}
				weight={500}
				color={p => p.theme.colors.base22}
				style={{textTransform: 'lowercase'}}
			>
				Design + Frontend
			</Paragraph>
		</Wrapper>
	</Relative>
)

export default Sidebar
