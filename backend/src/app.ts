import express, { json } from 'express';
import cors from 'cors';
import { PORT, BASE_URL } from './config';

export const app = express();

app.use(json());
app.disable('x-powered-by');
app.use(cors());

// app.use(`${BASE_URL}/auth`);
// app.use(`${BASE_URL}/user-profile`)
// app.use(`${BASE_URL}/playlists`);
// app.use(`${BASE_URL}/users`);
// app.use(`${BASE_URL}/search`);
// app.use(`${BASE_URL}/categories`);
// app.use(`${BASE_URL}/songs`);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
