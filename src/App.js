import React from "react";


const foodILike = [
  {
    id:1,
    name:"Kimchi",
    image:"http://minamkimchi.com/web/product/big/201606/18_shop1_290903.jpg"
  },
  {
    id:2,
    name:"Ramen",
    image:"https://pds.joins.com/news/component/newsis/201809/21/NISI20180921_0000205352_web.jpg"
  }
];

function renderFood(dish){
  return <Food name={dish.name} picture={dish.picture} />
}

function Food(props) {
  return (
    <div>
     <h1>I like {props.name}</h1>
     <img src={props.picture} alt={props.name}/>
    </div>
  );
}
function App() {
  return (
    <div>

      {/* <Food favorite="kimchi" /> */}
      {foodILike.map( dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}

      {/* {foodILike.map(renderFood)} */}
      
    </div>    
  ); 
}

export default App;
