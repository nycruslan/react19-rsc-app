import ReactDOM from 'react-dom/client';
// @ts-ignore
import { createFromFetch } from 'react-server-dom-webpack/client';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const content = createFromFetch(fetch('/react'));

function ServerContent() {
  return content;
}

root.render(<ServerContent />);
