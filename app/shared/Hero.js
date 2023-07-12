export default function Hero() {

  return (
    <section className="text-zinc-400 bg-zinc-400 body-font">
      <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center">
        <div className="flex flex-col mb-16 items-center text-center md:items-start md:text-left md:mb-0 md:pr-16 md: w-1/2
        lg:pr-24 lg:flex-grow">
          <h1 className="title-font text-zinc-50 text-3xl">
            Fight Club
          </h1>

          <p className="mb-8 leading-relaxed">
            The first rule of Fight Club is: You do not talk about Fight Club. The second rule of Fight Club is: You do not talk about Fight Club!
          </p>
        </div>

        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img className="object-cover object-center rounded" alt="hero" src="https://i.etsystatic.com/18242346/r/il/c9908e/2412674268/il_fullxfull.2412674268_1sgm.jpg" />
        </div>
      </div>
    </section>
  );
};
