# postgres-api-test

A simple Node.js REST API project using Express, PostgreSQL, and TypeScript.

## Features

- Express server for RESTful endpoints
- PostgreSQL database integration
- TypeScript for type safety
- Environment variable support via `.env`
- Nodemon for development auto-reload
- Jasmine for unit testing

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ManolyaTam/postgres-api-test.git
   cd postgres-api-test
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory with your database credentials:
   ```
   POSTGRES_HOST=localhost
   POSTGRES_DB=postgres_api_test
   POSTGRES_USER=admin
   POSTGRES_PASSWORD=admin123
   ```

## Usage

- **Start the server:**
  ```sh
  npm start
  ```

- **Development mode (auto-reload):**
  ```sh
  npm run dev
  ```

## Testing

Run unit tests with Jasmine:
```sh
npm test
```

## License

ISC