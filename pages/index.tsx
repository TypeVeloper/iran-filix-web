import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import MovieCarousel from "@containers/movies-carousel";
import useLastMovieQuery from "@framework/last-movie/get-all-last-movies";
import dynamic from "next/dynamic";

const HeroNewMovie = dynamic(() => import("@containers/hreo-new-movie"));

export default function Home() {
  const { data, isLoading } = useLastMovieQuery();

  // const [newMovies, setNewMovies] = React.useState<Array<MoviesType>>([]);

  const SectionTypeOfMovies = [
    {
      data: data,
      title: "آخرین فیلم و سریال های اضافه شده",
      url: "/",
    },
    {
      data: data,
      title: "ویژه ها",
      url: "/",
    },
    {
      data: data,
      title: "سریال های بروز شده",
      url: "/",
    },
    {
      data: data?.filter((item) => item.type !== "serie"),
      title: "فیلم ها با بیشترین دانلود",
      url: "/",
    },
    {
      data: data?.filter((item) => item.type === "serie"),
      title: "سریال ها با بیشترین دانلود",
      url: "/",
    },
  ];

  return (
    <Container>
      <HeroNewMovie data={data} isLoading={isLoading} />

      {SectionTypeOfMovies.map((item, idx) => {
        return (
          <MovieCarousel
            isLoading={isLoading}
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
