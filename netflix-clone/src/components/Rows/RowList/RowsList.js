import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/request.js';

const RowsList = () => {
  return (
    <>
      <Row 
      title="NETFLIX ORGINALS"
      fetchUrl={requests.fetchNetflixOrginals} 
      isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title=" Top Rated Movies" fetchUrl={requests.fetchTopRatedMovie}
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}
      />
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventuresMovies}
      />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies}
      />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}
      />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </>
  )
}

export default RowsList
