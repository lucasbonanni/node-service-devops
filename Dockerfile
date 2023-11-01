# stage 1 building the code
FROM node:18-alpine as builder
USER node
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
RUN yarn install
COPY --chown=node:node . .
RUN yarn build

# stage 2 for prod
FROM node:18-alpine
USER node
WORKDIR /home/node/app  
COPY --chown=node:node --from=builder /home/node/app/dist ./dist
COPY --chown=node:node --from=builder /home/node/app/node_modules ./node_modules/
COPY --chown=node:node --from=builder /home/node/app/package*.json ./
EXPOSE 3000
CMD node dist/main.js
