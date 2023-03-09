import axios from "axios";

export const allMovies = async (setMovies, setError, setMyMovies) => {
  try {
    let response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
    );
    setMovies(response.data.results);

    const item = JSON.parse(window.localStorage.getItem("movies"));
    setMyMovies(item);
  } catch (error) {
    setError(error);
  }
};

export const popularMovie = async (setPopularMovie, setError) => {
  try {
    let response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
    );
    setPopularMovie(response.data.results[4]);
  } catch (error) {
    setError(error)
  }
};

export const handlerClick = (id, classname) => {
  const dropdown = document.getElementById(id);

  if (dropdown.className.includes(classname)) {
    dropdown.classList.remove(classname);
  } else {
    dropdown.className += ` ${classname}`;
  }
};

export const changeImage = (
  event,
  setCharging,
  setBackgroundColor,
  setCharged,
  setResult,
  setStatus
) => {
  if (event.target.files[0] !== undefined) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (element) => {
      element.preventDefault();
      setCharging(true);
      setBackgroundColor("#64eebc");
      if (element.target.result.includes("image")) {
        setTimeout(() => setCharged("true"), 3100);
        setStatus(true);
        setResult(element.target.result);
      } else {
        setStatus(false);
        setTimeout(() => {
          setBackgroundColor("red");
          setCharged("false");
        }, 3100);
        setResult("Error");
      }
    };
  }
};

export const handleSubmit = (title, result, setResult, setSuccess) => {
  try {
    if (result !== "Error" && title) {
      // window.localStorage.clear();
      const item = JSON.parse(window.localStorage.getItem("movies"));
      if (item) {
        item.push({ title, result });
        window.localStorage.setItem("movies", JSON.stringify(item));
      } else {
        window.localStorage.setItem(
          "movies",
          JSON.stringify([{ title, result }])
        );
      }
      setResult("Error");
      setSuccess(true);
    }
  } catch (error) {
    return "Error";
  }
};

export const activeSubmit = (result, title) => {
  if (result !== "Error" && title) {
    return false;
  } else {
    return true;
  }
};

export const deleteMovie = (title) => {
  const item = JSON.parse(window.localStorage.getItem("movies"));

  const filter = item.filter((ele) => ele.title !== title);

  window.localStorage.setItem("movies", JSON.stringify(filter));
};
