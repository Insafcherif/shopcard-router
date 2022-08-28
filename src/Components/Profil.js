import React from 'react';



function Profil({ user }) {
  
  return (
    <div style={{ textAlign:"center", marginTop: "80px"}}>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  )
}

export default Profil