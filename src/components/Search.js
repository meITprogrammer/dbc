import React from 'react'

function Search() {
  return (
    <div><h1>Search Card</h1>
        <input 
                className="input-name" 
                type="email" 
                placeholder='Enter your email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
    </div>
  )
}

export default Search