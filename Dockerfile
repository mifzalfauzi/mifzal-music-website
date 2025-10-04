# Use Node 18 (LTS)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm ci

# Copy all source code
COPY . .

# Build your Next.js app
RUN npm run build

# Expose port 3000 for Koyeb
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
