import React from "react";
import {
	Typography,
	Button,
	Link,
	Container,
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	CardActions,
} from "@material-ui/core";

import Dice from "../../assets/img/diceJs.gif";
import Bank from "../../assets/img/easy-bank.PNG";
import Pokemon from "../../assets/img/PokemonRecord.gif";
import ChatUs from "../../assets/img/chatus.gif";
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
		// paddingLeft: "20px",
		// [theme.breakpoints.up("md")]: {
		// },
	},
}));

export default function Projects() {
	const classes = useStyles();
	return (
		<>
			<section id="projects" className="section-container">
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
						{/* item 1 */}
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
													component="span"
													style={{ fontWeight: "Bold" }}>
													HTML
												</Typography>
											</Grid>
											<Grid item md={2} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													CSS
												</Typography>
											</Grid>
											<Grid item md={2} xs={3}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													Javascript
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
						{/* item 2 */}
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

										<Grid container item md={12}>
											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													HTML
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													CSS
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													SASS
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													Javascript
												</Typography>
											</span>
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
						{/* item 3 */}
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

										<Grid container item md={12}>
											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													HTML
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													CSS
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													Javascript
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													PokeAPI
												</Typography>
											</span>
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
						{/* item 4 */}
						<Grid item md={4}>
							<Card className={classes.card}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Chat Us Application"
										height="180"
										image={ChatUs}
										title="Chat Us Application"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Chat Us Application
										</Typography>
										<Typography
											variant="body1"
											color="textSecondary"
											component="p"
											gutterBottom>
											A web application that has a real time chat functionality
											using chat engine.
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography variant="h6" component="h5" gutterBottom>
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid container item md={12}>
											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													React
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													Chat Engine
												</Typography>
											</span>
										</Grid>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link
											underline="none"
											target="_blank"
											href="https://youthful-pike-f91484.netlify.app/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											underline="none"
											target="_blank"
											href="https://github.com/supremeking23/Chat-Us-App">
											Github link
										</Link>
									</Button>
								</CardActions>
							</Card>
						</Grid>
						{/* item 5 */}
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

										<Grid container item md={12}>
											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													React
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													Material UI
												</Typography>
											</span>
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
						{/* item 6 */}
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

										<Grid container item md={12}>
											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													React
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													style={{ fontWeight: "Bold" }}>
													Material UI
												</Typography>
											</span>
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
