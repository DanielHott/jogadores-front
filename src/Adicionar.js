import { useState } from 'react';

function Adicionar() {
  const [ info, setInfo ] = useState({
      nome: '', idade: '', time: '', imagem: ''
  })
  const url = 'https://back-jogadores.herokuapp.com/jogador'
function submit ({nome, idade, time, imagem}) {
    try {
    const request = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
            nome, idade, time, imagem
          }),
          headers: {'Content-Type': 'application/json'},
        })
    return request;
    }     catch(err) {
        return err.message
    }
}

function redirect (e) {
    return submit(info);
}
  return (
    <div className="Adicionar">
    <h2>Adicione seu jogador(a) favorito! </h2>
      <form onSubmit={(e) => redirect(e)}>
         <label>Nome do jogador: <input type="text"
         onChange={(a) => setInfo({...info, nome: a.target.value })}
         placeholder="Insira o nome do seu jogador" required></input>
         </label>
          <label> Idade: <input type="text"
          onChange={(a) => setInfo({...info, idade: a.target.value })}
          placeholder="Insira a idade do seu jogador" required></input>
          </label>
          <label> Clube: <input type="text"
          onChange={(a) => setInfo({...info, time: a.target.value })}
          placeholder="Ex: Flamengo" required></input>
          </label>
          <label> Imagem: <input type="text"
          placeholder="Url da imagem do seu jogador"
          onChange={(a) => setInfo({...info, imagem: a.target.value })}required></input>
          </label>
          <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default Adicionar;