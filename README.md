# 🌐 Calculadora de Sub-redes IP - Frontend (Angular)

Este é o frontend da aplicação **Calculadora de Sub-redes**, desenvolvida como atividade prática para a disciplina de Redes de Computadores. Esta interface de usuário permite que o usuário insira um endereço IP e uma máscara (ou CIDR), enviando esses dados para a API e exibindo os resultados do cálculo de forma clara e interativa.

## 🚀 Tecnologias Utilizadas

* **Angular** (Framework principal utilizando a nova arquitetura Standalone)
* **TypeScript** (Lógica de componentes e serviços)
* **HTML5 & CSS3** (Estruturação e estilização da tela)
* **RxJS / HttpClient** (Para comunicação assíncrona com o backend)

## ✨ Funcionalidades e Destaques

* **Modo Escuro (Dark Mode):** Interface moderna e amigável projetada nativamente em tons escuros para maior conforto visual.
* **Componentes Standalone:** Arquitetura moderna do Angular sem a necessidade de arquivos `NgModules` complexos.
* **Integração REST:** Comunicação direta com o backend em Spring Boot para o processamento da matemática binária.
* **Tratamento de Erros:** Feedback visual imediato caso o backend esteja offline ou a requisição falhe.

## 🛠️ Como executar o projeto localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 20+ recomendada) e o **Angular CLI** instalados em sua máquina.

1. Clone este repositório.
2. Acesse a pasta do projeto através do terminal.
3. Instale as dependências do projeto executando:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve -o
   ```
5. O navegador será aberto automaticamente no endereço `http://localhost:4200/`.

> **⚠️ Importante:** Para que o cálculo funcione, certifique-se de que o **Backend (Spring Boot)** também esteja em execução na sua máquina (porta `8080`).

## ⚙️ Arquitetura do Projeto

* **`app.component.ts`**: Contém a lógica principal da tela, controle do formulário e a injeção do serviço HTTP.
* **`app.html` / `app.css`**: Estrutura visual e estilos (Dark Mode) da calculadora.
* **`services/ip-calculator.ts`**: Serviço injetável responsável por realizar a requisição `POST` enviando o `IpRequest` e recebendo o `IpResponse` da API.

## 🔗 Backend da Aplicação

Este projeto foi desenvolvido em uma arquitetura de repositórios separados (Split Stack). Todo o cálculo lógico bit a bit (operações AND, OR) é feito pelo backend desenvolvido em **Java com Spring Boot**.

🔗 **Acesse o repositório do Backend aqui:** https://github.com/SthefanySouza486/CalculadoraIp-Backend.git
