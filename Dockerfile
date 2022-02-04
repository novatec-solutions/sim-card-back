FROM node:14
USER node
RUN mkdir -p /home/node/app && sudo chown -Rh $user:node /home/node/app

WORKDIR /home/node/app

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
# RUN ["npm", "run", "build"]

EXPOSE 3000

#RUN sudo chmod -R 777 /usr/src/app

RUN chown $user:node /home/node/app
RUN mkdir /home/node/app/dist && sudo chmod -R 777 /home/node/app

## Comando para iniciar el servidor de desarrollo
ENTRYPOINT ["npm","run","start"]

#RUN sudo chmod -R 777 /usr/src/app

## Comando para iniciar el servidor de produccion
# ENTRYPOINT ["npm","run","start:prod"]