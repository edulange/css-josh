import styled from 'styled-components'
import SuperHeaderMeuJeito from '../SuperHeader/SuperHeader'
import { COLORS } from '../../constants'

const Header = () => {
	return (
		<header>
			<SuperHeaderMeuJeito />
			<MainHeader>
				<Logo>Sole&Ankle</Logo>
				<Nav>
					<Li>Sale</Li>
					<Li>New Releases</Li>
					<Li>Men</Li>
					<Li>Women</Li>
					<Li>Kids</Li>
					<Li>Collections</Li>
				</Nav>
			</MainHeader>
		</header>
	)
}

const MainHeader = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	background-color: ${(props) => props.theme.white};
	border-bottom: 1px solid ${(props) => props.theme['gray-300']};
`

const Logo = styled.span`
	font-size: 24px;
	font-weight: 800;
	color: ${(props) => props.theme['gray-900']};
`

const Nav = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	flex: 1;
	gap: 48px;
`

const Li = styled.li`
	font-weight: 600;
	font-size: 16px;
	color: ${(props) => props.theme['gray-900']};
	text-transform: uppercase;
	padding-bottom: 26px 0;
	cursor: pointer;
`

export default Header
