# Use official Playwright base image
FROM mcr.microsoft.com/playwright:v1.49.1-jammy

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files (including tests + .env files)
COPY . .

# Install Playwright browsers + dependencies
RUN npx playwright install --with-deps

# Default ENV (can be overridden when running container)
ENV NODE_ENV=dev

# Install dotenv-cli globally (to load env files easily)
RUN npm install -g dotenv-cli

# Entry point: load env file dynamically & run tests
CMD ["sh", "-c", "dotenv -e .env.$NODE_ENV -- npx playwright test"]
