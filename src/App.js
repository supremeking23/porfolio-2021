import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import mainTheme from "./assets/themes/Main";
import { ThemeProvider } from "@material-ui/core/styles";
function App() {
	return (
		<ThemeProvider theme={mainTheme}>
			<Header />
			<Body />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
