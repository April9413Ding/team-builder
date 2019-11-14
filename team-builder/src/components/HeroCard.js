
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSparkles,faSword,faStaff, faBowArrow} from "@fortawesome/pro-duotone-svg-icons";

const useStyles = makeStyles({
  card: {
    width: 275,
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    margin:"2rem",
    padding:"1rem",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function HeroCard({hero}) {
  const classes = useStyles();
  var iconName,iconColor ;
  if(hero.class === "healer"){iconName=faSparkles;iconColor="green";
    }else if(hero.class === "warrior"){iconName=faSword;iconColor="red";
    }else if(hero.class === "mage"){iconName=faStaff;iconColor="blue";
    }else if(hero.class === "archer"){iconName=faBowArrow;iconColor="pink";};
  

  return (
    <Card className={classes.card}>
        <FontAwesomeIcon icon={iconName} size="6x" color={iconColor}/>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          lvl.{hero.level}
        </Typography>
        <Typography variant="h5" component="h2">
          {hero.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {hero.gender}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {hero.class}
        </Typography>

      </CardContent>
      
    </Card>
  );
}