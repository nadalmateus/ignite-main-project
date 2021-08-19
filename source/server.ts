import express from 'express';

import { router } from './routes';

const app = express();
app.use(express.json());

app.use(router);


console.log("Test");

app.listen(3333, () =>
	console.log('[UP!] Server running on http://localhost:3333/')
);
