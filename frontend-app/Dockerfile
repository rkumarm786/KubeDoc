# Step 1: Build the application
FROM node:20 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Step 2: Serve the application from Nginx
# Can create WORKDIR /app 
FROM nginx:alpine
RUN export VITE_INSIDE_DOCKER=false
COPY --from=build /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
COPY entrypoint.sh /entrypoint.sh
EXPOSE 80
ENTRYPOINT ["./entrypoint.sh"]
