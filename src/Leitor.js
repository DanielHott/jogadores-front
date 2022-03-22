import axios from 'axios'; 
import { useState, useEffect } from 'react';
const url = 'https://back-jogadores.herokuapp.com/'

function Leitor () {
  const [ loading, setLoading ] = useState(true);
  const [ files ] = useState([]);
  useEffect(() => {
    const busca = () => {
    return axios.get(url)
        .then(resp => resp.data);
}
  async function getJogadores(){
    try {
      const Jogadores = await busca();
      return Jogadores;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  getJogadores().then(async (fcs) => {
   files.push(fcs)
   setLoading(false)
  }, [])
})

return (
    <div className="Leitor">

{         !loading && files[0].map((a) => {
          return (
            <div className="Card"key={a.nome}>
              <img src={a.imagem} width="300" height="400" alt=""/>
              <p>Jogador(a): {a.nome}</p>
              <p>Idade: {a.idade}</p>
              <p>Clube: {a.time}</p>
              <a target="_blank" rel="noreferrer" href={ `https://www.google.com/search?q=${a.nome.replace('', "+")}+${a.time}
              &sxsrf=APq-WBs35mwa9sbDSfI-Kj180K2RQthBxw%3A1647966927217&ei=z_o5Yo3qDMz21sQPoYOgoAI&gs_ssp=eJzj4tTP1TdITknPNTVg9OLNT
              izKzFVISs2rSs1NBABqfQh9&oq=karim&gs_lcp=Cgdnd3Mtd2l6EAEYATIECCMQJzILCC4QgAQQsQMQgwEyCAguEIAEELEDMgQIABBDMgUIABCABDIFCC4
              QgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgoIABDkAhCwAxgBOgwILhDIAxCwAxBDGAJKBAhBGABKBAhGGAFQoxRYgBZg_SNoA3A
              BeACAAYgBiAGJApIBAzAuMpgBAKABAcgBD8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz` } >Mais informações</a>
              </div>
          )
})} 
    </div>
  );
}

export default Leitor; 