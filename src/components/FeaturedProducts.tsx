import { useState } from "react";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Сыворотка витамин С",
    price: "3.200₽",
    haiku: {
      text: "Капля солнца пляшет..",
      specs: "*Концентрация 20%, pH 3.5*",
      delivery: "Доставка — 2 луны",
    },
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    badge: "хит",
  },
  {
    id: 2,
    name: "Увлажняющий крем",
    price: "2.800₽",
    haiku: {
      text: "Нежность утра льётся..",
      specs: "*Гиалуроновая кислота 2%*",
      delivery: "Срок ожидания — 1 месяц",
    },
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    badge: "новинка",
  },
  {
    id: 3,
    name: "Очищающая пенка",
    price: "1.900₽",
    haiku: {
      text: "Пузырьки танцуют..",
      specs: "*Салициловая кислота 0.5%*",
      delivery: "Время ожидания — 10 дней",
    },
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "SPF крем защитный",
    price: "2.500₽",
    haiku: {
      text: "Щит от злого солнца..",
      specs: "*SPF 50+, оксид цинка 15%*",
      delivery: "Защита придёт через 5 дней",
    },
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Тоник балансирующий",
    price: "2.100₽",
    haiku: {
      text: "Равновесие кожи..",
      specs: "*Ниацинамид 5%, PHA кислоты*",
      delivery: "Гармония — через неделю",
    },
    image:
      "https://images.unsplash.com/photo-1617897473280-ad12af129dff?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Масло для лица",
    price: "4.200₽",
    haiku: {
      text: "Золотые капли..",
      specs: "*Арган, жожоба, витамин Е*",
      delivery: "Эликсир прибудет за 4 дня",
    },
    image:
      "https://images.unsplash.com/photo-1598662957477-2eb3737308c6?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Маска глиняная",
    price: "1.700₽",
    haiku: {
      text: "Земли древней сила..",
      specs: "*Бентонит, каолин, экстракт чая*",
      delivery: "Из недр — через 6 дней",
    },
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop",
  },
];

const FeaturedProducts = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const addToCart = (productId: number, event: React.MouseEvent) => {
    const button = event.currentTarget as HTMLElement;
    const productCard = button.closest(".product-card");

    if (productCard) {
      // Создаём анимированную копию товара
      const animatedItem = productCard.cloneNode(true) as HTMLElement;
      animatedItem.classList.add(
        "fixed",
        "z-50",
        "pointer-events-none",
        "animate-sine-to-cart",
      );
      animatedItem.style.left = productCard.getBoundingClientRect().left + "px";
      animatedItem.style.top = productCard.getBoundingClientRect().top + "px";
      animatedItem.style.width =
        productCard.getBoundingClientRect().width + "px";
      animatedItem.style.height =
        productCard.getBoundingClientRect().height + "px";

      document.body.appendChild(animatedItem);

      setTimeout(() => {
        document.body.removeChild(animatedItem);
      }, 1200);
    }

    setCartItems([...cartItems, productId]);
  };

  return (
    <section className="py-16 3xl:golden-p-2xl bg-background">
      <div className="container mx-auto px-4 3xl:golden-p-md">
        {/* Заголовок секции */}
        <div className="text-center mb-12 3xl:golden-m-xl">
          <h2 className="handwritten text-5xl md:text-6xl text-pantone-deep mb-4">
            Избранные эссенции
          </h2>
          <p className="font-mono text-pantone-warm max-w-2xl mx-auto text-sm">
            коллекция.отобранных.средств = [];
            <br />
            while(красота.нужна) добавить.в.корзину();
          </p>
        </div>

        {/* 7-колоночная сетка товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 3xl:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-card group cursor-pointer transition-all duration-300 hover:scale-105 ${
                index < 3
                  ? "lg:col-span-2"
                  : index === 3
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
              }`}
            >
              {/* Изображение товара */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-pantone-cream p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl film-photo"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-pantone-mocha text-white text-xs px-2 py-1 rounded-full font-mono">
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={(e) => addToCart(product.id, e)}
                  className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-pantone-mocha hover:text-white"
                >
                  <Icon name="ShoppingCart" size={16} />
                </button>
              </div>

              {/* Хокку-описание */}
              <div className="text-center space-y-2">
                <h3 className="font-mono font-medium text-pantone-deep text-sm group-hover:text-pantone-mocha transition-colors">
                  {product.name}
                </h3>

                <div className="space-y-1 text-xs">
                  <p className="handwritten text-pantone-warm italic">
                    {product.haiku.text}
                  </p>
                  <p className="font-mono text-pantone-deep font-semibold">
                    {product.haiku.specs}
                  </p>
                  <p className="font-mono text-pantone-warm text-xs">
                    {product.haiku.delivery}
                  </p>
                </div>

                <p className="font-mono text-pantone-mocha font-bold text-lg">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка просмотра всех товаров */}
        <div className="text-center mt-12 3xl:golden-m-xl">
          <button className="border border-pantone-mocha text-pantone-mocha hover:bg-pantone-mocha hover:text-white px-8 py-3 3xl:golden-p-md rounded-full font-mono transition-all duration-300 hover:scale-105">
            загрузить.все.товары()
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
