import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import MovieCarousel from "@containers/movies-carousel";
import { MoviesType } from "@framework/types";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { fetchLastMovie } from "../framework/last-movie/get-all-last-movies";

const HeroNewMovie = dynamic(() => import("@containers/hreo-new-movie"));
// const inter = Inter({ subsets: ["latin"] });
interface Props {
  data?: any;
}
export default function Home({ data }: Props) {
  const [newMovies, setNewMovies] = React.useState<Array<MoviesType>>([]);
  React.useEffect(() => {
    setNewMovies(data);
    return () => {
      setNewMovies([]);
    };
  }, [data]);

  const SectionTypeOfMovies = [
    {
      data: newMovies,
      title: "آخرین فیلم و سریال های اضافه شده",
      url: "/",
    },
    {
      data: newMovies,
      title: "ویژه ها",
      url: "/",
    },
    {
      data: newMovies,
      title: "سریال های بروز شده",
      url: "/",
    },
    {
      data: newMovies.filter((item) => item.type !== "serie"),
      title: "فیلم ها با بیشترین دانلود",
      url: "/",
    },
    {
      data: newMovies,
      title: "سریال ها با بیشترین دانلود",
      url: "/",
    },
  ];

  return (
    <Container>
      <HeroNewMovie data={newMovies} />
      {SectionTypeOfMovies.map((item, idx) => {
        return (
          <MovieCarousel
            key={idx}
            data={item.data}
            title={item.title}
            href={item.url}
          />
        );
      })}
    </Container>
  );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchLastMovie();

  return { props: { data } };
};
