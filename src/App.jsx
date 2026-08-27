import { useRef, useState } from "react";
import "./App.css";

const photos = [
  {
    src: "/image/download (15).jpg",
    caption: "HAHAHHAAHHA peace yarn 💗",
  },
  {
    src: "/image/download (2).jpg",
    caption: "nigga yarn? ✨",
  },
  {
    src: "/image/download (12).jpg",
    caption: "Ang cute mo dito baby",
  },
  {
    src: "/image/download (10).jpg",
    caption: "Posa mo baby",
  },
];

const songs = [
  {
    title: "diba eto yung kinakanta ko pag matutulog kana hehe",
    artist: "Doc jin",
    src: "/songs/Totoong%20tayo.mp3",
  },
  {
    title: "Eto yung lagi mo saking inaasar tse!",
    artist: "Alex Crichton",
    src: "public/songs/Alex Crichton - What If I Call (Lyrics).mp3",
  },
  {
    title: "eto yung sabi mo na pag nag ka pic tayo eto ilalagay mo",
    artist: "Romeo",
    src: "/public/songs/Alex Crichton - What If I Call (Lyrics).mp3",
  },
];

function App() {
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [playingSong, setPlayingSong] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const backgroundMusic = useRef(null);

  // OPEN SURPRISE + PLAY MUSIC
  const startSurprise = async () => {
    try {
      if (backgroundMusic.current) {
        backgroundMusic.current.currentTime = 0;

        await backgroundMusic.current.play();

        setMusicPlaying(true);
      }
    } catch (error) {
      console.log("Music could not play:", error);
    }

    // Open the surprise after starting the music
    setOpened(true);
  };

  // BACKGROUND MUSIC ON/OFF
  const toggleBackgroundMusic = async () => {
    if (!backgroundMusic.current) return;

    if (backgroundMusic.current.paused) {
      try {
        await backgroundMusic.current.play();
        setMusicPlaying(true);
      } catch (error) {
        console.log("Music could not play:", error);
      }
    } else {
      backgroundMusic.current.pause();
      setMusicPlaying(false);
    }
  };

  // FAVORITE SONGS
  const toggleSong = async (index) => {
    const audio = document.getElementById(`song-${index}`);

    if (!audio) return;

    // Stop currently playing song
    if (playingSong === index) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingSong(null);
      return;
    }

    // Stop all other songs
    document.querySelectorAll(".favorite-song").forEach((song) => {
      song.pause();
      song.currentTime = 0;
    });

    // Stop background music
    if (backgroundMusic.current) {
      backgroundMusic.current.pause();
      setMusicPlaying(false);
    }

    try {
      await audio.play();
      setPlayingSong(index);
    } catch (error) {
      console.log("Song could not play:", error);
    }
  };

  return (
    <div className="app">

      {/* =====================================================
          BACKGROUND MUSIC
          IMPORTANT: This is the REAL filename from your folder.
          ===================================================== */}
      <audio
        ref={backgroundMusic}
        src="/songs/birthday%20song.mp3.mp3"
        loop
        preload="auto"
      />

      {/* =====================================================
          OPENING PAGE
          ===================================================== */}
      {!opened && (
        <section className="opening">

          <div className="pink-glow glow-one"></div>
          <div className="pink-glow glow-two"></div>

          <div className="floating-heart heart-one">♡</div>
          <div className="floating-heart heart-two">♡</div>
          <div className="floating-heart heart-three">♡</div>
          <div className="floating-heart heart-four">♡</div>

          <div className="opening-content">

            <div className="tiny-heart">♡</div>

            <p className="eyebrow">
              A LITTLE SURPRISE FOR YOU
            </p>

            <h1>
  <span className="birthday-pink">
    Happy
    <br />
    Birthday
  </span>
</h1>
            <div className="name-line">
              For my favorite person ♡
            </div>

            <p className="opening-text">
              I made something special just for you.
            </p>

            <button
              className="open-button"
              onClick={startSurprise}
              type="button"
            >
              Open My Surprise
              <span>♡</span>
            </button>

            <p className="music-hint">
              🎵 Turn up your volume
            </p>

          </div>
        </section>
      )}

      {/* =====================================================
          MAIN WEBSITE
          ===================================================== */}
      {opened && (
        <main>

          {/* MUSIC BUTTON */}
          <button
            className="music-control"
            onClick={toggleBackgroundMusic}
            aria-label="Toggle background music"
            type="button"
          >
            <span
              className={
                musicPlaying
                  ? "music-icon playing"
                  : "music-icon"
              }
            >
              ♪
            </span>

            {musicPlaying ? "Music On" : "Music Off"}
          </button>

          {/* HERO */}
          <section className="hero">

            <div className="hero-decoration hero-left">♡</div>
            <div className="hero-decoration hero-right">♡</div>

            <p className="eyebrow">
              TODAY IS YOUR SPECIAL DAY
            </p>

            <h2>
  <span className="birthday-pink">
    Happy Birthday,
    <br />
    <em>My baby Avie</em>
  </span>
</h2>

            <div className="hero-divider">
              <span></span>
              ♡
              <span></span>
            </div>

            <p className="hero-description">
              Today isn't just another day.
              Today is a day to celebrate someone
              incredibly special.
            </p>

            <a
              href="#message"
              className="scroll-button"
            >
              Discover your surprise
              <span>↓</span>
            </a>

          </section>

          {/* MESSAGE */}
          <section
            className="message-section"
            id="message"
          >

            <div className="section-heading">

            

              <p>Poso ni Leo</p>

              <h2>
                A little letter
                <br />
                <em>for you my babyyy!</em>
              </h2>

            </div>

            <div className="letter">

              <div className="letter-top">
                <span>♡</span>
              </div>

              <p className="letter-greeting">
                Dear <strong>Aviesala</strong>,
              </p>

              <p>
                Happy birthday! 🎂
              </p>

              <p>
                Happy birthday baby iloveyousomuchhh enjoy your day po
                love na love kita baby sorry kase eto muna mabibigay ko sayo 
                sobrang layo pa kasi natin sa isat isa but i'll promise baby pag kaya kona 
                pupuntahan kita dyan.
              </p>

              <p>
                
              </p>

              <p>
                and sana this new chapter of your life brings
                you happiness, peace, beautiful memories,
                and everything your heart has been wishing for wow 
                english yarn.
              </p>

              <p>
                And kahit nag aaway tayo minsan mahal na mahal parin kita baby 
                hindi nagbabago pagmamahal ko sayo siguro nagtatampo ako sayo minsan 
                pero hindi ibig sabihin non hindi na kita mahal.
              </p>

              <p>
                Thank you for being you.
                Thank you for the conversations, the laughter,
                the memories, and all those little moments
                that somehow became so meaningful.
              </p>

              <p>
                I made this little website because I wanted
                to give you something different. kase nga sobrang 
                layo natin sa isat isa so parang dito konalang mapapakitang mahal
                na mahal kita baby
                
              </p>

              <p>
                I hope today is filled with your favorite people,
                your favorite songs, your favorite food,
                and countless reasons to smile.
              </p>

              <p>
                Most of all, I hope you never forget how
                loved, appreciated, and special you are.
              </p>

              <p>
                Happy birthday again,
                <strong>my baby avie.</strong>.
                Enjoy your day mahal ko!
              </p>

              <div className="letter-signature">
                With all my love,
                <br />
                <strong>Picasso</strong>
              </div>

              <div className="letter-bottom">
                ♡
              </div>

            </div>
          </section>

          {/* PHOTOS */}
          <section className="photos-section">

            <div className="section-heading centered">

              <span className="section-number">
                02
              </span>

              <p>SOME OF MY FAVORITES</p>

              <h2>
                Favorite ko
                <br />
                <em>na pics mo</em>
              </h2>

              <p className="heading-description">
                Nigga 
              </p>

            </div>

            <div className="photo-grid">

              {photos.map((photo, index) => (
                <button
                  className="photo-card"
                  key={photo.src}
                  onClick={() => setSelectedPhoto(photo)}
                  type="button"
                >

                  <img
                    src={photo.src}
                    alt={photo.caption}
                  />

                  <div className="photo-number">
                    0{index + 1}
                  </div>

                  <div className="photo-overlay">
                    <span>♡</span>
                    <small>VIEW</small>
                  </div>

                </button>
              ))}

            </div>

          </section>

          {/* PHOTO MODAL */}
          {selectedPhoto && (
            <div
              className="photo-modal"
              onClick={() => setSelectedPhoto(null)}
            >

              <button
                className="close-modal"
                onClick={() => setSelectedPhoto(null)}
                type="button"
              >
                ×
              </button>

              <div
                className="modal-content"
                onClick={(event) => event.stopPropagation()}
              >

                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                />

                <p>
                  {selectedPhoto.caption}
                </p>

              </div>

            </div>
          )}

          {/* SONGS */}
          <section className="songs-section">

            <div className="section-heading centered">

              <span className="section-number">
                03
              </span>

              <p>PRESS PLAY</p>

              <h2>
                Songs that
                <br />
                <em>remind me of you</em>
              </h2>

              <p className="heading-description">
                Put on your headphones and enjoy. 🎧
              </p>

            </div>

            <div className="songs-container">

              {songs.map((song, index) => (
                <div
                  className="song-card"
                  key={song.src}
                >

                  <div className="song-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="song-info">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                  </div>

                  <button
                    className="song-play"
                    onClick={() => toggleSong(index)}
                    type="button"
                  >
                    {playingSong === index ? "Ⅱ" : "▶"}
                  </button>

                  <audio
                    id={`song-${index}`}
                    className="favorite-song"
                    src={song.src}
                    onEnded={() => setPlayingSong(null)}
                    preload="metadata"
                  />

                </div>
              ))}

            </div>

          </section>

          {/* THINGS I LOVE */}
          <section className="things-section">

            <div className="section-heading centered">

              <span className="section-number">
                04
              </span>

              <p>JUST A FEW THINGS</p>

              <h2>
                What makes
                <br />
                <em>you special</em>
              </h2>

            </div>

            <div className="things-grid">

              <div className="thing-card">
                <span>01</span>
                <div className="thing-heart">♡</div>
                <h3>Your smile</h3>
                <p>
                  ang cutieee mo mag smile baby!!
                </p>
              </div>

              <div className="thing-card">
                <span>02</span>
                <div className="thing-heart">♡</div>
                <h3>Your laugh</h3>
                <p>
                  AHHAHAHAHAHAHAHAHAH tawang tawa
                </p>
              </div>

              <div className="thing-card">
                <span>03</span>
                <div className="thing-heart">♡</div>
                <h3>yung humor mo baby</h3>
                <p>
                  same na same us
                </p>
              </div>

              <div className="thing-card">
                <span>04</span>
                <div className="thing-heart">♡</div>
                <h3>cute ka</h3>
                <p>
                  pati mga pusa mo cute
                </p>
              </div>

            </div>

          </section>

          {/* FINAL */}
          <section className="final-section">

            <div className="final-decoration final-one">
              ♡
            </div>

            <div className="final-decoration final-two">
              ♡
            </div>

            <div className="final-content">

              <div className="final-hearts">
                ♡　♡　♡
              </div>

              <p className="eyebrow">
                ONE LAST THING
              </p>

              <h2>
                I hope your birthday
                <br />
                is as beautiful
                <br />
                <em>as you are.</em>
              </h2>

              <p className="final-description">
                Keep smiling.
                Keep dreaming.
                Keep being the wonderful person
                that you are.
              </p>

              <div className="birthday-cake">
                🎂
              </div>

              <div className="final-line"></div>

              <p className="final-birthday">
                Happy Birthday,
                <br />
                <strong>MY BABYY!</strong>
              </p>

              <p className="final-love">
                Made with Picasso
              </p>

            </div>

          </section>

        </main>
      )}

    </div>
  );
}

export default App;