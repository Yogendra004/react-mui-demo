import React from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box sx={{ width: "300px" }}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="water image"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
            doloremque. Cum ratione tempora suscipit natus dolorum earum
            molestiae dolore tenetur consequatur odit ut itaque labore eligendi,
            et qui aut dolor.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small" variant="text">
            Share
          </Button>
          <Button size="small" variant="text">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
