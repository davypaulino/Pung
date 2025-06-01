FROM postgres:16-alpine

COPY init-databse.sh /docker-entrypoint-initdb.d/

RUN chmod +x /docker-entrypoint-initdb.d/init-databse.sh
