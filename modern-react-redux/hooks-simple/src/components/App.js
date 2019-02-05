import React, { useState } from 'react';
import ResourceList from 'components/ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');
  console.log(useState({ foo: 'bar' }));
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
