import Layout from "@components/layout/layout";import Container from "@components/ui/container";
import MovieCarousel from "@containers/movies-carousel";
import { MoviesType } from "@framework/types";
import { GetStaticProps } from "next";
import React from "react";
import { fetchLastMovie } from "../framework/last-movie/get-all-last-movies";

// const inter = Inter({ subsets: ["latin"] });
interface Props {
  data?: any;
}
export default function Series({ data }: Props) {
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
        data={newMovies.filter(
          (item: MoviesType) => item.type === "serie" && item,
        )}
        title={"آخرین سریال های اضافه شده"}
        href='/'
      />
    </Container>
  );
}

Series.Layout = Layout;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchLastMovie();

  return { props: { data } };
};
