import styled from 'styled-components'

const SideBar = () => {
	return (
		<UnorderList>
			<ShoesStyle>Lifestyle</ShoesStyle>
			<ShoesStyle>Jordan</ShoesStyle>
			<ShoesStyle>Running</ShoesStyle>
			<ShoesStyle>Basketball</ShoesStyle>
			<ShoesStyle>Training & Gym</ShoesStyle>
			<ShoesStyle>Football</ShoesStyle>
			<ShoesStyle>Skateboarding</ShoesStyle>
			<ShoesStyle>American Football</ShoesStyle>
			<ShoesStyle>Baseball</ShoesStyle>
			<ShoesStyle>Golf</ShoesStyle>
			<ShoesStyle>Tennis</ShoesStyle>
			<ShoesStyle>Athletics</ShoesStyle>
			<ShoesStyle>Walking</ShoesStyle>
		</UnorderList>
	)
}

const UnorderList = styled.ul`
	padding-left: 32px;
	list-style: none;
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.75;
	margin-top: 24px;
	width: 248px;
`

const ShoesStyle = styled.li`
	width: fit-content;
`

export default SideBar
