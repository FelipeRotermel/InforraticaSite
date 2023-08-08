import axios from "axios";
export default class OrdemServicoApi {
  async buscarTodosAsOrdem() {
    const response = await axios.get("http://localhost:8000/computadores/");
    return response.data;
  }

  async buscarComputador(id) {
    const response = await axios.get(`http://localhost:8000/computadores/${id}`);
    return response.data;
  }

  async adicionarComputador(computador) {
    const response = await axios.post("http://localhost:8000/computadores/", computador);
    return response.data;
  }

  async excluirComputador(id) {
    const response = await axios.delete(`http://localhost:8000/computadores/${id}`);
    return response.data;
  }

  async atualizarComputador(computador) {
    const response = await axios.put(
      `http://localhost:8000/computadores/${computador.id}/`,
      computador
    );
    return response.data;
  }
}