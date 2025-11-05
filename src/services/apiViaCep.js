import axios from "axios";

const buscarEndereco = async (cep) => {
  try {
    cep = cep.replace(/\D/g, "");

    if (cep.length !== 8) {
      return null;
    }

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = response.data;

    if (data.erro) {
      return null;
    }

    return data;
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    return null;
  }
};

export { buscarEndereco };
