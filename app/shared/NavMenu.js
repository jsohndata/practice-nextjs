import Link from "next/link";

const genres = [
  { title: "Comedy", slug: "comendy" },
  { title: "Drama", slug: "drama" },
  { title: "Documentary", slug: "documentary"}
]

export default function NavMenu() {

  return (
    <header className="text-zinc-300 bg-zinc-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-zinc-400 mb-4 md:mb-0">Home</Link>

        <nav className="flex flex-wrap items-center text-base justify-center md:ml-auto">

        {genres.map(genre => {
          return(
            <Link 
              key={genre.slug}
              href={"/"+ genre.title}              
              className="mr-5 hover:text-orange-300">{genre.title}</Link>);
          }) 
        }
          
        </nav>
      </div>
    </header>
  );
};
