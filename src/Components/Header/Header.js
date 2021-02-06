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
	Container,
} from "@material-ui/core";
import Me from "../../assets/img/me.jpg";
import Me2 from "../../assets/img/me2.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import Typed from "react-typed";
import "./header.css";

import { LightSpeed, Fade } from "react-reveal";
import { SocialIcon } from "react-social-icons";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuLink: {
		marginRight: theme.spacing(3),
		color: "#999",
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

	h1Style: {
		fontSize: "4rem",
		color: "#eee",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.5rem",
		},
	},

	h2Style: {
		fontSize: "1.5rem",
		color: "#78909c",
		[theme.breakpoints.down("md")]: {},
	},

	myImg: {
		justifyContent: "flex-end",
		[theme.breakpoints.down("md")]: { justifyContent: "center" },
	},

	socialIcon: {
		marginRight: "1em",
		// fill: "#eee",
	},

	socialIconsContainer: {
		margin: "1em",
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

				<Container>
					<Grid
						container
						md={12}
						alignItems="center"
						item
						style={{
							height: "100vh",
							paddingTop: "8em",
						}}>
						{/* <Typed
						strings={[
							`<span class="big">I'am a Full-Stack Web Developer.</span>`,
							`<span class="big">Automation and DevOps practitioner.</span>`,
							// `<span class="big">love everything about code.</span>`,
						]}
						typeSpeed={50}
						loop
						style={{ marginLeft: "40px", color: "white" }}
					/> */}

						<Grid item md={12}>
							<Typography variant="h2" className={classes.h2Style}>
								Hello, my name is
							</Typography>
							<LightSpeed left>
								<Typography variant="h1" className={classes.h1Style}>
									Ivan Christian Jay Funcion
								</Typography>
							</LightSpeed>
							<LightSpeed right>
								<Typography variant="h1" className={classes.h1Style}>
									I'm a Full-Stack Web Developer
								</Typography>
							</LightSpeed>

							<div className={classes.socialIconsContainer}>
								<SocialIcon
									className={classes.socialIcon}
									url="https://twitter.com/god_speed_23/"
								/>

								<SocialIcon
									className={classes.socialIcon}
									url="https://www.facebook.com/ivanchristianjay.funcion/"
								/>

								<SocialIcon
									className={classes.socialIcon}
									url="https://github.com/supremeking23"
								/>

								<SocialIcon url="https://www.linkedin.com/in/ivan-christian-jay-funcion-17078114a/" />
							</div>

							{/* <h1>Ivan Christian Jay Funcion</h1>
							<h1>I'm a Full-Stack Web Developer</h1>
							<h2>Base in Makati, Philippines</h2> */}
						</Grid>
						<Grid container item md={12} style={{}} className={classes.myImg}>
							<Fade right>
								<img src={Me} alt="me" className="pic" />
							</Fade>
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}
