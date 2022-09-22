function Hero() {
  return (
    <div className="bg-black px-6 2xl:pl-[165px]">
      <div className="bg-hero min-h-screen bg-cover bg-center bg-no-repeat lg:bg-auto 2xl:bg-right">
        <div className="flex h-screen flex-col items-center justify-center space-y-6 bg-black/70 text-center md:space-y-10 2xl:items-start 2xl:text-start">
          <span className="text-overLine uppercase text-white/50">
            new product
          </span>
          <h1 className="md:w-100 w-80 uppercase text-white">
            xx99 mark ii headphones
          </h1>
          <p className="md:w-84 w-80 font-medium text-white/75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            className="bg-primary-200 text-subTitle leading-mobile-subTitle tracking-mobile-subTitle h-12 w-40 font-bold uppercase text-white hover:bg-primary-100"
            type="button"
          >
            see product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
