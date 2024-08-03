import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import HeaderJosh from './components/Header/HeaderJosh'
import Main from './components/Main/Main'

const theme = {
	primary: '#C5295D',
	secondary: '#6868D9',
	white: '#FFFFFF',
	'gray-900': '#313235',
	'gray-700': '#60666C',
	'gray-500': '#949A9C',
	'gray-300': '#C9CECF',
	'gray-100': '#F2F3F3',
}

const App = () => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<HeaderJosh />
			<Main />
		</>
	</ThemeProvider>
)

export default App
