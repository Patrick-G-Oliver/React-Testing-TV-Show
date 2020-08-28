import axios from "axios";

const fetchShow = () => {
    return axios
        .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then(res => {
            console.log(res.data)
            return res;
        })
        .catch((err) => {
            console.log("Hubo un problema...", err)
            return err
        });
};

export default fetchShow;

// original api call from App.js:
/* 
useEffect(() => {
    const fetchShow = () => {
      axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
          setShow(res.data);
          setSeasons(formatSeasons(res.data._embedded.episodes));
        });
    };
    fetchShow();
  }, []);
*/ 