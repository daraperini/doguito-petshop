// const listaClientes = () => {
//   const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest(); //para inicializar o projeto precisamos de uma requisição XMLhttp

//     http.open("GET", "http://localhost:3000/profile"); //abrimos requisição get para criar a comunicação entre a aplicação e a API e passamos o endereço que vai receber essa requisição

//     http.onload = () => {
//       if (http.status >= 400) {
//         //400 ou mais = erro bad request e erros cliente-servidor
//         reject(JSON.parse(http.response)); //retorna um texto quando utilizamos o http, por isso usamos o parse
//       } else {
//         resolve(JSON.parse(http.response));
//       }
//     };
//     http.send(); //enviamos a requisição
//   });
//   console.log(promise);
//   return promise;
// };

const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`) //fetch junta o new promise com um new SMLHttpRequest e faz uma requisição get por padrão
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      throw new Error("Não foi possível listar os clientes");
    });
};

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("Não foi possível criar um cliente");
  });
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  }).then((resposta) => {
    if (!resposta.ok) {
      throw new Error("Não foi possível remover um cliente");
    }
  });
};

const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Não foi possível detalhar o cliente");
  });
};

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    if(resposta.ok){
      return resposta.body;
    }
    throw new Error("Não foi possível atualizar o cliente");
  });
};

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};
