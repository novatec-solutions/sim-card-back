FROM node:14

WORKDIR /usr/src/app

ENV NODE_ENV development

# Copia el package.json a la raiz del proyecto
COPY package*.json ./

# Instala las dependencias necesarias para correr el proyecto
RUN ["npm","install","global","@nestjs/cli"]
RUN ["npm", "install"]

COPY . .

## Habilitar solo en entornos productivos
# RUN ["npm", "run", "build"]

EXPOSE 3000

## Comando para iniciar el servidor de desarrollo
ENTRYPOINT ["npm","run","start"]

## Comando para iniciar el servidor de produccion
# ENTRYPOINT ["npm","run","start:prod"]