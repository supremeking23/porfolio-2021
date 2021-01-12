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
}));

export default function Projects() {
	const classes = useStyles();
	return (
		<>
			<section id="projects">
				<Container maxWidth="lg">
					<Grid container>
						<Grid item md={12} xs={12}>
							<Typography variant="h3">My Projects</Typography>
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
										alt="Contemplative Reptile"
										height="180"
										image={Back}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Js Dice Game
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											gutterBottom>
											A dice game made on from javascript
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography variant="h6" component="h5" gutterBottom>
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid container>
											<Grid item md={2} xs={2}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													className={classes.typographyStyle}>
													<Badge badgeContent={"HTML"} color="primary" />
												</Typography>
											</Grid>
											<Grid item md={2} xs={2}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													className={classes.typographyStyle}>
													<Badge badgeContent={"CSS"} color="secondary" />
												</Typography>
											</Grid>
											<Grid item md={2} xs={2}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													className={cx(
														classes.typographyStyle,
														classes.typographyStyle2
													)}>
													<Badge badgeContent={"Javascript"} color="error" />
												</Typography>
											</Grid>
										</Grid>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
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
										alt="Contemplative Reptile"
										height="180"
										image={Back}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Js Dice Game
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											gutterBottom>
											A dice game made on from javascript
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography variant="h6" component="h5" gutterBottom>
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid container>
											<Grid item md={2} xs={2}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													className={classes.typographyStyle}>
													<Badge badgeContent={"HTML"} color="primary" />
												</Typography>
											</Grid>
											<Grid item md={2} xs={2}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													className={classes.typographyStyle}>
													<Badge badgeContent={"CSS"} color="secondary" />
												</Typography>
											</Grid>
											<Grid item md={2} xs={2}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													className={cx(
														classes.typographyStyle,
														classes.typographyStyle2
													)}>
													<Badge badgeContent={"Javascript"} color="error" />
												</Typography>
											</Grid>
										</Grid>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
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
										alt="Contemplative Reptile"
										height="180"
										image={Back}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Js Dice Game
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											gutterBottom>
											A dice game made on from javascript
										</Typography>

										<Grid container>
											<Grid item md={12} sm={12}>
												<Typography variant="h6" component="h5" gutterBottom>
													Technology used:
												</Typography>
											</Grid>
										</Grid>

										<Grid container>
											<Grid item md={2} xs={2}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													className={classes.typographyStyle}>
													<Badge badgeContent={"HTML"} color="primary" />
												</Typography>
											</Grid>
											<Grid item md={2} xs={2}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													className={classes.typographyStyle}>
													<Badge badgeContent={"CSS"} color="secondary" />
												</Typography>
											</Grid>
											<Grid item md={2} xs={2}>
												<Typography
													variant="body2"
													color="textSecondary"
													component="span"
													className={cx(
														classes.typographyStyle,
														classes.typographyStyle2
													)}>
													<Badge badgeContent={"Javascript"} color="error" />
												</Typography>
											</Grid>
										</Grid>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
											Github link
										</Link>
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>

					{/* <Grid container>
						<Grid item md={4}>
							<Card className={classes.card}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="180"
										image={Back}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Lizard
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p">
											Lizards are a widespread group of squamate reptiles, with
											over 6,000 species, ranging across all continents except
											Antarctica
											<Grid container>
												<Grid item md={12} sm={12}>
													<Typography variant="h6" component="h5" gutterBottom>
														Technology used:
													</Typography>
												</Grid>
											</Grid>
											<Grid container>
												<Grid item md={2} xs={2}>
													<Typography
														variant="body2"
														color="textSecondary"
														component="span"
														className={classes.typographyStyle}>
														<Badge badgeContent={"HTML"} color="primary" />
													</Typography>
												</Grid>
												<Grid item md={2} xs={2}>
													<Typography
														variant="body2"
														color="textSecondary"
														component="span"
														className={classes.typographyStyle}>
														<Badge badgeContent={"CSS"} color="secondary" />
													</Typography>
												</Grid>
												<Grid item md={2} xs={2}>
													<Typography
														variant="body2"
														color="textSecondary"
														component="span"
														className={[
															classes.typographyStyle,
															classes.typographyStyle2,
														]}>
														<Badge badgeContent={"Javascript"} color="error" />
													</Typography>
												</Grid>
											</Grid>
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
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
										alt="Contemplative Reptile"
										height="180"
										image={Back}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Lizard
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p">
											Lizards are a widespread group of squamate reptiles, with
											over 6,000 species, ranging across all continents except
											Antarctica
											<Grid container>
												<Grid item md={12} sm={12}>
													<Typography variant="h6" component="h5" gutterBottom>
														Technology used:
													</Typography>
												</Grid>
											</Grid>
											<Grid container>
												<Grid item md={2} xs={2}>
													<Typography
														variant="body2"
														color="textSecondary"
														component="span"
														className={classes.typographyStyle}>
														<Badge badgeContent={"HTML"} color="primary" />
													</Typography>
												</Grid>
												<Grid item md={2} xs={2}>
													<Typography
														variant="body2"
														color="textSecondary"
														component="span"
														className={classes.typographyStyle}>
														<Badge badgeContent={"CSS"} color="secondary" />
													</Typography>
												</Grid>
												<Grid item md={2} xs={2}>
													<Typography
														variant="body2"
														color="textSecondary"
														component="span"
														className={[
															classes.typographyStyle,
															classes.typographyStyle2,
														]}>
														<Badge badgeContent={"Javascript"} color="error" />
													</Typography>
												</Grid>
											</Grid>
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
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
										alt="Contemplative Reptile"
										height="180"
										image={Back}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Lizard
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p">
											Lizards are a widespread group of squamate reptiles, with
											over 6,000 species, ranging across all continents except
											Antarctica
											<Grid container>
												<Grid item md={12} sm={12}>
													<Typography variant="h6" component="h5" gutterBottom>
														Technology used:
													</Typography>
												</Grid>
											</Grid>
											<Grid container>
												<Grid item md={2} xs={2}>
													<Typography
														variant="body2"
														color="textSecondary"
														component="span"
														className={classes.typographyStyle}>
														<Badge badgeContent={"HTML"} color="primary" />
													</Typography>
												</Grid>
												<Grid item md={2} xs={2}>
													<Typography
														variant="body2"
														color="textSecondary"
														component="span"
														className={classes.typographyStyle}>
														<Badge badgeContent={"CSS"} color="secondary" />
													</Typography>
												</Grid>
												<Grid item md={2} xs={2}>
													<Typography
														variant="body2"
														color="textSecondary"
														component="span"
														className={[
															classes.typographyStyle,
															classes.typographyStyle2,
														]}>
														<Badge badgeContent={"Javascript"} color="error" />
													</Typography>
												</Grid>
											</Grid>
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
											Live Demo
										</Link>
									</Button>
									<Button size="small" color="primary">
										<Link underline="none" href="google.com">
											Github link
										</Link>
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid> */}
				</Container>
			</section>
		</>
	);
}
