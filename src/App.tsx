import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';
import { DefaultTheme } from './styles/Themes/DefaultTheme';

export const  App=()=> {
  

	return (
		<ThemeProvider theme={DefaultTheme}>
			<GlobalStyle/>
			<BrowserRouter>
				<Router/>
			</BrowserRouter>
		</ThemeProvider>
	);
};


