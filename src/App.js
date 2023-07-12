import React from 'react';
import TreeView from './Components/Treeview';
import './App.css'
const jsonData = [
  {
    id: 1,
    name: 'Desktop',
    children: [
      {
        id: 2,
        name: 'Monitor',
        children: [
          {
            id: 3,
            name: 'Dell',
            children: [{
              id: 4,
              name: 'Dell101125',
              children: []
            }]
          },
          {
            id: 5,
            name: 'HP',
            children: [{
              id: 6,
              name: 'HP Pavilion',
              children: []
            }]
          }
        ]
      },
      {
        id: 7,
        name: 'CPU',
        children: []
      }
    ]
  },
  {
    id: 8,
    name: 'Laptop',
    children: [{
      id: 9,
      name: 'MAC',
      children: [{
        id: 10,
        name: 'MacBook air M1',
        children: []
      },
      {
        id: 11,
        name: 'MacBook air M2',
        children: []
      },
      {
        id: 12,
        name: 'MacBook Pro M1',
        children: []
      },
      {
        id: 13,
        name: 'MacBook Pro M2',
        children: []
      }
     ]
    },
    {
      id: 14,
      name: 'HP',
      children: []
    },
    {
      id: 15,
      name: 'ASUS',
      children: []
    }]
  }
];

const App = () => {
  return (
    <div className='App'>
      <h1>Tree View</h1>
      <TreeView data={jsonData} />
    </div>
  );
};

export default App;
