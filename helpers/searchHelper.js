const searchGithub = async (type, text) => {
  const apiUrl = `https://api.github.com/search/${type}?q=${encodeURIComponent(
    text
  )}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
module.exports = searchGithub;
