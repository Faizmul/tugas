import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Buttons from "./Buttons";

type Props = {
  title?: string,
  desc?: string,
  image?: string,
  style?: string,
  imgStyle?: string,
  textStyle?: string,
  cardStyle?: string,
  numWidth: number
}

export default function MediaCard(props: Props) {
  return (
          <div className="flex justify-center hover:scale-105 duration-300 mb-5 mt-5">
            <Card sx={{ maxWidth: props.numWidth }}>
              <div className={`${props.cardStyle}`}>
              <CardMedia
                sx={{ height: 140 }}
                image={props.image}
                className={`${props.imgStyle}`}
              />
              </div>
              <div className={`${props.textStyle}`}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {props.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {props.desc}
                </Typography>
              </CardContent>
              </div>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
  );
}
