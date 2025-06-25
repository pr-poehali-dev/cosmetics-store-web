const brands = [
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=100&fit=crop",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=200&h=100&fit=crop",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&h=100&fit=crop",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=100&fit=crop",
  "https://images.unsplash.com/photo-1556228852-80de59e4e024?w=200&h=100&fit=crop",
];

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-cosmetic-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-3xl md:text-4xl font-medium text-stone-800 mb-4">
            Наши партнёры
          </h2>
          <p className="text-stone-600">
            Работаем с ведущими брендами красоты и ухода
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl hover:scale-105 transition-transform duration-300 zen-shadow"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-12 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
