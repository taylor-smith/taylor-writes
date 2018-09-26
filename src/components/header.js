import React from 'react'
import { Link } from 'gatsby'


const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#2386c8',
      marginBottom: '1.45rem',
    }}
    >
    <div
      style={{
        maxWidth: 960,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div style={{display:'flex', flex: '1 1 auto',}}>
        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
          </h3>
      </div>
      <div style={{display:'flex', flex: '1 1 auto'}}>
        <h4 style={{ margin: 0 }}>
        <Link
          to="/about"
          style={{color: 'white', textDecoration: 'none'}}
        >
        About
        </Link>
        </h4>
      </div>
      <div style={{display:'flex', flex: '1 1 auto',}}>
          <h4 style={{ margin: 0 }}>
          <Link
            to="/recommendations"
            style={{color: 'white', textDecoration: 'none'}}
          >Recommendations</Link>
        </h4>
      </div>
      <div style={{display:'flex', flex: '1 1 auto',}}>
          <h4 style={{ margin: 0 }}>
          <Link
            to="/blog"
            style={{color: 'white', textDecoration: 'none'}}
          >Blog</Link>
        </h4>
     </div>
    </div>
  </div>
)

export default Header
