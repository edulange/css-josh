import styled from 'styled-components'
import { Search, ShoppingBag } from 'react-feather'

import { COLORS } from '../../constants'

const Section = styled.section`
	background-color: ${COLORS.gray[900]};
	font-weight: 500;
	font-size: 14px;
	color: ${COLORS.white};
	display: flex;
	align-items: center;
	padding-left: 32px;
	padding-right: 32px;
	height: 40px;
`

const SearchDiv = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid ${COLORS.gray[300]};
	gap: 8px;

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
	gap: 24px;
	color: ${COLORS.gray[300]};
`

const MarketingMessage = styled.span`
	color: ${COLORS.white};
	margin-right: auto;
`

const SuperHeader = () => {
	return (
		<Section>
			<MarketingMessage>Free shipping on domestic orders over $75!</MarketingMessage>
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

export default SuperHeader
