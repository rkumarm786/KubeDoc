FROM postgres:latest
ADD init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
RUN chown postgres:postgres /docker-entrypoint-initdb.d/init.sql

# docker run -e POSTGRES_PASSWORD=raj database-app

# expose 5432 port