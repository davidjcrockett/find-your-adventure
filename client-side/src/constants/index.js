// RAWG url
const rawg_url = "https://api.rawg.io/api/";

// Establish date for fetching data
const getCurrentMonth = function () {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = function () {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular
const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming
const upcoming_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//Recent
const new_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//Search
const query_games = `games?key=${process.env.REACT_APP_API_KEY}&search=`;

//Details
const game_details = "games/";

// //Genres
// const game_genres = `genres/`

// //Platforms
// const game_platforms = "platforms/"

// Routes
export const getPopular = () => `${ rawg_url }${ popular_games }`;
export const getUpcoming = () => `${ rawg_url }${ upcoming_games }`;
export const getNew = () => `${ rawg_url }${ new_games }`;
export const getSearch = game_name => `${ rawg_url }${ query_games }${ game_name }`;
export const getDetails = game_id => `${ rawg_url }${ game_details }${ game_id }?key=${process.env.REACT_APP_API_KEY}`;


//Future Additions
// export const getGameGenres = () => `${ rawg_url }${ game_genres }?key=${ process.env.REACT_APP_API_KEY }`;
// export const getSpecificGenre = genre_id => `${ rawg_url }${ game_genres }${genre_id}?key=${ process.env.REACT_APP_API_KEY }`;
// export const getGamePlatforms = () => `${ rawg_url }${ game_platforms }?key=${ process.env.REACT_APP_API_KEY }`;
// export const getSpecificPlatform = platform_id => `${ rawg_url }${ game_platforms }${ platform_id }?key=${ process.env.REACT_APP_API_KEY }`;