import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { setMoviesSearch } from "../../../../redux/slices/moviesSlice";
import { useAppDispatch } from "../../../../redux/store/hooks";

const MoviesSearch = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    dispatch(setMoviesSearch(debouncedSearch));
  }, [dispatch, debouncedSearch]);

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value ?? "")}
    />
  );
};

export default MoviesSearch;
