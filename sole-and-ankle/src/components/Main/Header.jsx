import styled from 'styled-components'

import { COLORS } from '../../constants'
import { ChevronDown } from 'react-feather'

const Header = () => {
	return (
		<HeaderMain>
			<Navigation>
				<span>Home /</span>
				<span> Sale /</span>
				<span> Shoes</span>
			</Navigation>
			<SelectionTitle>Running</SelectionTitle>

			<Filters>
				<SortLabel>Sort</SortLabel>
				<SelectWrapper>
					<StyledSelect>
						<option value=''>Newest Releases</option>
						{/* Adicione mais opções aqui, se necessário */}
					</StyledSelect>
					<CustomChevronDown />
				</SelectWrapper>
			</Filters>
		</HeaderMain>
	)
}

const HeaderMain = styled.div`
	height: 42px;
	display: flex;
	align-items: center;
	padding-left: 32px;
	padding-right: 37px;
	justify-content: space-between;
`

const Navigation = styled.nav`
	font-weight: 500;
	font-size: 0.875rem;
	width: 248px;
`

const SelectionTitle = styled.span`
	font-weight: 600;
	font-size: 1.125rem;
	margin-right: auto;
	color: ${COLORS.gray[900]};
`

const Filters = styled.div`
	display: flex;
	align-items: center;
`

const SortLabel = styled.span`
	font-weight: 500;
	font-size: 1rem;
	padding: 12px 16px;
`

const StyledSelect = styled.select`
	font-weight: 600;
	font-size: 1rem;
	padding: 8px;
	border-radius: 8px;
	border: none;
	appearance: none; /* Remove default arrow */
`

const SelectWrapper = styled.div`
		position: relative;
		display: inline-block;
`

const CustomChevronDown = styled(ChevronDown)`
	margin-left: 30px;
`

export default Header
