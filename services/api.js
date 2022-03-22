import axios from 'axios';

const DEFAULT_TIMEOUT = 30000;
class JogadoresService {
  constructor({ url = 'http://localhost:3010', timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getJogadores(nome, time, idade, imagem) {
    const params = {
      time,
      idade,
      nome,
      imagem,
    };

    return this.http.get('/', { params });
  }
}

export default JogadoresService;