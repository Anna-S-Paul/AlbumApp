import React from 'react'
import { Link } from 'react-router-dom'

const NavAlbum = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ALBUM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" to="/search">search album</Link>
        <Link class="nav-link" to="/delete">delete album</Link>
        <Link class="nav-link" to="/viewall">view all albums</Link>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavAlbum