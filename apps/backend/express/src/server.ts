// express server starting the app

import app from "./app";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const PORT = process.env.PORT || 4000;

app.listen(PORT);
console.log(`Express started on port ${PORT} 🚀`);

export * from "./trpc/appRouter";
