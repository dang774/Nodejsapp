# Specify a base image
FROM node:alpine
# Specify the default working directory which is naviagted to when the container is started
WORKDIR /usr/app

# Copy files from a directory to a  working directory in the container
COPY ./package.json ./
RUN npm install

# Dependencies above through package.json should be issued first to stop constantly installing npm after rebuilding
COPY ./ ./

# Default command
CMD ["npm", "start"]