# API

<!DOCTYPE html>
<html>
<head>
  <title>Exemplo API</title>
</head>
<body>
  <h1>Dados do GitHub</h1>
  <div id="resultado"></div>

  <script>
    // URL da API pública do GitHub para buscar dados do usuário
    const url = "https://api.github.com/users/octocat";

    // Fazendo a requisição
    fetch(url)
      .then(response => response.json()) // converte a resposta em JSON
      .then(data => {
        console.log(data); // mostra no console os dados
        // Exibindo no HTML
        document.getElementById("resultado").innerHTML = `
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Login:</strong> ${data.login}</p>
          <p><strong>Repositórios Públicos:</strong> ${data.public_repos}</p>
          <img src="${data.avatar_url}" width="100">
        `;
      })
      .catch(error => console.error('Erro:', error));
  </script>
</body>
</html>


e para aparecer assim no console.log( )

{
  "login": "octocat",
  "id": 583231,
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "name": "The Octocat",
  "public_repos": 8,
  ...
}
