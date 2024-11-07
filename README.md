# Sistema de Gerenciamento Acadêmico (Incompleto)

Uma aplicação fullstack projetada para gerenciar dados de alunos em uma escola, oferecendo funcionalidades completas de gerenciamento. A aplicação permite que administradores registrem informações dos alunos e professores, visualizem dados detalhados, registrem eventos, atualizem registros e removam informações desatualizadas, tudo isso em uma interface intuitiva construída com React.js.

## Como executar o projeto

1. **Pré-requisitos:**  
Verifique se o Node.js está instalado em seu computador; você pode baixar a versão mais recente [aqui](https://nodejs.org/).

2. **Instalação das dependências:**
Então execute na raiz do repositório local:

   - Navegar até o diretório e instalar as dependências do frontend:
   ```bash
   cd frontend
   npm install
   ```

   - Navegar até o diretório e instalar as dependências do frontend:
   ```bash
   cd ../backend
   npm install
   ```
   
4. **Crie um banco de dados local para utilizar com o sistema:**
> A ser preenchido futuramente com instruções mais detalhadas.
   
5. **Crie o arquivo .env:**
Com base no arquivo ```.env.example``` na raiz do projeto, crie um arquivo  ```.env``` preenchendo com as variáveis do banco de dados local e das demais variáveis presentes no modelo.

6. **Executando o backend:**
Em um terminal execute no diretório ```./backend/```:
```bash
 npm start
```

7. **Executando o frontend:**
Em outro terminal, execute no diretório ```./frontend/```:
```bash
 npm run dev
```
Ou, caso queira expor à rede local:
```bash
 npm run dev -- --host
```
