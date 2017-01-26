import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const btn1PopUp = (
  <div>
    <br/>
    <Button bsStyle="primary">Intra in cont</Button>
    <p>Nu ai cont? <a href="#">Click aici</a></p>
  </div>
);

const btn2PopUp = (
  <div>
    <br/>
    <p>intl.messages()</p>
    <Button bsStyle="primary">idfdsf</Button>
  </div>
);

const btn3PopUp = (
  <div>
    <Button bsStyle="primary">detalii cos</Button>
  </div>
);

export const headerButtons = [
  {
    icon: "user",
    label: "Contul meu",
    popupContent: {
    },
  },
  {
    icon: "heart",
    label: "",
    popupContent: btn2PopUp
  },
  {
    icon: "shopping-cart",
    label: "Cosul meu",
    popupContent: btn3PopUp
  },
];
