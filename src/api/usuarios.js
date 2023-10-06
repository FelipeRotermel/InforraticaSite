import api from "../plugins/api";
export default class UsuariosApi {
  async buscarTodosOsUsuarios() {
    const response = await api.get("usuarios/");
    return response.data;
  }

  async buscarUsuario(id) {
    const response = await api.get(`usuarios/${id}`);
    return response.data;
  }

  async adicionarUsuario(usuario) {
    const response = await api.post("usuarios/", usuario);
    return response.data;
  }

  async excluirUsuario(id) {
    const response = await api.delete(`usuarios/${id}`);
    return response.data;
  }

  async atualizarUsuario(usuario) {
    const response = await api.put(
      `usuarios/${usuario.id}/`,
      usuario
    );
    return response.data;
  }
} 