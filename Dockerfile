# Node server
FROM node:dubnium-buster

WORKDIR /usr/src/man-server

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]


