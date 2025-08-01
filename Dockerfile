# Etapa 1: build da aplicação com Vite
FROM node:18 AS builder

WORKDIR /app

# Copia arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Build para produção (Vite gera pasta dist/)
RUN npm run build

# Etapa 2: servir com Nginx
FROM nginx:alpine

# Apaga arquivos HTML padrão
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos da pasta dist para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor porta 80 (boa prática)
EXPOSE 80

# O Nginx já inicia automaticamente
