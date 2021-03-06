import React from 'react';
import {Home} from './Svgs';
import {Link} from 'react-router-dom';

const NotFound = ()=>{
    return (
        <div style={{
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <h2 style={{
        color:"red"
      }}>404</h2>
      <h3>Page not found</h3>
      <Link to="/">
        <button style={{
          marginTop:"10px",
          width:"50px",
          height:"50px",
          border:"none",
          borderRadius:"50%",
          background:"gray",
          cursor:"pointer"
        }}>
          <Home/>
        </button>
      </Link>
    </div>
    )
}

export default NotFound;