import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('2');
  const [rules, setRules] = useState(true);

  return (
    <>
    <button onClick={() => setName('ahmet')}>Adı Değştir</button>
      <input type="text" value={name} onChange={e => setName(e.target.value)} /><br/>

      <textarea value={description} onChange={e=> setDescription(e.target.value)}/> <br />
      
      <select value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">Seçin</option>
        <option value="1">Erkek</option>
        <option value="2">Kadın</option>
      </select> <br/>

      <label>
        <input type="checkbox" checked={rules} onChange={e => setRules(e.target.checked)} />
        Kuralları Kabul Ediyorum !
      </label>
      <br/>
      <button disabled={!rules}>Devam Et</button>
    </>
  );
}

export default App;
