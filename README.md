# Galeria de Gatos

Membro: Gabriel Rocha Silva Machado.


Nome: Galeria de Gatos.


Descrição: Uma galeria que apresenta imagens e informações sobre diversas raças de gatos ao redor do mundo. Permite pesquisar raças pelo nome e consultar detalhes como: origem, descrição, temperamento e expectativa de vida.


Funcionalidades: 
- Listagem de raças em cards gerados automaticamente. 
- Exibição de imagem, raça e país de origem.
- Filtro de pesquisa por raça.
- Modal que fornece mais informações, além de uma galeria com quatro imagens extras.
- Tratamento de imagens não disponíveis e informações ausentes.


API utilizada:
The Cat API, o qual fornece imagens e informações acerca de cada raça de gato disponível.

Documentação:https://docs.thecatapi.com/


Tecnologias utilizadas:
- HTML5
- JavaScript
- Tailwind CSS
- The Cat API


Instruções de execução:

 Via Web Site
- 1. Clone ou baixe o repositório.
- 2. Abra a pasta do projeto no Visual Studio Code.
- 3. Solicite a sua chave de acesso pelo site oficial da API, esta será enviada ao seu endereço de e-mail.
- 4. Copie e cole a mesma no arquivo js/script.js na primeira linha, como valor da const apiKey.
- 5. Abra o arquivo index.html no navegador.
- 6. Teste as funções ofertadas:
- Filtro de Pesquisa.
- Modal com detalhes extras.
- Visualização das raças disponíveis.


 Via Insomnia
- 1. Abra o Insomnia e crie uma nova requisição do tipo GET.
- 2. Para listar as raças de gatos, utilize a URL:
   https://api.thecatapi.com/v1/breeds
- 3. Acesse a seção Headers e adicione:
- header: x-api-key
- value: sua chave de acesso da API.
- 4. Clique em Send para executar a requisição e verifique os dados retornados em formato JSON.
- 5. Para pesquisar uma raça pelo nome, altere a URL para:
   https://api.thecatapi.com/v1/breeds/search?q=siamese
- 6. Clique em Send novamente e verifique os dados da raça retornados pela API.

Observação: substitua "siamese" pelo nome de outra raça, se desejar. A chave deve ser configurada no Insomnia e não compartilhada no README.