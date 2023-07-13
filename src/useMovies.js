import { useState, useEffect } from "react";
export const KEY = "c8f53809";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setErr("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Someting went wrong with fetching movies");

          const data = await res.json();
          // console.log(data);

          if (data.Response === "False") throw new Error("movie not found");

          setMovies(data.Search);
          // console.log(data.Search);
          setErr("");
        } catch (err) {
          // console.log(err.message);

          if (err.name !== "AbortError") {
            setErr(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setErr("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, err };
}
