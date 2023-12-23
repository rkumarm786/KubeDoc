# Step 1: Build the application
FROM node:20 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Step 2: Serve the application from Nginx
FROM nginx:alpine
RUN export VITE_INSIDE_DOCKER=false
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
