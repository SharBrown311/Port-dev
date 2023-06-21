import React from 'react'

function Footer() {
  return (
    <footer className='Footer'>
      <h6>Find me on Social Media</h6>
      <ul className='footer-list'>
        <li className='footer-link'><i className='fab fa-github-square'></i></li>
        <li className='footer-link'><i className='fab fa-linkedin'></i></li>
        <li className='footer-link'>
          <i className='fab fa-facebook-square'><a href='#'></a></i></li>
        <li className='footer-link'><i className='fab fa-instagram-square'></i></li>
        <li className='footer-link'><i className='fab fa-twitter-square'></i></li>
      </ul>
    </footer>
  )
}

export default Footer