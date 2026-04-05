FROM node:24-alpine

WORKDIR /app

# Copy and install root dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy and install app dependencies
COPY sieberrsec_landing/package.json sieberrsec_landing/package-lock.json ./sieberrsec_landing/
RUN cd sieberrsec_landing && npm install

# Copy the rest of the source
COPY sieberrsec_landing/ ./sieberrsec_landing/

WORKDIR /app/sieberrsec_landing

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
