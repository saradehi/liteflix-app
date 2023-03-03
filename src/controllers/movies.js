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

  if (dropdown.className.includes(classname)) {
    dropdown.classList.remove(classname);
  } else {
    dropdown.className += ` ${classname}`;
  }
};

export const changeImage = (event, setCharging, setBackgroundColor, setCharged) => {
  if (event.target.files[0] !== undefined) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (element) => {
      element.preventDefault();
      setCharging(true);
      setBackgroundColor("#64eebc");
      if (element.target.result.includes("image")) {
        setCharged(true);
      } else {
        setCharged(false);
        setTimeout(() => setBackgroundColor("red"), 3300);
      }
    };
  }
};
