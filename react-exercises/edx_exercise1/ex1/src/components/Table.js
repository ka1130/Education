import React from 'react';

import Box from './Box';

const cars = [
  {
    year: "2013",
    model: "A",
    price: "$32000",
  },
  {
    year: "2011",
    model: "B",
    price: "$4400",
  },
  {
    year: "2016",
    model: "B",
    price: "$15500",
  }
];

const trucks = [
  {
    year: "2014",
    model: "D",
    price: "$18000"
  },
  {
    year: "2013",
    model: "E",
    price: "$5200"
  }
];

const convertibles = [
  {
    year: "2009",
    model: "F",
    price: "$2000"
  },
  {
    year: "2010",
    model: "G",
    price: "$6000"
  },
    {
    year: "2012",
    model: "H",
    price: "$12500"
  },
  {
    year: "2017",
    model: "M",
    price: "$50000"
  }
];



function Table(props) {
  return (
    <div>
      <Box title="Cars" type={cars}/>
      <Box title="Trucks" type={trucks}/>
      <Box title="Convertibles" type={convertibles}/>
    </div>
  )
}

export default Table;
