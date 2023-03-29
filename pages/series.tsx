import Layout from "@components/layout/layout";import Container from "@components/ui/container";
import MovieCarousel from "@containers/movies-carousel";
import useLastMovieQuery from "@framework/last-movie/get-all-last-movies";
import { MoviesType } from "@framework/types";
import React from "react";
export default function Series() {
  const { data, isLoading } = useLastMovieQuery();

  const [newMovies, setNewMovies] = React.useState<any>([]);
  React.useEffect(() => {
    setNewMovies(data);
    return () => {
      setNewMovies([]);
    };
  }, [data]);
  return (
    <Container>
      <MovieCarousel
        data={newMovies?.filter(
          (item: MoviesType) => item.type === "serie" && item,
        )}
        isLoading={isLoading}
        title={"آخرین سریال های اضافه شده"}
        href='/'
      />
    </Container>
  );
}

Series.Layout = Layout;
