import './Header-main.css';

const Header = () => {
    return (
        <main>
    <div class="main-container">
      /* INVERTER AS CLASSES */
      <nav class="header__navigation">
        <div class="navigation">
          <button class="arrow-left">
            <img src="./icons/small-left.png" alt="" />
          </button>
          <button class="arrow-right">
            <img src="./src/assets/icons/small-right.png" alt="" />
          </button>

          <div class="header__search">
            <img src="./src/assets/icons/search.png" alt="" />
            <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
              placeholder="O que você quer ouvir?" value="" />
          </div>
        </div>

        <div class="header__login">
          <button class="subscribe">Inscreva-se</button>
          <button class="login">Entrar</button>
        </div>
      </nav>

      /* PLAYLIST */
      <div class="playlist-container">
        <div id="result-playlists">
          <div class="playlist">
          /* COLOCAR O BOM DIA | BOA TARDE | BOA NOITE */
            <h1 id="greeting"></h1>
            <h2 class="session">Navegar por todas as seções</h2>
          </div>

          /* LIST ITEM 1 */
          <div class="offer__scroll-container">
            <div class="offer__list">
              <section class="offer__list-item">
                /* CARD 1 */
                <a href="" class="cards">
                  <div class="cards card1">
                    <img src="./src/assets/playlist/1.jpeg" alt="" />
                    <span>Boas festas</span>
                  </div>
                </a>

               /* CARD 2 */
                <a href="" class="cards">
                  <div class="cards card2">
                    <img src="./src/assets/playlist/2.png" alt="" />
                    <span>Made for you</span>
                  </div>
                </a>

                /* CARD 3 */
                <a href="" class="cards">
                  <div class="cards card3">
                    <img src="./src/assets/playlist/3.jpeg" alt="" />
                    <span>Realeases</span>
                  </div>
                </a>

                /* CARD 4 */
                <a href="" class="cards">
                  <div class="cards card4">
                    <img src="./src/assets/playlist/4.jpeg" alt="" />
                    <span>Creators</span>
                  </div>
                </a>

                /* CARD 5 */
                <a href="" class="cards">
                  <div class="cards card5">
                    <img src="./src/assets/playlist/5.jpeg" alt="" />
                    <span>Para treinar</span>
                  </div>
                </a>

                /* CARD 6 */
                <a href="" class="cards">
                  <div class="cards card6">
                    <img src="./src/assets/playlist/6.jpeg" alt="" />
                    <span>Podcasts</span>
                  </div>
                </a>

                /* CARD 7 */
                <a href="" class="cards">
                  <div class="cards card7">
                    <img src="./src/assets/playlist/7.jpeg" alt="" />
                    <span>Sertanejo</span>
                  </div>
                </a>

               /* CARD 8 */
                <a href="" class="cards">
                  <div class="cards card8">
                    <img src="./src/assets/playlist/8.jpeg" alt="" />
                    <span>Samba e pagode</span>
                  </div>
                </a>

                /* CARD 9 */
                <a href="" class="cards">
                  <div class="cards card9">
                    <img src="./playlist/9.jpeg" alt="" />
                    <span>Funk</span>
                  </div>
                </a>

                /* CARD 10 */
                <a href="" class="cards">
                  <div class="cards card10">
                    <img src="./playlist/10.jpeg" alt="" />
                    <span>MPB</span>
                  </div>
                </a>

                /* CARD 11 */
                <a href="" class="cards">
                  <div class="cards card11">
                    <img src="./playlist/11.jpeg" alt="" />
                    <span>Rock</span>
                  </div>
                </a>

              /* CARD 12 */
                <a href="" class="cards">
                  <div class="cards card12">
                    <img src="./playlist/12.jpeg" alt="" />
                    <span>Hip Hop</span>
                  </div>
                </a>

                /* CARD 13 */
                <a href="" class="cards">
                  <div class="cards card13">
                    <img src="./playlist/13.jpeg" alt="" />
                    <span>Indie</span>
                  </div>
                </a>

                /* CARD 14 */
                <a href="" class="cards">
                  <div class="cards card14">
                    <img src="./src/assets/playlist/14.jpeg" alt="" />
                    <span>Relax</span>
                  </div>
                </a>

                /* CARD 15 */
                <a href="" class="cards">
                  <div class="cards card15">
                    <img src="./src/assets/playlist/15.jpeg" alt="" />
                    <span>Música Latina</span>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>


        <div id="result-artist" class="hidden">
          <div class="grid-container">
            <div class="artist-card" id="">
              <div class="card-img">
                <img id="artist-img" class="artist-img" />
                <div class="play">
                  <span class="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div class="card-text">
                <a title="Foo Fighters" class="vst" href="">
                <span class="artist-name" id="artist-name"></span>
                <span class="artist-categorie">Artista</span>
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