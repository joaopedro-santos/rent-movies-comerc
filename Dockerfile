# Use a imagem oficial do Node.js com LTS
FROM node:14

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos de configuração e dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos do aplicativo para o contêiner
COPY . .

# Construa a aplicação
RUN npm run build

# Exponha a porta em que o aplicativo será executado
EXPOSE 8080

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["npm", "run", "start"]
