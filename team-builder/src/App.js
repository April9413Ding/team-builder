import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { Paper } from '@material-ui/core';
import HeroCardList from './components/HeroCardList';

function App() {
  const [heroList,setHeroList] = useState([{
    name:"April",
    level:100,
    gender:"female",
    class:"healer",
  }])

  const addNewHero =(hero)=>{
    const newHero={
      name: hero.name,
      level: hero.level,
      gender: hero.gender,
      class: hero.class
    };
    setHeroList([...heroList,newHero]);
  }

  

  return (
    <div className="App">
      <Paper>
      <Form addNewHero={addNewHero}/>
      </Paper>
      <HeroCardList heroList={heroList} />
    </div>
  );
}

export default App;
