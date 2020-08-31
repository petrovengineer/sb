import React, {useState} from 'react';
import './App.css';
import Select from './Select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function App() {
  const [selected, setSelected] = useState([]);
  const [selected2, setSelected2] = useState(null);
  return (
    <div className="App">
      <Select options={options} selected={selected} setSelected={setSelected} multi/>
      <Select options={options} selected={selected2} setSelected={setSelected2}/>
    </div>
  );
}

export default App;
