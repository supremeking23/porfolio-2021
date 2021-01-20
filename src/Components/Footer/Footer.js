import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

export default function Footer() {
	return (
		<>
			<footer>
				<Container>
					<Grid container style={{ height: "200px", textAlign: "center" }}>
						<Grid
							container
							item
							md={12}
							xs={12}
							justify="center"
							alignItems="center">
							<Typography variant="body1">
								Copyright - 2021 Ivan Christian Jay Funcion, All Right Reserved
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</footer>
		</>
	);
}
