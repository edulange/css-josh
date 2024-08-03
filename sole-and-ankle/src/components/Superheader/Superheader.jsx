import styled from 'styled-components'
import { Search, ShoppingBag } from 'react-feather'

const Section = styled.section`
	background-color: ${(props) => props.theme['gray-900']};
	font-weight: 500;
	font-size: 14px;
	color: ${(props) => props.theme.white};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
`

const SearchDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	border-bottom: 1px solid ${(props) => props.theme['gray-300']};

	.icon {
		width: 16px;
		height: 16px;
	}

	input {
		font-size: 16px;
		background-color: transparent;
		border: none;
	}
`

const Div = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	color: ${props => props.theme['gray-300']};
`

const Superheader = () => {
	return (
		<Section>
			<p>Free shipping on domestic orders over $75!</p>
			<Div>
				<SearchDiv>
					<Search className='icon'/>
					<input type='text' placeholder='Search...' />
				</SearchDiv>
				<span>Help</span>
				<ShoppingBag />
			</Div>
		</Section>
	)
}

export default Superheader
