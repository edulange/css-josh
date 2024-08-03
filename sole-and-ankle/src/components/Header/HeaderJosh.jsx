import styled from 'styled-components'
import SuperHeaderMeuJeito from '../SuperHeader/SuperHeader'
import { COLORS } from '../../constants'
import Logo from '../Logo/Logo'

const HeaderJosh = () => {
	return (
		<header>
			<SuperHeaderMeuJeito />
			<MainHeader>
				<Side>
					<Logo />
				</Side>
				<Nav>
					<NavLink>Sale</NavLink>
					<NavLink>New Releases</NavLink>
					<NavLink>Men</NavLink>
					<NavLink>Women</NavLink>
					<NavLink>Kids</NavLink>
					<NavLink>Collections</NavLink>
				</Nav>
				<Side />
			</MainHeader>
		</header>
	)
}

const MainHeader = styled.div`
	display: flex;
    align-items: baseline;
	padding: 18px 32px;
    height: 72px;
	border-bottom: 1px solid ${COLORS.gray[300]};
`

const Nav = styled.nav`
    display: flex;
    gap: 48px;
    margin: 0 48px;
`

const Side = styled.div`
	flex: 1;
`

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: ${COLORS.gray[900]};
	font-weight: 600;

	&:first-of-type {
		color: ${COLORS.secondary};
	}
`

export default HeaderJosh
