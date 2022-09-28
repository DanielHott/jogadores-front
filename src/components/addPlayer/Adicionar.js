import { useState } from 'react';
import { Inputs, Button, Container, Form, Modal, Close, ExternalButton, External } from './styles';

function Adicionar() {
  const [ info, setInfo ] = useState({
      nome: '', idade: '', time: '', imagem: ''
  })
  const [ isModalOpen , setisModalOpen] = useState(false);
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
    e.preventDefault()
    if (info.imagem.includes('.jpg') === true || info.imagem.includes('.jpeg') === true || info.imagem.includes('.png') === true){
    return submit(info);
    }
    return (alert('A url da imagem deve ter .jpg .jpeg ou .png ao final do link! Se não tem, procure outra url de imagem'))
}
  return (
    <Container >
    <Modal isAddOpen={isModalOpen}></Modal>
      <Form isAddOpen={isModalOpen} onSubmit={(e) => redirect(e)}>
      <Close onClick={() => setisModalOpen(isModalOpen ? false :  true)}>x</Close>
      <div>
         <label>Jogador <Inputs type="text"
         onChange={(a) => setInfo({...info, nome: a.target.value })}
         placeholder="Insira o nome do seu jogador" required></Inputs>
         </label>
          <label> Idade <Inputs type="text"
          onChange={(a) => setInfo({...info, idade: a.target.value })}
          placeholder="Insira a idade do seu jogador" required></Inputs>
          </label>
      </div>
      <div>
          <label> Clube <Inputs type="text"
          onChange={(a) => setInfo({...info, time: a.target.value })}
          placeholder="Ex: Flamengo" required></Inputs>
          </label>
          <label> Imagem <Inputs type="text"
          placeholder="Ex: foto-do-jogador.jpg"
          onChange={(a) => setInfo({...info, imagem: a.target.value })}required></Inputs>
          </label>
      </div>
          <Button type="submit">Adicionar</Button>
      </Form>
      <External className="Adicionar">
          <h2>Adicione seu jogador(a) favorito! </h2>
          <ExternalButton onClick={() => setisModalOpen(true)}>Adicionar</ExternalButton>
    </External>
    </Container>
  );
}

export default Adicionar;