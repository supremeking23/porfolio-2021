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
	Badge,
} from "@material-ui/core";
import Back from "../../assets/img/back.jpg";

import Dice from "../../assets/img/diceJs.gif";
import Bank from "../../assets/img/easy-bank.PNG";

import cx from "classnames";

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

	typographyStyle: {
		marginLeft: "30px",
		[theme.breakpoints.down("md")]: {
			// marginLeft: "30px",
		},
	},

	typographyStyle2: {
		[theme.breakpoints.down("md")]: {
			marginLeft: "50px",
		},
	},

	skillSection: {
		paddingLeft: "20px",
		// [theme.breakpoints.up("md")]: {

		// },
	},
}));

export default function Projects() {
	const classes = useStyles();
	return (
		<>
			<section id="projects">
				<Container maxWidth="lg">
					<Grid container className="section-header">
						<Grid
							item
							container
							md={12}
							xs={12}
							justify="center"
							direction="column"
							alignItems="center">
							<Typography variant="h2">My Projects</Typography>
							<Typography variant="subtitle1">
								Languages and Technologies that I have learned and applied to my
								projects
							</Typography>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item md={4}>
							<Card className={classes.card}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Js Dice Game"
										height="180"
										image={Dice}
										title="Js Dice Game"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Javacript Dice Game
										</Typography>
										<Typography
											variant="body1"
											color="textSecondary"
											component="p"
											gutterBottom>
											A dice game made from html,css and javascript
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography variant="h6" component="h5" gutterBottom>
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid
											container
											spacing={2}
											className={classes.skillSection}>
											<Grid item md={2} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"HTML"} color="primary" />
												</Typography>
											</Grid>
											<Grid item md={2} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"CSS"} color="secondary" />
												</Typography>
											</Grid>
											<Grid item md={2} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"Javascript"} color="error" />
												</Typography>
											</Grid>
										</Grid>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link
											underline="none"
											target="_blank"
											href="https://supremeking23.github.io/dice-gamejs/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											underline="none"
											target="_blank"
											href="https://github.com/supremeking23/dice-gamejs">
											Github link
										</Link>
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item md={4}>
							<Card className={classes.card}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Easy Bank Landing Website"
										height="180"
										image={Bank}
										title="Easy Bank Landing Website"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Easy Bank Landing Website
										</Typography>
										<Typography
											variant="body1"
											color="textSecondary"
											component="p"
											gutterBottom>
											A landing website excercise from front-end mentor
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography variant="h6" component="h5" gutterBottom>
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid
											container
											spacing={2}
											className={classes.skillSection}>
											<Grid item md={3} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"HTML"} color="primary" />
												</Typography>
											</Grid>
											<Grid item md={3} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"CSS"} color="secondary" />
												</Typography>
											</Grid>
											<Grid item md={3} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"SASS"} color="secondary" />
												</Typography>
											</Grid>
											<Grid item md={3} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"Javascript"} color="error" />
												</Typography>
											</Grid>
										</Grid>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link
											underline="none"
											target="_blank"
											href="https://supremeking23.github.io/easybank_landingpage/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											underline="none"
											target="_blank"
											href="https://github.com/supremeking23/easybank_landingpage">
											Github link
										</Link>
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item md={4}>
							<Card className={classes.card}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Pokemon Lite Application"
										height="180"
										image={Back}
										title="Pokemon Lite Application"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Pokemon Lite Application
										</Typography>
										<Typography
											variant="body1"
											color="textSecondary"
											component="p"
											gutterBottom>
											A web application made from HTML,CSS, Javascript and
											PokeAPI
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography variant="h6" component="h5" gutterBottom>
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid
											container
											spacing={6}
											className={classes.skillSection}>
											<Grid item md={3} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"HTML"} color="primary" />
												</Typography>
											</Grid>
											<Grid item md={3} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"CSS"} color="secondary" />
												</Typography>
											</Grid>
											<Grid item md={3} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"Javascript"} color="error" />
												</Typography>
											</Grid>
											<Grid item md={3} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"PokeAPI"} color="error" />
												</Typography>
											</Grid>
										</Grid>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link
											underline="none"
											href="https://supremeking23.github.io/pokemon-lite-js/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											underline="none"
											href="https://github.com/supremeking23/pokemon-lite-js">
											Github link
										</Link>
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
	);
}
