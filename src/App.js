// import logo from './logo.svg';
// import './App.css';
// import Row from './Row';
// import requests from './requests';
// import Banner from './Banner';
// import Nav from './Nav';
// function App() {
  
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Nav/>
//       <Banner />
//       <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
//       <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
//       <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} />
//       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
//       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
//       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
//       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
//       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';
// import Row from './Row';
// import requests from './requests';
// import Banner from './Banner';
// import Nav from './Nav';

// function App() {
//   let a = prompt("Select Happy or Sad");

//   let rowsToRender;
//   if (a === "Happy") {
//     rowsToRender = (
//       <>
//         <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
//         <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
//         <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} />
//         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
//         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
//         <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
//         <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
//         <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
//       </>
//     );
//   }
//   else if(a ==="Sad"){
//     rowsToRender = (
//       <>
//         <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
//         <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
//         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
//         <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
//         <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} />
//         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
//         <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
//         <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
//       </>
//     );
//   }

//   return (
//     <div className="App">
//       <Nav />
//       <Banner />
//       {rowsToRender}
//     </div>
//   );
// }

// export default App;







import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import SearchButton from './SearchButton';
import SignIn from './SignIn';
import ProfileScreen from './ProfileScreen';
import SectionSelection from './section-selection';
import SubscriptionsPage from './SubscriptionPage';
import Payments1 from './Payments1';
import Payments2 from './Payments2';

function App() {
  const [selectedSection, setSelectedSection] = useState('');

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/section-selection"
            element={<SectionSelection onSelectSection={handleSectionSelect} />}
          />
          <Route
            path="/homepage"
            element={<Homepage selectedSection={selectedSection} />}
          />
          <Route path="/search" element={<SearchButton />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/subscriptions" element={<SubscriptionsPage/>} />
          <Route path="/payment1" element={<Payments1/>} />
          <Route path="/payment2" element={<Payments2/>} />
        </Routes>
      </div>
    </Router>
  );
}

function Homepage({ selectedSection }) {
  let rowsToRender;

  if (selectedSection === 'Happy') {
    rowsToRender = (
      <>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
        <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </>
    );
  } else if (selectedSection === 'Sad') {
    rowsToRender = (
      <>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </>
    );
  }

  else{
    rowsToRender = (
      <>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
        <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </>
    );
  }

  return (
    <>
      <Nav />
      <Banner />
      {rowsToRender}
    </>
  );
}



export default App;





