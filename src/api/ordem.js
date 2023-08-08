import axios from "axios";
export default class OrdemApi {
  async buscarTodasAsOrdens() {
    const response = await axios.get("http://localhost:8000/ordemservico/");
    return response.data;
  }

  async buscarOrdem(id) {
    const response = await axios.get(`http://localhost:8000/ordemservico/${id}`);
    return response.data;
  }

  async adicionaOrdem(ordemservico) {
    const response = await axios.post("http://localhost:8000/ordemservico/", ordemservico);
    return response.data;
  }

  async excluirOrdem(id) {
    const response = await axios.delete(`http://localhost:8000/ordemservico/${id}`);
    return response.data;
  }

  async atualizarOrdem(ordemservico) {
    const response = await axios.put(
      `http://localhost:8000/ordemservico/${ordemservico.id}/`,
      ordemservico
    );
    return response.data;
  }
}