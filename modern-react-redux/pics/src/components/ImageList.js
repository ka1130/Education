import React from 'react';

const ImageList = ({ images }) => {
  const imageList = images.map(({ description, id, urls }) => (
    <div key={id}>
      <img src={urls.regular} alt={description} key={id}/>
    </div>
  ));

  return imageList;
}

export default ImageList;
