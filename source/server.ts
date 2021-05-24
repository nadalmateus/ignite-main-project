import express from 'express'
import { categoriesRoutes } from './route/categories.route'

const app = express()
app.use(express.json())
app.use('/categories', categoriesRoutes)

app.listen(3333, () =>
  console.log('[ON]server running on http://localhost:3333/')
)
