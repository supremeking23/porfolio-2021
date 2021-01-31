import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	overrides: {
		MuiTypography: {
			h1: {
				fontFamily: ["Poppins", "sans-serif"],
			},
			h2: {
				fontFamily: ["Poppins", "sans-serif"],
			},
			h3: {
				fontFamily: ["Poppins", "sans-serif"],
			},
			h2: {
				fontFamily: ["Poppins", "sans-serif"],
			},

			h5: {
				fontFamily: ["Poppins", "sans-serif"],
			},
			body1: {
				fontFamily: ["Poppins", "sans-serif"],
				// fontSize: "20px",
				// lineHeight: "25px",
			},

			subtitle1: {
				fontFamily: ["Poppins", "sans-serif"],
				// fontSize: "20px",
				// lineHeight: "25px",
			},
		},

		MuiLink: {
			root: {
				fontFamily: ["Poppins", "sans-serif"],
			},
		},

		MuiAppBar: {
			colorPrimary: {
				backgroundColor: "#000000",
			},
		},
	},
});

export default theme;
