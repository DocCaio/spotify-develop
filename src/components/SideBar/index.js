import './SideBar.css';

const SideBar = () => {
    return(

        <div class="sidebar">
    <nav class="sidebar__navigation">
      <div class="logo">
        <a href="">
          <img src="/icons/logo-spotify.png" alt="Logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="">
            <span class="fa fa-home"></span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="fa fa-search"></span>
            <span>Search</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="library">
      <div class="library__content">
        <button class="library__button">
          <span class="fa fas fa-book"></span>
          <span>Your library</span>
        </button>
        <span class="fa fa-plus"></span>
      </div>

      <section class="section-playlist">
        <div class="section-playlist__content">
          <span class="text title">Create your first playslist</span>
          <span class="text subtitle">Let s find some podcasts to follow.</span>
          <button class="section-playlist__button">
            <span>Create playlist</span>
          </button>
        </div>
      </section>

      <div class="cookies">
        <a href="">Cookies</a>
      </div>

      <div class="languages">
        <button class="languages__button">
          <span class="fa fa-globe"></span>
          <span>English USA</span>
        </button>
      </div>
    </div>
  </div>

    )
}

export default SideBar;