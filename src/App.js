import React from 'react';
import './App.css';
import Card from './components/UI/Card'
import Deals from './components/Deals/Deals'

const App = () => {
  const findDeal = [{
    id: 'p1',
    date: new Date(2021, 12, 22),
    name: 'Object 1',
    initial: 550.00,
    final: 293.00
  },
  {
    id: 'p2',
    date: new Date(2021, 1, 22),
    name: 'Object 2',
    initial: 999.00,
    final: 499.00
  },
  {
    id: 'p3',
    date: new Date(2021, 2, 22),
    name: 'Object 3',
    initial: 79.00,
    final: 21.00
  },
  {
    id: 'p4',
    date: new Date(2021, 3, 22),
    name: 'Object 4',
    initial: 67.00,
    final: 24.00
  },
  {
    id: 'p5',
    date: new Date(2021, 4, 22),
    name: 'Object 5',
    initial: 455.00,
    final: 123.00
  },
  {
    id: 'p6',
    date: new Date(2021, 5, 22),
    name: 'Object 6',
    initial: 12.00,
    final: 2.00
  },]

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement(Deals, {item:findDeal})
  // )

  return (
    <Card className="deals">
      <Deals item={findDeal} />
    </Card>
  );
}

export default App;
