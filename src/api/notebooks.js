import api from "../plugins/api";
export default class NotebooksApi {
  async buscarTodosOsNotebooks() {
    const response = await api.get("notebooks/");
    return response.data;
  }

  async buscarNotebook(id) {
    const response = await api.get(`notebooks/${id}`);
    return response.data;
  }

  async adicionarNotebook(notebook) {
    const response = await api.post("notebooks/", notebook);
    return response.data;
  }

  async excluirNotebook(id) {
    const response = await api.delete(`notebooks/${id}`);
    return response.data;
  }

  async atualizarNotebook(notebook) {
    const response = await api.put(
      `notebooks/${notebook.id}/`,
      notebook
    );
    return response.data;
  }
}