// RAWG url
const rawg_url = "https://api.rawg.io/api/";

// Establish date for fetching data
const currentYear = new Date().getFullYear();
const getCurrentMonth = function () {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const currentMonth = getCurrentMonth();
const currentDay = new Date().getDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//Recent
const new_games = `$games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//Search
const query_games = "games?search=";

//Genres
const game_genres = "genres/"

//Platforms
const game_platforms = "platforms/"

// Routes
export const getPopular = () => `${ rawg_url }${ popular_games }`;
export const getUpcoming = () => `${ rawg_url }${ upcoming_games }`;
export const getNew = () => `${ rawg_url }${ new_games }`;
export const searchGame = game_name => `${ rawg_url }${ query_games }${ game_name }`;
export const getGameGenres = () => `${ rawg_url }${ game_genres }`;
export const getSpecificGenre = genre_name => `${ rawg_url }${ game_genres }${genre_name}`;
export const getGamePlatforms = () => `${ rawg_url }${ game_platforms }`;
export const getSpecificPlatform = platform_id => `${ rawg_url }${ game_platforms }${ platform_id }`;