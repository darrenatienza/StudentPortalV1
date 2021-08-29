import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography, Button, CardActions, makeStyles } from "@material-ui/core"

import "./modules.css"

const UseStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
export default function modules() {
    const classes = UseStyles();

    return (
        <div className="modules">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://media.istockphoto.com/vectors/mathematics-vector-id1044168372"
                    title="Comptetive Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mathematics
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This is the current modules for mathematics
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        
      </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://media.istockphoto.com/vectors/english-vector-id1047570732?s=170667a"
                    title="Comptetive Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            English
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This is the current modules for English
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        
      </CardActions>
            </Card>
        </div>
    )
}
