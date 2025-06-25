
import { useState } from "react";
import Icon from "@/components/ui/icon";

const saleProducts = [
  {
    id: 1,
    name: "Набор для очищения",
    originalPrice: "4.900₽",
    salePrice: "3.430₽",
    discount: "-30%",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Антивозрастной комплекс",
    originalPrice: "8.500₽", 
    salePrice: "5.950₽",
    discount: "-30%",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
  },
];

const discountProducts = [
  {
    id: 3,
    name: "Крем с истёкшим сроком",
    originalPrice: "3.200₽",
    salePrice: "960₽", 
    discount: "-70%",
    reason: "срок до 01.2025",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Сыворотка (повреждена упаковка)",
    originalPrice: "5.600₽",
    salePrice: "1.680₽",
    discount: "-70%", 
    reason: "мятая коробка",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop",
  },
];

const SpecialOffers = () => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  const handleDeleteProduct = (productId: number) => {
    setProductToDelete(productId);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    console.log(`Товар ${productToDelete} был удалён из корзины 😢`);
    setShowDeleteDialog(false);
    setProductToDelete(null);
  };

  return (
    <section className="py-16 3xl:golden-p-2xl">
      <div className="container mx-auto px-4 3xl:golden-p-md">
        
        {/* Секция Акции с разрешённым градиентом */}
        <div className="watercolor-sale rounded-3xl p-8 3xl:golden-p-lg mb-12">
          <div className="text-center mb-8">
            <h2 className="handwritten text-5xl text-pantone-deep mb-2">
              Акции месяца
            </h2>
            <p className="font-mono text-pantone-warm text-sm">
              скидки.активны = true; // до 31 декабря
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {saleProducts.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform ${
                  index === 0 ? 'lg:col-span-3' : 'lg:col-span-4'
                }`}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-xl film-photo mb-3"
                  />
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-mono font-bold">
                    {product.discount}
                  </span>
                </div>
                
                <h3 className="font-mono text-pantone-deep font-medium mb-2 text-sm">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-pantone-warm line-through text-sm font-mono">
                      {product.originalPrice}
                    </span>
                    <span className="text-pantone-mocha font-bold font-mono text-lg ml-2">
                      {product.salePrice}
                    </span>
                  </div>
                  
                  <button className="coffee-font bg-red-500 text-white px-3 py-1 rounded-full text-xs hover:bg-red-600 transition-colors">
                    СРОЧНО!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Секция Уценка с разрешённым градиентом */}
        <div className="watercolor-discount rounded-3xl p-8 3xl:golden-p-lg">
          <div className="text-center mb-8">
            <h2 className="handwritten text-5xl text-pantone-deep mb-2">
              Уценённые товары
            </h2>
            <p className="font-mono text-pantone-warm text-sm">
              товары.с.дефектами.filter(цена => цена * 0.3)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {discountProducts.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform relative ${
                  index === 0 ? 'lg:col-span-4' : 'lg:col-span-3'
                }`}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-xl film-photo mb-3 opacity-90"
                  />
                  <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-mono font-bold">
                    {product.discount}
                  </span>
                  
                  <button 
                    onClick={() => handleDeleteProduct(product.id)}
                    className="absolute top-2 left-2 bg-red-500/80 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Icon name="Trash2" size={12} />
                  </button>
                </div>
                
                <h3 className="font-mono text-pantone-deep font-medium mb-1 text-sm">
                  {product.name}
                </h3>
                
                <p className="text-xs font-mono text-red-600 mb-2">
                  причина: {product.reason}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-pantone-warm line-through text-sm font-mono">
                      {product.originalPrice}
                    </span>
                    <span className="text-pantone-mocha font-bold font-mono text-lg ml-2">
                      {product.salePrice}
                    </span>
                  </div>
                  
                  <button className="coffee-font bg-orange-500 text-white px-3 py-1 rounded-full text-xs hover:bg-orange-600 transition-colors">
                    ПОСЛЕДНИЙ!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Диалог удаления товара */}
        {showDeleteDialog && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md mx-4">
              <div className="text-center mb-4">
                <Icon name="AlertTriangle" size={48} className="text-yellow-500 mx-auto mb-3" />
                <h3 className="handwritten text-2xl text-pantone-deep mb-2">
                  Вы уверены?
                </h3>
                <p className="font-mono text-pantone-warm text-sm">
                  Этот товар плакал, когда его добавляли... 😢
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowDeleteDialog(false)}
                  className="flex-1 border border-pantone-mocha text-pantone-mocha px-4 py-2 rounded-full font-mono hover:bg-pantone-cream transition-colors"
                >
                  оставить.товар()
                </button>
                <button 
                  onClick={confirmDelete}
                  className="flex-1 bg-red-500 text-white px-4 py-2 rounded-full font-mono hover:bg-red-600 transition-colors"
                >
                  удалить.всё.равно()
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialOffers;
