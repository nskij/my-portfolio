import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';

// カード用部品
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

// TODO: カード切り分ける
function Works() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardActionArea>
          <a href="https://github.com/nskij/my-portfolio" target="_blank" rel="noopener noreferrer">
            <CardMedia
              className={classes.media}
              height="200"
              title="portfolio"
              image="/my-portfolio/my-portfolio.png"
            />
          </a>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ポートフォリオ
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              React.jsを使って初めて制作したポートフォリオです。制作期間4日。React歴2週間。
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="http://twitter.com/share?url=https://nskij.github.io/my-portfolio/&text=@n_skijのポートフォリオを紹介！" className="twitter-share-button" target="_blank" rel="noopener noreferrer"><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            <Button size="small" color="primary">
              <FontAwesomeIcon icon={['fab', 'twitter']} />&ensp;Share
            </Button>
          </a>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default Works;