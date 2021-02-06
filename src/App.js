import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import mainTheme from "./assets/themes/Main";
import { ThemeProvider } from "@material-ui/core/styles";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SomeComponent = () => (
	<div
		style={{
			background: "#212121",
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		}}>
		{
			<Loader
				type="Puff"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={5000} //3 secs
			/>
		}
	</div>
);
function App() {
	const [isLoading, setIsloading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsloading(false);
		}, 5500);
	}, []);

	if (isLoading) return SomeComponent();
	return (
		<ThemeProvider theme={mainTheme}>
			<Header />
			<Body />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
