const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cosmetic-pearl via-white to-cosmetic-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cosmetic-blush rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cosmetic-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-cormorant text-6xl md:text-8xl font-light text-stone-800 mb-6 animate-fade-in">
            Естественная
            <span className="block font-medium bg-gradient-to-r from-cosmetic-gold to-cosmetic-rose bg-clip-text text-transparent">
              красота
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Откройте для себя коллекцию premium косметики, созданной с любовью к
            природе и вашей уникальности
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-cosmetic-gold hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 zen-shadow">
              Открыть каталог
            </button>
            <button className="border border-stone-300 hover:border-cosmetic-gold text-stone-700 hover:text-cosmetic-gold px-8 py-4 rounded-full font-medium transition-all duration-300">
              Узнать больше
            </button>
          </div>

          {/* Featured Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-cormorant font-medium text-cosmetic-gold mb-2">
                98%
              </div>
              <div className="text-sm text-stone-600">
                Натуральные компоненты
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cormorant font-medium text-cosmetic-gold mb-2">
                15К+
              </div>
              <div className="text-sm text-stone-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cormorant font-medium text-cosmetic-gold mb-2">
                24/7
              </div>
              <div className="text-sm text-stone-600">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
