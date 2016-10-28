FROM node

# Create app directory
RUN mkdir /server

# VOLUME ./app:/server
WORKDIR /server

# Bundle app source
COPY app /server/

# Install npm and bower dependencies
RUN npm install

EXPOSE 3000

CMD npm start
