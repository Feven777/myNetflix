const API_key=process.env.REACT_APP_API_key;
const requests={
    fetchTrending:`/trending/movie/day?api_key=${API_key}&language=en-US `,
    fetchNetflixOginals:`/genre/tv/list?api_key= ${API_key}&language=en`,
    fetchTopRatedMovie:`/tv/top_rated?api_key=${API_key}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchAdventuresMovies:`/discover/movie?api_key=${API_key}&with_genres=12`,
    fetchAnimationMovies:`/discover/movie?api_key=${API_key}&with_genres=16`,
    fetchCrimeMovies:`/discover/movie?api_key=${API_key}&with_genres=80`,
    fetchDocumentaries:`/discover/movie?api_key=${API_key}&with_genres=99`,
    fetchComedyMovies:`/discover/movie?api_key=${API_key}&with_genres=35`

};
export default requests;
