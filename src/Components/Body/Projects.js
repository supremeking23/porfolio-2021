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
import Back from "../../assets/img/back.jpg";

export default function Projects() {
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
						<Grid item md="4">
							<Card>
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
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Share
									</Button>
									<Button size="small" color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item md="4">
							<Card>
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
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Share
									</Button>
									<Button size="small" color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item md="4">
							<Card style={{ marginRight: "20px" }}>
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
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Share
									</Button>
									<Button size="small" color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item md="4">
							<Card>
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
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Share
									</Button>
									<Button size="small" color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item md="4">
							<Card>
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
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Share
									</Button>
									<Button size="small" color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item md="4">
							<Card style={{ marginRight: "20px" }}>
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
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Share
									</Button>
									<Button size="small" color="primary">
										Learn More
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
