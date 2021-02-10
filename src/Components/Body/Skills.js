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

//skills
import ReactSVG from "../../assets/svg/react.svg";
import NodeJsSVG from "../../assets/svg/nodejs-icon.svg";
import MongoSVG from "../../assets/svg/mongodb.svg";
import AwsSVG from "../../assets/svg/aws.svg";
import ExpressSVG from "../../assets/svg/express.svg";
import MysqlSVG from "../../assets/svg/mysql.svg";
import BootstrapSVG from "../../assets/svg/bootstrap.svg";
import MaterialSVG from "../../assets/svg/material-ui.svg";
import DjangonSVG from "../../assets/svg/django-icon.svg";
import PythonSVG from "../../assets/svg/python.svg";
import JavascriptSVG from "../../assets/svg/javascript.svg";
import GitSVG from "../../assets/svg/git-icon.svg";

export default function Skills() {
	return (
		<div>
			<section id="skills" className="section-container">
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
							<Typography variant="h2">My Skills</Typography>
							<Typography variant="subtitle1">
								Languages and Technologies that I have learned and applied to my
								projects
							</Typography>
						</Grid>
					</Grid>

					<Grid container>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img src={ReactSVG} alt="react" className="image-skill" />
							<Typography variant="h5">React</Typography>
						</Grid>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img src={ExpressSVG} alt="express" className="image-skill" />
							<Typography variant="h5">Express Framework</Typography>
						</Grid>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img src={NodeJsSVG} alt="node" className="image-skill" />
							<Typography variant="h5">Nodejs Framework</Typography>
						</Grid>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img src={MongoSVG} alt="mongodb" className="image-skill" />
							<Typography variant="h5">MongoDB</Typography>
						</Grid>
					</Grid>

					<Grid container>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img src={MysqlSVG} alt="mysql" className="image-skill" />
							<Typography variant="h5">Mysql Database</Typography>
						</Grid>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img src={AwsSVG} alt="aws" className="image-skill" />
							<Typography variant="h5">Amazon Web Services</Typography>
						</Grid>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img
								src={MaterialSVG}
								alt="material-ui"
								className="image-skill"
							/>
							<Typography variant="h5">Material UI</Typography>
						</Grid>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img src={BootstrapSVG} alt="bootstrap" className="image-skill" />
							<Typography variant="h5">Bootstrap</Typography>
						</Grid>
					</Grid>

					<Grid container>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img src={PythonSVG} alt="python" className="image-skill" />
							<Typography variant="h5">Python</Typography>
						</Grid>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img src={DjangonSVG} alt="django" className="image-skill" />
							<Typography variant="h5">Django Framework</Typography>
						</Grid>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img
								src={JavascriptSVG}
								alt="javascript"
								className="image-skill"
							/>
							<Typography variant="h5">Javascript</Typography>
						</Grid>
						<Grid
							item
							md={3}
							xs={12}
							container
							direction="column"
							justify="center"
							alignItems="center">
							<img src={GitSVG} alt="git" className="image-skill" />
							<Typography variant="h5">Git</Typography>
						</Grid>
					</Grid>
				</Container>
			</section>
		</div>
	);
}
