import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [ resources, setResources ] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  }

  useEffect(() => {
    fetchResource(resource);
  }, [resource])

  console.log(resource)
  console.log(resources)

  return (
    <div>
      {`${resource}, ${resources.length}`}
    </div>
  );
}

export default ResourceList;
