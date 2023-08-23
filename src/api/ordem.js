// import api from "api";
import api from "../plugins/api";
export default class OrdemApi {
  async buscarTodasAsOrdens() {
    const response = await api.get("ordemservico/");
    return response.data;
  }

  async buscarOrdem(id) {
    const response = await api.get(`ordemservico/${id}`);
    return response.data;
  }

  async adicionaOrdem(ordemservico) {
    const response = await api.post("ordemservico/", ordemservico);
    return response.data;
  }

  async excluirOrdem(id) {
    const response = await api.delete(`ordemservico/${id}`);
    return response.data;
  }

  async atualizarOrdem(ordemservico) {
    const response = await api.put(
      `ordemservico/${ordemservico.id}/`,
      ordemservico
    );
    return response.data;
  }
}