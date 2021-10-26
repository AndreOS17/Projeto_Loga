import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Card">
          <h1 className="Card_Title">Loga</h1>
          <hr/>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" />

            <button type="submit">Continuar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
