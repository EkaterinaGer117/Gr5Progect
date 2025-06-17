import React from 'react';
import bouquet1 from '../images/bouquet1.jpg';
import roses from '../images/roses.jpg';
import tulips from '../images/tulips.jpg';
import roma from '../images/roma.jpg';
import box from '../images/box.jpg';
import fish from '../images/fish.jpg';
import camo from '../images/camo.jpg';
import straw from '../images/straw.jpg';
import toy from '../images/toy.jpg';
import candy from '../images/candy.jpg';
import blue from '../images/blue.jpg';
import wed from '../images/wed.jpg';
import lily from '../images/lily.jpg';
import ran from '../images/ran.jpg';

function Catalog() {
  const items = [
    { name: 'Букет "Розы"', price: '15000 ₽', img: roses },
    { name: 'Букет "Тюльпаны"', price: '12000 ₽', img: tulips },
    { name: 'Букет "Весенний"', price: '3000 ₽', img: camo },
    { name: 'Букет "Нежный"', price: '3500 ₽', img: blue },
    { name: 'Букет лилий', price: '3200 ₽', img: lily },
    { name: 'Букет ранункулюсов', price: '5000 ₽', img: ran },
    { name: 'Свадебный букет', price: '4000 ₽', img: wed },
    { name: 'Клубника в шоколаде', price: '4000 ₽', img: straw },
    { name: 'Сладкий букет', price: '2500 ₽', img: candy },
    { name: 'Авторский букет', price: 'цена договорная', img: fish },
    { name: 'Шарики с гелием', price: '800 ₽', img: roma },
    { name: 'Мягкая игрушка', price: '1500 ₽', img: toy },
    { name: 'Коробка-сюрприз', price: '2000 ₽', img: box }
  ];

  return (
    <div className="catalog">
      {items.map((item, idx) => (
        <div className="product" key={idx}>
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
