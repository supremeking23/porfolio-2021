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

			h5: {
				fontFamily: ["Poppins", "sans-serif"],
				// fontSize: "1.5rem",
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
			colorTextSecondary: {
				// color: "#FFFFFF",
			},
		},

		MuiLink: {
			root: {
				fontFamily: ["Poppins", "sans-serif"],
			},
		},

		MuiAppBar: {
			colorPrimary: {
				backgroundColor: "#08090A",
			},
		},
	},
});

export default theme;
