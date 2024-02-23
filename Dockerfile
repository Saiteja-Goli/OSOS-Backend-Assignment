# Use official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose port 3000 (or any other port your application listens on)
EXPOSE 8000

# Command to run the application
CMD ["node", "index.js"]
