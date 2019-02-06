import React, { useState } from 'react';
import ResourceList from 'components/ResourceList';
import UserList from 'components/UserList';

const App = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <UserList />
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
