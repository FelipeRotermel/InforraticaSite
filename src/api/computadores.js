import api from "../plugins/api";
export default class ComputadoresApi {
  async buscarTodosOsComputadores() {
    const response = await api.get("computadores/");
    return response.data;
  }

  async buscarComputador(id) {
    const response = await api.get(`computadores/${id}`);
    return response.data;
  }

  async adicionarComputador(computador) {
    const response = await api.post("computadores/", computador);
    return response.data;
  }

  async excluirComputador(id) {
    const response = await api.delete(`computadores/${id}`);
    return response.data;
  }

  async atualizarComputador(computador) {
    const response = await api.put(
      `computadores/${computador.id}/`,
      computador
    );
    return response.data;
  }
}