import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-pantone-cream">
        <div className="container mx-auto px-4 3xl:golden-p-md py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-pantone-mocha rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">𝓑</span>
              </div>
              <span className="handwritten text-3xl text-pantone-deep">
                Belle Cosmétique
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-pantone-deep hover:text-pantone-mocha transition-colors font-mono text-sm"
              >
                каталог.товаров
              </a>
              <a
                href="#"
                className="text-pantone-deep hover:text-pantone-mocha transition-colors font-mono text-sm"
              >
                известные.бренды
              </a>
              <a
                href="#"
                className="text-pantone-deep hover:text-pantone-mocha transition-colors font-mono text-sm"
              >
                акции.уценка
              </a>
              <a
                href="#"
                className="text-pantone-deep hover:text-pantone-mocha transition-colors font-mono text-sm"
              >
                о.нашей.миссии
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-pantone-cream rounded-full transition-colors">
                <Icon name="Search" size={20} className="text-pantone-deep" />
              </button>
              <button className="p-2 hover:bg-pantone-cream rounded-full transition-colors">
                <Icon name="User" size={20} className="text-pantone-deep" />
              </button>
              <button className="relative p-2 hover:bg-pantone-cream rounded-full transition-colors group">
                <Icon
                  name="ShoppingBag"
                  size={20}
                  className="text-pantone-deep group-hover:animate-bounce"
                />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pantone-mocha text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-mono">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 hover:bg-pantone-cream rounded-full transition-colors"
              >
                <Icon name="Menu" size={20} className="text-pantone-deep" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-pantone-cream md:hidden mobile-menu-slide ${isMobileMenuOpen ? "open" : ""}`}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="handwritten text-2xl text-pantone-deep">
              Навигация
            </h3>
            <button onClick={toggleMobileMenu}>
              <Icon name="X" size={24} className="text-pantone-deep" />
            </button>
          </div>

          <nav className="space-y-4">
            <a
              href="#"
              className="block font-mono text-lg text-pantone-deep hover:text-pantone-mocha transition-colors"
            >
              каталог.товаров
            </a>
            <a
              href="#"
              className="block font-mono text-lg text-pantone-deep hover:text-pantone-mocha transition-colors"
            >
              известные.бренды
            </a>
            <a
              href="#"
              className="block font-mono text-lg text-pantone-deep hover:text-pantone-mocha transition-colors"
            >
              акции.уценка
            </a>
            <a
              href="#"
              className="block font-mono text-lg text-pantone-deep hover:text-pantone-mocha transition-colors"
            >
              о.нашей.миссии
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
