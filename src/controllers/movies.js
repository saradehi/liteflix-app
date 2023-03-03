import axios from "axios";

export const allMovies = async (setMovies, setError) => {
  try {
    let response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
    );
    setMovies(response.data.results);
  } catch (error) {
    setError(error);
  }
};

export const handlerClick = (id, classname) => {
  const dropdown = document.getElementById(id);
  console.log(dropdown.className);

  if (dropdown.className.includes(classname)) {
    dropdown.classList.remove(classname);
  } else {
    dropdown.className += ` ${classname}`;
  }
};
