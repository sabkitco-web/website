FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

RUN npm run build

# Expose 4000 instead of 3000
EXPOSE 4000

# Start Next.js app (will respect your script/env)
CMD ["npm", "start"]
