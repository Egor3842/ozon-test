import React from 'react';
import s from  './App.module.scss';
import Header from './Header/Header';
import About from './About/About';
import Items from './Items/Items';
import {Route} from 'react-router-dom'
import Basket from './Basket/Basket';
import {BrowserRouter} from 'react-router-dom'
import chear from './img/chear.jpg'
import wood from './img/wood.jpg'
import toy from './img/toy.jpg'
import tree from './img/tree.jpg'
import plant from './img/plant.jpg'
import candle from './img/candle.jpg'
import sweets from './img/sweets.jpg'
import cat from './img/cat.jpg'



const App=()=> {

 const  state=[
    {
        id:0,
        name: 'chear',
        price: 10000,
        discount: 30,
        image: chear,
        description1:'стул Lars желтый пластик',
        description2:'Ш.48,В.84,Г.56. Вес 5.5 кг. ...',
        isInCart: false,
        starsCount:5
    },
    {
        id:1,
        name: 'wood',
        price: 7321,
        discount: 0,
        image: wood,
        description1:'стул Lars желтый пластик',
        description2:'Ш.48,В.84,Г.56. Вес 5.5 кг. ...',
        isInCart: false,
        starsCount:5
    },
    {
        id:2,
        name: 'toy',
        price: 10000,
        discount: 30,
        image: toy,
        description1:'стул Lars желтый пластик',
        description2:'Ш.48,В.84,Г.56. Вес 5.5 кг. ...',
        isInCart: false,
        starsCount:4
    },
    {
        id:3,
        name: 'tree',
        price: 7321,
        discount: 0,
        image: tree,
        description1:'стул Lars желтый пластик',
        description2:'Ш.48,В.84,Г.56. Вес 5.5 кг. ...',
        isInCart: true,
        starsCount:4
    },
    {
        id:4,
        name: 'plant',
        price: 7321,
        discount: 0,
        image: plant,
        description1:'стул Lars желтый пластик',
        description2:'Ш.48,В.84,Г.56. Вес 5.5 кг. ...',
        isInCart: false,
        starsCount:5
    },
    {
        id:5,
        name: 'candle',
        price: 10000,
        discount: 30,
        image: candle,
        description1:'стул Lars желтый пластик',
        description2:'Ш.48,В.84,Г.56. Вес 5.5 кг. ...',
        isInCart: false,
        starsCount:5
    },
    {
        id:6,
        name: 'cat',
        price: 7321,
        discount: 0,
        image: cat,
        description1:'стул Lars желтый пластик',
        description2:'Ш.48,В.84,Г.56. Вес 5.5 кг. ...',
        isInCart: true,
        starsCount:5
    },
    {
        id:7,
        name: 'sweets',
        price: 7321,
        discount: 0,
        image: sweets,
        description1:'стул Lars желтый пластик',
        description2:'Ш.48,В.84,Г.56. Вес 5.5 кг. ...',
        isInCart: false,
        starsCount:5
    }
]
  return (
    <div className={s.Main}>
     <BrowserRouter> 
      <Header/>
      <Route path='/' exact= {true}  render = {() => <About/>} />
      <Route path='/' exact= {true}  render = {() =><Items state={state}/>} />
      <Route path='/basket' render = {() =><Basket state={state}/>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
