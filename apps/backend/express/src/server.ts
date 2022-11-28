// express server starting the app

import app from './app'

const PORT = process.env.PORT || 4000

app.listen(PORT)
console.log(`Express started on port ${PORT} 🚀`)

export * from './trpc/appRouter'
