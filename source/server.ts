import express from 'express';

import { categoryRoute } from './routes/categoryRoute';
import { specificationRoute } from './routes/specificationRoute';

const app = express();
app.use(express.json());
app.use('/categories', categoryRoute);
app.use('/specifications', specificationRoute);

app.listen(3333, () =>
	console.log('[UP!] Server running on http://localhost:3333/')
);
