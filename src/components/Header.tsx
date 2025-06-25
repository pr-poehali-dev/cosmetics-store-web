import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cosmetic-gold to-cosmetic-rose rounded-full"></div>
            <span className="font-cormorant text-2xl font-medium text-stone-800">
              Belle
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200 text-sm font-medium"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200 text-sm font-medium"
            >
              Бренды
            </a>
            <a
              href="#"
              className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200 text-sm font-medium"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200 text-sm font-medium"
            >
              О нас
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-stone-50 rounded-full transition-colors duration-200">
              <Icon name="Search" size={20} className="text-stone-600" />
            </button>
            <button className="p-2 hover:bg-stone-50 rounded-full transition-colors duration-200">
              <Icon name="User" size={20} className="text-stone-600" />
            </button>
            <button className="relative p-2 hover:bg-stone-50 rounded-full transition-colors duration-200">
              <Icon name="ShoppingBag" size={20} className="text-stone-600" />
              <span className="absolute -top-1 -right-1 bg-cosmetic-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
