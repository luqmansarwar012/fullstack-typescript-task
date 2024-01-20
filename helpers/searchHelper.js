const searchGitHub = async (type, text) => {
  const apiUrl = `https://api.github.com/search/${type}?q=${encodeURIComponent(
    text
  )}`;
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `GitHub API request failed with status ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during GitHub search:", error);
    throw error;
  }
};

module.exports = searchGitHub;
