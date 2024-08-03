import styled from 'styled-components'
import { Search, ShoppingBag } from 'react-feather'

const Section = styled.section`
	background-color: ${(props) => props.theme['gray-700']};
	font-weight: 500;
	font-size: 14px;
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
`

const Superheader = () => {
	return (
		<Section>
			<p>Free shipping on domestic orders over $75!</p>
			<div>
                <Search />
				<input type='text' placeholder='Search...' />
				<span>Help</span>
                <ShoppingBag  />
			</div>
		</Section>
	)
}

export default Superheader
