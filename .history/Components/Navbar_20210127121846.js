import Link from "next/link"
const Navbar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">BitzPrize
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item"><Link>
        <a class="nav-link" href="/">Home</a></Link>
      </li>
      <li class="nav-item"><Link>
        <a class="nav-link" href="/About">About</a></Link>
      </li>
    </ul>
  </div>
</nav>    
        </div>
    )
}

export default Navbar