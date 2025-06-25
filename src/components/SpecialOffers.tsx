import Icon from "@/components/ui/icon";

const SpecialOffers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-medium text-stone-800 mb-6">
              Специальные
              <span className="block text-cosmetic-gold">предложения</span>
            </h2>

            <div className="space-y-6">
              {/* Offer 1 */}
              <div className="flex items-start space-x-4 p-6 bg-cosmetic-blush rounded-2xl">
                <div className="bg-cosmetic-gold text-white p-2 rounded-full">
                  <Icon name="Gift" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-stone-800 mb-2">
                    Скидка 20% на первый заказ
                  </h3>
                  <p className="text-stone-600 text-sm">
                    Получите скидку при регистрации в нашем магазине
                  </p>
                </div>
              </div>

              {/* Offer 2 */}
              <div className="flex items-start space-x-4 p-6 bg-cosmetic-pearl rounded-2xl">
                <div className="bg-cosmetic-gold text-white p-2 rounded-full">
                  <Icon name="Truck" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-stone-800 mb-2">
                    Бесплатная доставка
                  </h3>
                  <p className="text-stone-600 text-sm">
                    При заказе от 3000 рублей доставка бесплатно
                  </p>
                </div>
              </div>

              {/* Offer 3 */}
              <div className="flex items-start space-x-4 p-6 bg-cosmetic-cream rounded-2xl">
                <div className="bg-cosmetic-gold text-white p-2 rounded-full">
                  <Icon name="RefreshCw" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-stone-800 mb-2">
                    Гарантия возврата
                  </h3>
                  <p className="text-stone-600 text-sm">
                    30 дней на возврат товара без лишних вопросов
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-cosmetic-gold hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
              Узнать подробнее
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="watercolor-bg p-8 rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop"
                alt="Special Offers"
                className="w-full h-96 object-cover rounded-2xl zen-shadow"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-cosmetic-gold text-white p-4 rounded-full zen-shadow">
              <Icon name="Sparkles" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
