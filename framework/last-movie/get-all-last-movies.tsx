import { useQuery } from "react-query";import http from "../utils/http";
import { API_ENDPOINTS } from "./../utils/api-endpoints";

export const fetchLastMovie = async () => {
  const { data } = await http.get(API_ENDPOINTS.LAST_MOVIE);

  return { data: data };
};

const useLastMovieQuery = () => {
  return useQuery(["last-movie"], fetchLastMovie);
};

export default useLastMovieQuery;
