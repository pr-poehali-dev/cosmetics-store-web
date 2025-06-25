import Icon from "@/components/ui/icon";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cosmetic-blush via-cosmetic-pearl to-cosmetic-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cosmetic-gold text-white rounded-full">
              <Icon name="Mail" size={24} />
            </div>
          </div>

          {/* Content */}
          <h2 className="font-cormorant text-4xl md:text-5xl font-medium text-stone-800 mb-4">
            Будьте в курсе новинок
          </h2>
          <p className="text-stone-600 mb-8 max-w-lg mx-auto">
            Подпишитесь на нашу рассылку и получайте эксклюзивные предложения,
            советы по уходу и информацию о новых продуктах
          </p>

          {/* Newsletter Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Ваш email адрес"
              className="flex-1 px-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-cosmetic-gold focus:border-transparent bg-white/80 backdrop-blur-sm"
            />
            <button className="bg-cosmetic-gold hover:bg-opacity-90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Подписаться
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-stone-500">
            Мы уважаем вашу конфиденциальность. Отписаться можно в любое время.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-8">
            <a
              href="#"
              className="p-3 bg-white/50 hover:bg-white rounded-full transition-colors duration-300"
            >
              <Icon name="Instagram" size={20} className="text-stone-600" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/50 hover:bg-white rounded-full transition-colors duration-300"
            >
              <Icon name="Facebook" size={20} className="text-stone-600" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/50 hover:bg-white rounded-full transition-colors duration-300"
            >
              <Icon name="Youtube" size={20} className="text-stone-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
