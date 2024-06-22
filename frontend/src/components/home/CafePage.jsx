import React from 'react'
import { useState, useEffect } from 'react';
const CafePage = () => {
  let { pathname } = window.location;
  pathname = pathname.split('/');
  const [data, setData] = useState();
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    fetch(`http://localhost:4000/api/cafes/${pathname[2]}`, requestOptions)
      .then(async (response) => { const data = await response.json(); setData(data); })
      .catch((error) => console.error(error));
  }, [])

  return (
    <div className='mt-[100px]'>

    </div>
  )
}

export default CafePage