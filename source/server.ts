import express from 'express'
import { categoryRoute } from './route/categoryRoute'

const app = express()
app.use(express.json())
app.use('/categories', categoryRoute)

app.listen(3333, () =>
  console.log('[ON]server running on http://localhost:3333/')
)
