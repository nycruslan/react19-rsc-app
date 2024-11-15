'use client';

import Posts from './Posts';
import Counter from './Counter';
import '../styles.css';

const App = () => {
  return (
    <div>
      <h1>Welcome to React 19 RSC App!</h1>
      {/* @ts-ignore */}
      <Posts />
      <Counter />
    </div>
  );
};

export default App;
