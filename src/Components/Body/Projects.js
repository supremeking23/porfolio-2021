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
import Pokemon from "../../assets/img/PokemonRecord.gif";
import Animals from "../../assets/img/animaljs.png";
import GoogleClone from "../../assets/img/google-clone.PNG";
import Keeper from "../../assets/img/keeper.PNG";
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
								From ideation to creation, here are some applications that I
								have developed
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
										image={Pokemon}
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
											target="_blank"
											href="https://supremeking23.github.io/pokemon-lite-js/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											underline="none"
											target="_blank"
											href="https://github.com/supremeking23/pokemon-lite-js">
											Github link
										</Link>
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>

					{/* row 2 */}
					<Grid container>
						<Grid item md={4}>
							<Card className={classes.card}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Animal Sound"
										height="180"
										image={Animals}
										title="Animal Sound"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Animal Sound using Javascript
										</Typography>
										<Typography
											variant="body1"
											color="textSecondary"
											component="p"
											gutterBottom>
											A web application that features animal sound
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
											href="https://supremeking23.github.io/AnimalJs/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											underline="none"
											target="_blank"
											href="https://github.com/supremeking23/AnimalJs">
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
										alt="Animal Sound"
										height="180"
										image={Keeper}
										title="Animal Sound"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Keeper Note
										</Typography>
										<Typography
											variant="body1"
											color="textSecondary"
											component="p"
											gutterBottom>
											A web application that let's you store notes. Google keep
											clone.
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
													<Badge badgeContent={"React"} color="primary" />
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
											href="https://q5mv0.csb.app/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											underline="none"
											target="_blank"
											href="https://codesandbox.io/s/keeper-part-3-completed-q5mv0?file=/src/components/App.jsx">
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
										alt="Animal Sound"
										height="180"
										image={GoogleClone}
										title="Animal Sound"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Google UI Clone
										</Typography>
										<Typography
											variant="body1"
											color="textSecondary"
											component="p"
											gutterBottom>
											A Google UI clone made from React and Material UI.
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
													<Badge badgeContent={"React"} color="primary" />
												</Typography>
											</Grid>
											<Grid item md={2} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span">
													<Badge badgeContent={"MaterialUI"} color="error" />
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
											href="https://determined-noether-ee80fb.netlify.app/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											underline="none"
											target="_blank"
											href="https://github.com/supremeking23/Google-Clone-React">
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
