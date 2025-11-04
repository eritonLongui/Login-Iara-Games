const buscarEndereco = async (cep, setEndereco) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = response.data;

    if (data.erro) {
      setEndereco("CEP não encontrado");
      return;
    }

    setEndereco(`${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`);
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    setEndereco("Erro ao buscar CEP");
  }
};

export { buscarEndereco };
