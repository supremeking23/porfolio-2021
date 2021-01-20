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
		marginTop: "40px",
	},

	aboutText: {
		padding: "40px",
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
						iconActive={<CancelIcon style={{ fontSize: 50 }} />}
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
					maxWidth="lg"
					className={classes.aboutContainer}
					style={{ background: "" }}>
					<Grid container>
						<Grid container item md={4} xs={12} justify="flex-start">
							<img src={Me} alt="me" className="my-pic" />
						</Grid>
						<Grid
							container
							item
							md={8}
							xs={12}
							className={classes.aboutText}
							style={{ background: "" }}
							justify="center"
							alignItems="center">
							<Typography variant="h3">
								Hello! I'm Ivan Christian Jay Funcion, A{" "}
								<em>
									<strong>Full Stack Developer</strong>{" "}
								</em>{" "}
								From Philippines
							</Typography>
							<Typography variant="body1">
								Dedicated full-stack developer that has an experience in using
								both frontend and backend technologies. Seeking to help improve
								your business through proven skills in Software Development, Web
								Development, Database Development and Cloud Computing.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</section>

			<Skills />
			<Projects />
		</>
	);
}
