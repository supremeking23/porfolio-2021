import React from "react";
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
} from "@material-ui/core";

import Me from "../../assets/img/me.jpg";

import Skills from "./Skills";
import Projects from "./Projects";

export default function Body() {
	return (
		<>
			<section id="about">
				<Container maxWidth="lg">
					<Grid container>
						<Grid item md={6} xs={12}>
							<img src={Me} alt="me" />
						</Grid>
						<Grid item md={6} xs={12}>
							<Typography variant="h3">
								Hello! I'm Ivan Christian Jay Funcion, A Full Stack Developer
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
