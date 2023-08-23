import api from "../plugins/api";
export default class ClientesApi {
  async buscarTodosOsClientes() {
    const response = await api.get("clientes/");
    return response.data;
  }

  async buscarCliente(id) {
    const response = await api.get(`clientes/${id}`);
    return response.data;
  }

  async adicionarCliente(cliente) {
    const response = await api.post("clientes/", cliente);
    return response.data;
  }

  async excluirCliente(id) {
    const response = await api.delete(`clientes/${id}`);
    return response.data;
  }

  async atualizarCliente(cliente) {
    const response = await api.put(
      `clientes/${cliente.id}/`,
      cliente
    );
    return response.data;
  }
} 