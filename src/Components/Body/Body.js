import React, { useState } from "react";

import {
	FloatingMenu,
	MainButton,
	ChildButton,
	Directions,
} from "react-floating-button-menu";

import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CancelIcon from "@material-ui/icons/AddCircle";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BlockIcon from "@material-ui/icons/Block";

// import MdAdd from "@material-ui/icons/add";
// import MdClose from "@material-ui/icons/clear";
// import MdFavorite from "@material-ui/icons/favorite";

import {
	Typography,
	Button,
	Link,
	Container,
	Grid,
	Box,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	CardActions,
	emphasize,
} from "@material-ui/core";

import Me from "../../assets/img/me.jpg";

import Skills from "./Skills";
import Projects from "./Projects";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	card: {
		marginBottom: "20px",
		marginRight: "20px",
		[theme.breakpoints.down("md")]: {
			marginRight: "0px",
			marginBottom: "20px",
		},
	},

	aboutContainer: {
		// padding: "40px",
		// background: "pink",
		paddingBottom: "4em",
	},

	floatingIcons: {
		position: "sticky",
		top: "120px",
		zIndex: "999",
		display: "none",

		[theme.breakpoints.down("md")]: {
			display: "flex",
		},
	},

	aboutMeText: {
		lineHeight: "2",
	},

	aboutMeTextGrid: {
		paddingLeft: "14em",
		paddingRight: "14em",
		[theme.breakpoints.down("md")]: {
			paddingLeft: "0",
			paddingRight: "0",
		},
	},
}));

export default function Body() {
	const [isOpen, setIsOpen] = useState(false);
	const classes = useStyles();
	return (
		<>
			<Grid
				className={classes.floatingIcons}
				container
				item
				md={12}
				justify="flex-end"
				style={{}}>
				<FloatingMenu
					slideSpeed={500}
					direction={Directions.Left}
					spacing={8}
					isOpen={isOpen}>
					<MainButton
						iconResting={<AddCircleIcon style={{ fontSize: 50 }} />}
						iconActive={<BlockIcon style={{ fontSize: 50 }} />}
						background="white"
						onClick={() => setIsOpen(!isOpen)}
						size={56}
					/>
					<ChildButton
						icon={<ListAltIcon style={{ fontSize: 20 }} />}
						background="white"
						size={40}
						onClick={() => {
							console.log("First button clicked");
							window.location.href = "#projects";
						}}
					/>
					<ChildButton
						icon={<FavoriteIcon style={{ fontSize: 20 }} />}
						background="white"
						size={40}
						onClick={() => {
							console.log("First button clicked");
							window.location.href = "#skills";
						}}
					/>
					<ChildButton
						icon={<InfoIcon style={{ fontSize: 20 }} />}
						background="white"
						size={40}
						onClick={() => {
							console.log("First button clicked");
							window.location.href = "#about";
						}}
					/>
					<ChildButton
						icon={<HomeIcon style={{ fontSize: 20 }} />}
						background="white"
						size={40}
						onClick={() => {
							console.log("First button clicked");
							window.location.href = "#";
						}}
					/>
				</FloatingMenu>
				{/* sdsdds */}
			</Grid>

			<section id="about">
				<Container
					className={classes.aboutContainer}
					maxWidth="lg"
					style={{ background: "" }}>
					<Grid container className="section-header">
						<Grid
							item
							container
							md={12}
							xs={12}
							justify="center"
							direction="column"
							alignItems="center">
							<Typography variant="h2">About Me</Typography>
						</Grid>
					</Grid>

					<Grid item md={12} className={classes.aboutMeTextGrid}>
						<Typography variant="body1" className={classes.aboutMeText}>
							Dedicated full-stack developer that has an experience in using
							both frontend and backend technologies. Seeking to help improve
							your business through proven skills in Software Development, Web
							Development, Database Development and Cloud Computing.
						</Typography>
					</Grid>
				</Container>
			</section>

			<Skills />
			<Projects />
		</>
	);
}

// <Typography variant="body1" className={classes.aboutMeText}>
// 							Dedicated full-stack developer that has an experience in using
// 							both frontend and backend technologies. Seeking to help improve
// 							your business through proven skills in Software Development, Web
// 							Development, Database Development and Cloud Computing.
// 						</Typography>
