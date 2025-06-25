import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "Сыворотка витамин С", price: 3200, quantity: 1 },
    { id: 2, name: "Увлажняющий крем", price: 2800, quantity: 2 },
    { id: 3, name: "Очищающая пенка", price: 1900, quantity: 1 },
  ]);

  const [secretDiscount, setSecretDiscount] = useState(0);
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  useEffect(() => {
    // Проверяем секретную скидку 11% если сумма кратна 7
    if (total % 7 === 0 && total > 0) {
      const discount = Math.round(total * 0.11);
      setSecretDiscount(discount);
      setShowSecretMessage(true);

      setTimeout(() => setShowSecretMessage(false), 5000);
    } else {
      setSecretDiscount(0);
    }
  }, [total]);

  const updateQuantity = (id: number, change: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const finalTotal = total - secretDiscount;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="handwritten text-2xl text-pantone-deep mb-4">
        Корзина покупок
      </h3>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-pantone-cream rounded-lg"
          >
            <div className="flex-1">
              <h4 className="font-mono text-sm text-pantone-deep">
                {item.name}
              </h4>
              <p className="font-mono text-xs text-pantone-warm">
                {item.price}₽ × {item.quantity}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="w-8 h-8 bg-pantone-mocha text-white rounded-full flex items-center justify-center hover:bg-pantone-deep transition-colors"
              >
                <Icon name="Minus" size={14} />
              </button>

              <span className="font-mono text-pantone-deep font-bold w-8 text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="w-8 h-8 bg-pantone-mocha text-white rounded-full flex items-center justify-center hover:bg-pantone-deep transition-colors"
              >
                <Icon name="Plus" size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Секретная скидка */}
      {secretDiscount > 0 && (
        <div
          className={`bg-yellow-100 border-l-4 border-yellow-500 p-3 mb-4 rounded transition-all duration-500 ${
            showSecretMessage ? "animate-pulse" : ""
          }`}
        >
          <div className="flex items-center">
            <Icon name="Sparkles" size={20} className="text-yellow-600 mr-2" />
            <div>
              <p className="font-mono text-yellow-800 font-bold text-sm">
                Секретная скидка 11%!
              </p>
              <p className="font-mono text-yellow-700 text-xs">
                Сумма кратна 7 → -{secretDiscount}₽
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Итоговая сумма */}
      <div className="border-t border-pantone-cream pt-4 space-y-2">
        <div className="flex justify-between font-mono text-pantone-warm text-sm">
          <span>Промежуточная сумма:</span>
          <span>{total}₽</span>
        </div>

        {secretDiscount > 0 && (
          <div className="flex justify-between font-mono text-yellow-600 text-sm">
            <span>Секретная скидка:</span>
            <span>-{secretDiscount}₽</span>
          </div>
        )}

        <div className="flex justify-between font-mono text-pantone-deep font-bold text-lg">
          <span>Итого:</span>
          <span>{finalTotal}₽</span>
        </div>
      </div>

      <button className="w-full mt-4 coffee-font bg-pantone-mocha text-white py-3 rounded-full hover:bg-pantone-deep transition-colors">
        ОФОРМИТЬ ЗАКАЗ
      </button>
    </div>
  );
};

export default Cart;
