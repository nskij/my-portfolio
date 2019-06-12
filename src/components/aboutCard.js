import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    minWidth: 200,
    maxWidth: 400
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          About @nskij
        </Typography>
        <br />
        <Typography className={classes.pos} color="textSecondary">
          birthday: 1993/05/26
          <br />
          GitHub: <a href="https://github.com/nskij">https://github.com/nskij</a>
          <br />
          hatena: <a href="https://nskij.hatenablog.com/">https://nskij.hatenablog.com/</a>
          <br />
          Qiita: <a href="https://qiita.com/nskij">https://qiita.com/nskij</a>
          <br />
          Diary: <a href="https://stella-app.jp/user?id=bVswE3Q69yYBtmlJm7VvUyD1bIl1">https://stella-app.jp</a>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;