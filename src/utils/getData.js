import React from 'react'

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data
  } catch (error) {
    throw new Error(error);
  } 
}

export default getData