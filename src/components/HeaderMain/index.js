import './Header-main.css';




const Header = () => {
    return (
      <main>
      <div className="main-container">
      
        <nav class="header__navigation">
          <div className="navigation">
            <button className="arrow-left">
              <img src="./icons/small-left.png" alt="" />
            </button>
            <button className="arrow-right">
              <img src="./icons/small-right.png" alt="" />
            </button>
  
            <div className="header__search">
              <img src="./icons/search.png" alt="" />
              <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
                placeholder="What do you want to play" value="" />
            </div>
          </div>
  
          <div class="header__login">
            <button className="subscribe">Sing up</button>
            <button className="login">Log in</button>
          </div>
        </nav>
  
        
        <div className="playlist-container">
          <div id="result-playlists">
            <div className="playlist">
            
              <h1 id="greeting"></h1>
              <h2 className="session">Browse all</h2>
            </div>
  
          
            <div className="offer__scroll-container">
              <div className="offer__list">
                <section className="offer__list-item">
                
                  <a href="" className="cards">
                    <div className="cards card1">
                      <img src="./playlist/1.jpeg" alt="" />
                      <span>Party</span>
                    </div>
                  </a>
  
                  <a href="" className="cards">
                    <div className="cards card2">
                      <img src="./playlist/2.png" alt="" />
                      <span>Made for you</span>
                    </div>
                  </a>
  
                  <a href="" className="cards">
                    <div className="cards card3">
                      <img src="./playlist/3.jpeg" alt="" />
                      <span>Realises</span>
                    </div>
                  </a>
  
                  
                  <a href="" className="cards">
                    <div className="cards card4">
                      <img src="./playlist/4.jpeg" alt="" />
                      <span>Creators</span>
                    </div>
                  </a>
  
                  
                  <a href="" className="cards">
                    <div className="cards card5">
                      <img src="./playlist/5.jpeg" alt="" />
                      <span>Training</span>
                    </div>
                  </a>
  
                  <a href="" className="cards">
                    <div className="cards card6">
                      <img src="./playlist/6.jpeg" alt="" />
                      <span>Podcasts</span>
                    </div>
                  </a>
  
                 
                  <a href="" className="cards">
                    <div className="cards card7">
                      <img src="./playlist/7.jpeg" alt="" />
                      <span>Sertanejo</span>
                    </div>
                  </a>
  
                  <a href="" className="cards">
                    <div className="cards card8">
                      <img src="./playlist/8.jpeg" alt="" />
                      <span>Samba and pagode</span>
                    </div>
                  </a>
  
                 
                  <a href="" className="cards">
                    <div className="cards card9">
                      <img src="./playlist/9.jpeg" alt="" />
                      <span>Funk</span>
                    </div>
                  </a>
  
                  
                  <a href="" className="cards">
                    <div className="cards card10">
                      <img src="./playlist/10.jpeg" alt="" />
                      <span>MPB</span>
                    </div>
                  </a>
  
              
                  <a href="" className="cards">
                    <div className="cards card11">
                      <img src="./playlist/11.jpeg" alt="" />
                      <span>Rock</span>
                    </div>
                  </a>
  
                  <a href="" className="cards">
                    <div className="cards card12">
                      <img src="./playlist/12.jpeg" alt="" />
                      <span>Hip Hop</span>
                    </div>
                  </a>
  
                 
                  <a href="" className="cards">
                    <div className="cards card13">
                      <img src="./playlist/13.jpeg" alt="" />
                      <span>Indie</span>
                    </div>
                  </a>
  
                 
                  <a href="" className="cards">
                    <div className="cards card14">
                      <img src="./playlist/14.jpeg" alt="" />
                      <span>Relax</span>
                    </div>
                  </a>
  
                  <a href="" className="cards">
                    <div className="cards card15">
                      <img src="./playlist/15.jpeg" alt="" />
                      <span>Latin musics</span>
                    </div>
                  </a>
                </section>
              </div>
            </div>
          </div>
  
  
          <div id="result-artist" className="hidden">
            <div className="grid-container">
              <div className="artist-card" id="">
                <div className="card-img">
                  <img id="artist-img" class="artist-img" />
                  <div className="play">
                    <span className="fa fa-solid fa-play"></span>
                  </div>
                </div>
                <div className="card-text">
                  <a title="Foo Fighters" className="vst" href="">
                  <span className="artist-name" id="artist-name"></span>
                  <span className="artist-categorie">Artist</span>
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