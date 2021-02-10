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
// import GoogleClone from "../../assets/img/google-clone.PNG";

import SolarView from "../../assets/img/solar-view.PNG";
// import Keeper from "../../assets/img/keeper.PNG";
import WeatherApp from "../../assets/img/weather-app.PNG";
import News from "../../assets/img/news-reporter.PNG";
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
							<Typography variant="subtitle1" className="subtext">
								From ideation to creation, here are some applications that I
								have developed
							</Typography>
						</Grid>
					</Grid>

					<Grid container>
						{/* item 1 */}
						<Grid item md={4}>
							<Card className={classes.card}>
								<CardActionArea
									href="https://supremeking23.github.io/dice-gamejs/"
									target="_blank">
									<CardMedia
										component="img"
										alt="Js Dice Game"
										height="180"
										image={Dice}
										title="Js Dice Game"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											className="card-title">
											Javascript Dice Game
										</Typography>
										<Typography
											variant="body1"
											component="p"
											gutterBottom
											className="card-description">
											A dice game made from html,css and javascript
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography
													variant="h6"
													component="h5"
													gutterBottom
													className="technology-header">
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
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													HTML
												</Typography>
											</Grid>
											<Grid item md={2} xs={3}>
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													CSS
												</Typography>
											</Grid>
											<Grid item md={2} xs={3}>
												<Typography
													variant="body2"
													className="technology-text"
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
											className="card-link-button"
											underline="none"
											target="_blank"
											href="https://supremeking23.github.io/dice-gamejs/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											className="card-link-button"
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
								<CardActionArea href="https://supremeking23.github.io/solar-system-view-v2/">
									<CardMedia
										component="img"
										alt="Solar System View"
										height="180"
										image={SolarView}
										title="Solar System View"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											className="card-title">
											Solar System View
										</Typography>
										<Typography
											variant="body1"
											component="p"
											gutterBottom
											className="card-description">
											A re-design website of solarview.com using bootstrap 4
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography
													variant="h6"
													component="h5"
													gutterBottom
													className="technology-header">
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid container item md={12}>
											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													HTML
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													CSS
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													Bootstrap 4
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
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
											className="card-link-button"
											underline="none"
											target="_blank"
											href="https://supremeking23.github.io/solar-system-view-v2/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											className="card-link-button"
											underline="none"
											target="_blank"
											href="https://github.com/supremeking23/solar-system-view-v2">
											Github link
										</Link>
									</Button>
								</CardActions>
							</Card>
						</Grid>
						{/* item 3 */}
						<Grid item md={4}>
							<Card className={classes.card}>
								<CardActionArea
									target="_blank"
									className="card-link-button"
									href="https://supremeking23.github.io/pokemon-lite-js/">
									<CardMedia
										component="img"
										alt="Pokemon Lite Application"
										height="180"
										image={Pokemon}
										title="Pokemon Lite Application"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											className="card-title">
											Pokemon Lite Application
										</Typography>
										<Typography
											variant="body1"
											className="card-description"
											component="p"
											gutterBottom>
											A web application made from HTML,CSS, Javascript and
											PokeAPI
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography
													variant="h6"
													component="h5"
													gutterBottom
													className="technology-header">
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid container item md={12}>
											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													HTML
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													CSS
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													Javascript
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
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
											className="card-link-button"
											href="https://supremeking23.github.io/pokemon-lite-js/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											className="card-link-button"
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
								<CardActionArea
									target="_blank"
									href="https://youthful-pike-f91484.netlify.app/">
									<CardMedia
										component="img"
										alt="Chat Us Application"
										height="180"
										image={ChatUs}
										title="Chat Us Application"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											className="card-title">
											Chat Us Application
										</Typography>
										<Typography
											variant="body1"
											component="p"
											gutterBottom
											className="card-description">
											A web application that has a real time chat functionality
											using chat engine.
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography
													variant="h6"
													className="technology-header"
													component="h5"
													gutterBottom>
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid container item md={12}>
											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													React
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
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
											className="card-link-button"
											target="_blank"
											href="https://youthful-pike-f91484.netlify.app/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											className="card-link-button"
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
								<CardActionArea
									href="https://elated-torvalds-7b7b63.netlify.app/"
									target="_blank">
									<CardMedia
										component="img"
										alt="img"
										height="180"
										image={WeatherApp}
										title="img"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											className="card-title">
											Weather Forecaster App
										</Typography>
										<Typography
											variant="body1"
											className="card-description"
											component="p"
											gutterBottom>
											A web application that gives you the current weather
											update of specific location.
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography
													variant="h6"
													component="h5"
													gutterBottom
													className="technology-header">
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid container item md={12}>
											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													React
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													openWeatherMapAPI
												</Typography>
											</span>
										</Grid>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link
											className="card-link-button"
											underline="none"
											target="_blank"
											href="https://elated-torvalds-7b7b63.netlify.app/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											className="card-link-button"
											underline="none"
											target="_blank"
											href="https://github.com/supremeking23/Weather-App-PWA">
											Github link
										</Link>
									</Button>
								</CardActions>
							</Card>
						</Grid>
						{/* item 6 */}
						<Grid item md={4}>
							<Card className={classes.card}>
								<CardActionArea
									href="https://objective-ramanujan-a8fe5e.netlify.app/"
									target="_blank">
									<CardMedia
										component="img"
										alt="img"
										height="180"
										image={News}
										title="img"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											className="card-title">
											Global News Reporter AI
										</Typography>
										<Typography
											variant="body1"
											className="card-description"
											component="p"
											gutterBottom>
											A React Application that get's the latest news for you.
											Powered by AI
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography
													variant="h6"
													component="h5"
													gutterBottom
													className="technology-header">
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid container item md={12}>
											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													React
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													Material UI
												</Typography>
											</span>

											<span className="project-text">
												<Typography
													variant="body2"
													className="technology-text"
													component="span"
													style={{ fontWeight: "Bold" }}>
													Alan AI
												</Typography>
											</span>
										</Grid>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link
											className="card-link-button"
											underline="none"
											target="_blank"
											href="https://objective-ramanujan-a8fe5e.netlify.app/">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link
											className="card-link-button"
											underline="none"
											target="_blank"
											href="https://github.com/supremeking23/news-ai-buddy">
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
