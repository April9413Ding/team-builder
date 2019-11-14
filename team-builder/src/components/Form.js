import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSparkles,faSword,faStaff, faBowArrow} from "@fortawesome/pro-duotone-svg-icons";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding:'2rem',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function Form({addNewHero}) {
  const classes = useStyles();
  const [hero,setHero] = useState({name:"",gender:"",level:"",class:""})

  const handleChange = event => {
    setHero({...hero,[event.target.name]:event.target.value});
  };

  const handelClick = event =>{
    if(hero.name!=="" && hero.gender!=="" && hero.level!=="" &&hero.class!==""){
    addNewHero(hero);
    setHero({name:"",gender:"",level:"",class:""});
    }else{
    document.querySelector(".alert").toggleAttribute("hidden");
    }
  };


  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          required
          name="name"
          label="Name"
          value={hero.name}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={handleChange}
        />
        
        <TextField
          required
          name="level"
          label="Level"
          type="number"
          value={hero.level}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={handleChange}
        />
        
      </div>
      <div>
      <FormControl required component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender" value={hero.gender} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      </div>
      <div>
      <FormControl required component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Class</FormLabel>
        <RadioGroup defaultValue="warrior" name="class" value={hero.class} onChange={handleChange}>
          <FormControlLabel value="healer" control={<Radio />} label={`Healer`} />
          <FormControlLabel value="warrior" control={<Radio />} label="Warrior" />
          <FormControlLabel value="mage" control={<Radio />} label="Mage" />
          <FormControlLabel value="archer" control={<Radio />} label="Archer" />
        </RadioGroup>
      </FormControl>
      </div>
      <p className="alert hidden" onClick={handelClick}>*please fill out all the required field*</p>
      <Button onClick={handelClick}>Add Character</Button>
    </form>
  );
}