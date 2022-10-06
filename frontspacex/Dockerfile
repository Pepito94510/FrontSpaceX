FROM node:latest

LABEL name = "KevinBOISSIERE"
LABEL name = "Matthieu TOURNER" 
LABEL name = "Axel IBO"
LABEL projectName = "FrontSpaceX"
LABEL version = "0.2"
LABEL description = "this project is a Front for the SpaceX API"

EXPOSE 3000:3000

COPY package*.json .

RUN npm install 

COPY . .

CMD npm start
