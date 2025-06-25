import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Сыворотка с витамином С",
    price: "3 200 ₽",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    badge: "Хит продаж",
    watercolor: "watercolor-pink",
  },
  {
    id: 2,
    name: "Увлажняющий крем",
    price: "2 800 ₽",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    badge: "Новинка",
    watercolor: "watercolor-gold",
  },
  {
    id: 3,
    name: "Очищающая пенка",
    price: "1 900 ₽",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    watercolor: "watercolor-bg",
  },
  {
    id: 4,
    name: "Солнцезащитный крем",
    price: "2 500 ₽",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
    watercolor: "watercolor-pink",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-medium text-stone-800 mb-4">
            Избранные продукты
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Тщательно отобранная коллекция наших самых популярных средств для
            ухода
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div
                className={`relative aspect-square rounded-2xl overflow-hidden mb-4 ${product.watercolor} p-6`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl zen-shadow"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-cosmetic-gold text-white text-xs px-3 py-1 rounded-full font-medium">
                    {product.badge}
                  </span>
                )}
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cosmetic-gold hover:text-white">
                  <Icon name="ShoppingCart" size={16} />
                </button>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="font-medium text-stone-800 mb-2 group-hover:text-cosmetic-gold transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-cosmetic-gold font-cormorant text-xl font-medium">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border border-cosmetic-gold text-cosmetic-gold hover:bg-cosmetic-gold hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
            Посмотреть все продукты
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
