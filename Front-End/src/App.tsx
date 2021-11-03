import React, { FormEvent, useState } from 'react';

import api from './api';

import './global.css';
import './App.css';

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function Login(e: FormEvent) {
    e.preventDefault();
    const response = await api.post('/Login', {email, password});
    console.log(response.data);
  }

  return (
    <div className="Container">
      <div className="Card">
        <h1 className="Card_Title">Loga</h1>
        <hr />
        <form onSubmit={Login}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => {
            setEmail(e.target.value);
          }}/>

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" value={password} onChange={(e) => {
            setPassword(e.target.value);
          }}/>

          <button type="submit">CONTINUAR</button>
        </form>
        <hr/>
      </div>
    </div>
  );
}

export default App;
