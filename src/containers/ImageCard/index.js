import React from 'react';
import {makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, Box} from "@material-ui/core";

import User from "../../components/User";
import IconWithIndicator from "../../components/IconWithIndicator";
import Heart from "../../assets/icons/heart";
import Comments from "../../assets/icons/comments";
import useVisible from "../../hooks/useVisible";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: '10px',
    background: theme.palette.cardBackground,
    boxShadow: 'none'
  },
  content: {
    background: theme.palette.cardBackground,
    padding: '8px 12px 8px 16px'
  },
  likesWrapper: {
    marginRight: 8,
  },
  imageName: {
    fontSize: '15px',
    lineHeight: '23px',
    fontWeight: 500,
    letterSpacing: '0.3px',
    marginBottom: '2px',
  },
  image: {
    minHeight: '100px',
  }
}));

const ImageCard = ({image, text, avatar, name, comments, likes }) => {
  const {visible, placeholderRef} = useVisible();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {
          visible ? image && <CardMedia component="img" image={image} className={classes.image}/> : <Box height={100} ref={placeholderRef}/>
        }
      </CardActionArea>

      <CardContent className={classes.content}>
        <Typography className={classes.imageName}>
          {text}
        </Typography>
        <Box display="flex" flex={1} justifyContent="space-between">
          <User image={avatar} name={name}/>
          <Box display="flex">
            <Box className={classes.likesWrapper} display="flex">
              <IconWithIndicator Icon={Heart} number={likes} />
            </Box>
            <IconWithIndicator Icon={Comments} number={comments} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
};

export default ImageCard;
