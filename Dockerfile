FROM node:14

WORKDIR /usr/src/app

ENV NODE_ENV development

# Copia el package.json a la raiz del proyecto
COPY package*.json ./

#RUN sudo chmod -R 777 /usr/src/app

# Instala las dependencias necesarias para correr el proyecto
RUN ["npm","install","global","@nestjs/cli"]
RUN ["npm", "install"]
#RUN sudo chmod -R 777 /usr/src/app

COPY . .

## Habilitar solo en entornos productivos
RUN ["npm", "run", "build"]

RUN echo $(ls -1 /usr/src/app/dist)

EXPOSE 3000

#RUN sudo chmod -R 777 /usr/src/app

## Comando para iniciar el servidor de desarrollo
CMD ["node", "dist/main"]

#RUN sudo chmod -R 777 /usr/src/app

## Comando para iniciar el servidor de produccion
# ENTRYPOINT ["npm","run","start:prod"]