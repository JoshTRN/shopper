import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    maxWidth: 340,
    
  },
  media: {
    height: 0,
    paddingTop: '60.00% ', //'56.25%', // 16:9
  
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  const user = props.userPhotoUrl;
  const name = props.userName;
  
  console.log("THIS IS AN OBJECT: " + name);
  return (

      <Grid container>
      <Grid item sm>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={user}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            Welcome back to Shopper! Please create a List or reuse a List to begin planning your next trip to the grocery store. 
          </Typography>
        </CardContent>
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

  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
