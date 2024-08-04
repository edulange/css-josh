import styled from 'styled-components'
import Header from './Header'
import SideBar from './SideBar'
import ShoeGrid from './ShoeGrid'

const MainContent = () => {
	return (
		<Main>
			<Header />
			<SideBar />
			{/* <ShoeGrid /> */}
		</Main>
	)
}

const Main = styled.main`
	margin-top: 64px;
`

export default MainContent
