import { app } from './server.js'
import { config } from 'dotenv'

config()

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
