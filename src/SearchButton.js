// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer';
// import './SearchButton.css';

// const base_url = 'https://image.tmdb.org/t/p/original/';
// const API_KEY = '5f322500b9a0871f757b6cf03afd7fc7';

// function SearchButton() {
//   const [keyword, setKeyword] = useState('');
//   const [mediaType, setMediaType] = useState('movie'); // Default media type is movie
//   const [movies, setMovies] = useState([]);
//   const [clickedMovie, setClickedMovie] = useState(null);
//   const [trailerUrl, setTrailerUrl] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/search/${mediaType}?api_key=${API_KEY}&query=${keyword}`
//         );
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error('Error searching media:', error);
//       }
//     };

//     if (keyword.trim() !== '') {
//       fetchData();
//     } else {
//       setMovies([]);
//     }
//   }, [keyword, mediaType]);

//   const handleMediaClick = async (media) => {
//     try {
//       if (media.id === clickedMovie?.id) {
//         setClickedMovie(null);
//         setTrailerUrl('');
//       } else {
//         setClickedMovie(media);
//         const url = await movieTrailer(media?.title || media?.name || '', {
//           tmdbApiKey: '5f322500b9a0871f757b6cf03afd7fc7',
//           multi: true,
//         });
//         const urlParams = new URLSearchParams(new URL(url).search);
//         setTrailerUrl(urlParams.get('v'));
//       }
//     } catch (error) {
//       console.error('Error retrieving trailer URL:', error);
//     }
//   };

//   const opts = {
//     height: '390',
//     width: '100%',
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="search-container">
//       <div className="search-bar">
//         <input
//           type="text"
//           value={keyword}
//           onChange={(e) => setKeyword(e.target.value)}
//           placeholder="Search for movies or TV series"
//         />
//         <select
//           value={mediaType}
//           onChange={(e) => setMediaType(e.target.value)}
//         >
//           <option value="movie">Movie</option>
//           <option value="tv">TV Series</option>
//         </select>
//         <button onClick={() => setKeyword('')}>Clear</button>
//       </div>

//       <div className="media-container">
//         {movies.map((media) => (
//           <div
//             key={media.id}
//             className={`media-item ${
//               clickedMovie?.id === media.id ? 'active' : ''
//             }`}
//             onClick={() => handleMediaClick(media)}
//           >
//             <h2>{media.title || media.name}</h2>
//             <img
//               src={`${base_url}${media.poster_path}`}
//               alt={media.title || media.name}
//               className="media-poster"
//             />
//             {clickedMovie?.id === media.id && (
//               <YouTube videoId={trailerUrl} opts={opts} className="trailer-video" />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchButton;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './SearchButton.css';

const base_url = 'https://image.tmdb.org/t/p/original/';
const API_KEY = '5f322500b9a0871f757b6cf03afd7fc7';

function SearchButton() {
  const [keyword, setKeyword] = useState('');
  const [mediaType, setMediaType] = useState('movie'); // Default media type is movie
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [voiceSearchResult, setVoiceSearchResult] = useState('');
  const [isSpeechRecognitionAvailable, setIsSpeechRecognitionAvailable] = useState(false);


  let recognition;

  useEffect(() => {
    const recognitionAvailable = window.webkitSpeechRecognition !== undefined;
    setIsSpeechRecognitionAvailable(recognitionAvailable);
  }, []);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/${mediaType}?api_key=${API_KEY}&query=${keyword}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error searching media:', error);
      }
    };

    if (keyword.trim() !== '') {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [keyword, mediaType]);

  const handleMediaClick = async (media) => {
    try {
      if (media.id === clickedMovie?.id) {
        setClickedMovie(null);
        setTrailerUrl('');
      } else {
        setClickedMovie(media);
        const url = await movieTrailer(media?.title || media?.name || '', {
          tmdbApiKey: '5f322500b9a0871f757b6cf03afd7fc7',
          multi: true,
        });
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }
    } catch (error) {
      console.error('Error retrieving trailer URL:', error);
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  

  const startSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setVoiceSearchResult(transcript);
      setKeyword(transcript);
    };
  
    recognition.onend = () => {
      setIsListening(false);
    };
  
    recognition.start();
    setIsListening(true);
  };
  

  return (
    <div className="search-container">
      <div className="search-bar">
          <div className='search-input-wrapper'>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search for Movies and TV Series "
            />
            {isSpeechRecognitionAvailable && (
              <button onClick={startSpeechRecognition} className="voice-search-button">
              <img src='https://iconape.com/wp-content/files/gx/368000/svg/mic-logo-icon-png-svg.png'/>           
              </button>
            )}
          </div>
        
        <select
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
        >
          <option value="movie">Movie</option>
          <option value="tv">TV Series</option>
        </select>
        <button onClick={() => setKeyword('')} className='clear-button'>Clear</button>

      </div>

      <div className="media-container">
        {movies.map((media) => (
          <div
            key={media.id}
            className={`media-item ${
              clickedMovie?.id === media.id ? 'active' : ''
            }`}
            onClick={() => handleMediaClick(media)}
          >
            <h2>{media.title || media.name}</h2>
            <img
              src={`${base_url}${media.poster_path}`}
              alt={media.title || media.name}
              className="media-poster"
            />
            {clickedMovie?.id === media.id && (
              <YouTube videoId={trailerUrl} opts={opts} className="trailer-video" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchButton;



