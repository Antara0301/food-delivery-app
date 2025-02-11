import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorComponet = () => {
    const error= useRouteError();
    console.log(error)

  return (
    <div>
        <h2>Oops something west wrong</h2>
        <h5>{error.status}:{error.statusText}</h5>
    </div>
  )
}

export default ErrorComponet