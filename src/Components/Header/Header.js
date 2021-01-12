import React, { useState } from "react";
import HeaderBackground from "../../assets/dtla-blue.jpg";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Link,
	Grid,
	useScrollTrigger,
	Slide,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import Typed from "react-typed";
import "./header.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuLink: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},

	navigation: {
		// display: "block",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},

	titleIcon: {
		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	},
}));

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default function Header(props) {
	const classes = useStyles();
	return (
		<>
			<div className="header-container">
				<HideOnScroll {...props}>
					<AppBar>
						<Toolbar>
							<Grid container item xs={12} className={classes.titleIcon}>
								<Typography variant="h6" className={classes.title}>
									ivanscodehub
								</Typography>
							</Grid>
							<Grid
								container
								item
								xs={12}
								justify="flex-end"
								className={classes.navigation}>
								<Typography className={classes.menuLink}>
									<Link color="inherit" href="#">
										Home
									</Link>
								</Typography>
								<Typography className={classes.menuLink}>
									<Link color="inherit" href="#about">
										About
									</Link>
								</Typography>
								<Typography className={classes.menuLink}>
									<Link color="inherit" href="#skills">
										Skills
									</Link>
								</Typography>
								<Typography className={classes.menuLink}>
									<Link color="inherit" href="#projects">
										Projects
									</Link>
								</Typography>
							</Grid>
						</Toolbar>
					</AppBar>
				</HideOnScroll>
				<h1>sdd</h1>
				<Typed
					strings={[
						"<h2>a Full-Stack Web Developer.</h2>",
						"<h2>Automation and DevOps practitioner.</h2>",
						"<h2>love everything about code.</h2>",
					]}
					typeSpeed={50}
					loop
				/>
			</div>
		</>
	);
}
