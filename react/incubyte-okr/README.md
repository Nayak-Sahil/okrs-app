# React + TypeScript + Vite

This project uses Vite for the React + TypeScript frontend and json-server for a mock backend API.

## Getting Started

### 1. Install dependencies

```
pnpm install
```

### 2. Start the Vite development server

```
pnpm run dev
```

This will start the React app at [http://localhost:5173](http://localhost:5173) by default.

### 3. Start the JSON Server (Mock API)

```
pnpm run json-server
```

This will start json-server at [http://localhost:3000](http://localhost:3000). The API will serve data from `src/local/db.json`.

### 4. Accessing the App

- The React app fetches OKRs from the mock API at `/okrs` (e.g., [http://localhost:3000/okrs](http://localhost:3000/okrs)).
- You can edit `src/local/db.json` to change the mock data.