import React from 'react'

export default ({ onLogout }) => (
  <div>
    This is a secret page. If you are afraid to be here you can logout right away.
    <br />
    <br />
    <button onClick={onLogout}>Logout</button>
  </div>
)