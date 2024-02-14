import './Header-main.css';

const Header = () => {
    return (
        <main>
    <div className="main-container">
      /* INVERTER AS CLASSES */
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src="./icons/small-left.png" alt="" />
          </button>
          <button className="arrow-right">
            <img src="./icons/small-right.png" alt="" />
          </button>

          <div className="header__search">
            <img src="./src/assets/icons/search.png" alt="" />
            <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
              placeholder="O que você quer ouvir?" value="" />
          </div>
        </div>

        <div class="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>

      /* PLAYLIST */
      <div className="playlist-container">
        <div id="result-playlists">
          <div className="playlist">
          /* COLOCAR O BOM DIA | BOA TARDE | BOA NOITE */
            <h1 id="greeting"></h1>
            <h2 className="session">Navegar por todas as seções</h2>
          </div>

          /* LIST ITEM 1 */
          <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item">
                /* CARD 1 */
                <a href="" className="cards">
                  <div className="cards card1">
                    <img src="/playlist/1.jpeg" alt="" />
                    <span>Boas festas</span>
                  </div>
                </a>

               /* CARD 2 */
                <a href="" className="cards">
                  <div className="cards card2">
                    <img src="/playlist/2.png" alt="" />
                    <span>Made for you</span>
                  </div>
                </a>

                /* CARD 3 */
                <a href="" className="cards">
                  <div className="cards card3">
                    <img src="/playlist/3.jpeg" alt="" />
                    <span>Realeases</span>
                  </div>
                </a>

                /* CARD 4 */
                <a href="" className="cards">
                  <div className="cards card4">
                    <img src="/playlist/4.jpeg" alt="" />
                    <span>Creators</span>
                  </div>
                </a>

                /* CARD 5 */
                <a href="" className="cards">
                  <div className="cards card5">
                    <img src="/playlist/5.jpeg" alt="" />
                    <span>Para treinar</span>
                  </div>
                </a>

                /* CARD 6 */
                <a href="" className="cards">
                  <div className="cards card6">
                    <img src="/playlist/6.jpeg" alt="" />
                    <span>Podcasts</span>
                  </div>
                </a>

                /* CARD 7 */
                <a href="" className="cards">
                  <div className="cards card7">
                    <img src="/playlist/7.jpeg" alt="" />
                    <span>Sertanejo</span>
                  </div>
                </a>

               /* CARD 8 */
                <a href="" className="cards">
                  <div className="cards card8">
                    <img src="/playlist/8.jpeg" alt="" />
                    <span>Samba e pagode</span>
                  </div>
                </a>

                /* CARD 9 */
                <a href="" className="cards">
                  <div className="cards card9">
                    <img src="/playlist/9.jpeg" alt="" />
                    <span>Funk</span>
                  </div>
                </a>

                /* CARD 10 */
                <a href="" className="cards">
                  <div className="cards card10">
                    <img src="/playlist/10.jpeg" alt="" />
                    <span>MPB</span>
                  </div>
                </a>

                /* CARD 11 */
                <a href="" className="cards">
                  <div className="cards card11">
                    <img src="/playlist/11.jpeg" alt="" />
                    <span>Rock</span>
                  </div>
                </a>

              /* CARD 12 */
                <a href="" className="cards">
                  <div className="cards card12">
                    <img src="/playlist/12.jpeg" alt="" />
                    <span>Hip Hop</span>
                  </div>
                </a>

                /* CARD 13 */
                <a href="" className="cards">
                  <div className="cards card13">
                    <img src="/playlist/13.jpeg" alt="" />
                    <span>Indie</span>
                  </div>
                </a>

                /* CARD 14 */
                <a href="" className="cards">
                  <div className="cards card14">
                    <img src="/playlist/14.jpeg" alt="" />
                    <span>Relax</span>
                  </div>
                </a>

                /* CARD 15 */
                <a href="" className="cards">
                  <div className="cards card15">
                    <img src="/playlist/15.jpeg" alt="" />
                    <span>Música Latina</span>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>


        <div id="result-artist" class="hidden">
          <div className="grid-container">
            <div className="artist-card" id="">
              <div className="card-img">
                <img id="artist-img" class="artist-img" />
                <div className="play">
                  <span className="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div className="card-text">
                <a title="Foo Fighters" class="vst" href="">
                <span className="artist-name" id="artist-name"></span>
                <span className="artist-categorie">Artista</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </main>
    )
        
       
  
      
     
    
    
    


    
}

export default Header;