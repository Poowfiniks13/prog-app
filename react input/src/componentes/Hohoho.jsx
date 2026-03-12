import React from 'react'

export default 

function PapaiNoel({ N }) {
  // Criamos um array com N posições e preenchemos com "Ho"
  const hos = Array(N).fill("Ho").join(" ");
  
  return <h1>{hos}!</h1>;
}


function Hohoho() {
  return <PapaiNoel N={5} />;
}
