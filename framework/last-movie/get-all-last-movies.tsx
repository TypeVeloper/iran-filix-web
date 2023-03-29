import { MoviesType } from "@framework/types";import http_front from "@framework/utils/http-front";
import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./../utils/api-endpoints";
export const fetchLastMovie = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http_front.get(API_ENDPOINTS.FRONT_END.movies);
  return [...(data as MoviesType[])];
};

const useLastMovieQuery = () => {
  return useQuery<MoviesType[]>(["last-movie"], fetchLastMovie);
};

export default useLastMovieQuery;
