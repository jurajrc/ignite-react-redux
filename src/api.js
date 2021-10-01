// Base URL
const base_url = "https://api.rawg.io/api/";
const api_key = "key=446dec9d080549cb8898a0cffe43c700";

// Getting the month
// januar vrati ako 0 preto + 1
// potrebujeme format 2021-08-30 preto je if ak je < 10
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1 
  if(month < 10) {
      return `0${month}`;
  }else{
      return month;
  }
};

// Getting the day
const getCurrentDay = () => {
    const day = new Date().getDate()
    if(day < 10) {
        return `0${day}`;
    }else{
        return day;
    }
  };

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Populat Games
const popular_games = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-relased&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`
