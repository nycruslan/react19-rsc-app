import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import { createFromFetch } from 'react-server-dom-webpack/client';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// Fetch the server-rendered content
const content = createFromFetch(fetch('/react'));

// Define a component to render the server content
function ServerContent() {
  return content;
}

root.render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <ServerContent />
  </React.Suspense>
);
