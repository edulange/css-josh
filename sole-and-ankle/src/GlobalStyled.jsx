import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

html {
    width: auto;

}

body {
    max-width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
}

/* primary: #C5295D
secondary: #6868D9
White: #FFFFFF
gray-900: #313235
gray-700: #60666C
gray-500: #949A9C
gray-300: #C9CECF
gray-100: #F2F3F3
https://www.youtube.com/watch?v=FSCSdAlLsYM&list=PLC3y8-rFHvwgu-G08-7ovbN9EyhF_cltM
*/
`
