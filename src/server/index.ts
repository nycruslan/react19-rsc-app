const register = require('react-server-dom-webpack/node-register');
register();

import express from 'express';
// @ts-ignore
import { renderToPipeableStream } from 'react-server-dom-webpack/server';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactApp from '../client/App';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client build directory
app.use(express.static(path.resolve(__dirname, '../client')));

app.get('/', (req, res) => {
  const html = fs.readFileSync(
    path.resolve(__dirname, '../client/index.html'),
    'utf-8'
  );
  res.send(html);
});

app.get('/react', (req, res) => {
  const clientManifestPath = path.resolve(
    __dirname,
    '../client/react-client-manifest.json'
  );
  const moduleMap = JSON.parse(fs.readFileSync(clientManifestPath, 'utf-8'));

  const { pipe } = renderToPipeableStream(
    React.createElement(ReactApp),
    moduleMap
  );

  res.setHeader('Content-Type', 'text/x-component');
  pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
