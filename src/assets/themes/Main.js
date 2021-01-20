import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	overrides: {
		MuiTypography: {
			h3: {
				fontFamily: ["Lato", "Open Sans", "sans-serif"],
			},
			h2: {
				fontFamily: ["Lato", "Open Sans", "sans-serif"],
			},

			h5: {
				fontFamily: ["Lato", "Open Sans", "sans-serif"],
			},
			body1: {
				fontFamily: ["Open Sans", "sans-serif"],
				fontSize: "20px",
				lineHeight: "25px",
			},

			subtitle1: {
				fontFamily: ["Open Sans", "sans-serif"],
				fontSize: "20px",
				lineHeight: "25px",
			},
		},
	},
});

export default theme;
