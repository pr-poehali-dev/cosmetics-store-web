import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cosmetic-gold to-cosmetic-rose rounded-full"></div>
              <span className="font-cormorant text-2xl font-medium text-stone-800">
                Belle
              </span>
            </div>
            <p className="text-stone-600 mb-6 max-w-md">
              Ваш путь к естественной красоте начинается здесь. Откройте для
              себя мир premium косметики.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-cosmetic-gold text-white rounded-full hover:bg-opacity-80 transition-colors duration-300"
              >
                <Icon name="Instagram" size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-cosmetic-gold text-white rounded-full hover:bg-opacity-80 transition-colors duration-300"
              >
                <Icon name="Facebook" size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-cosmetic-gold text-white rounded-full hover:bg-opacity-80 transition-colors duration-300"
              >
                <Icon name="Youtube" size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-stone-800 mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200"
                >
                  Бренды
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200"
                >
                  Акции
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-medium text-stone-800 mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200"
                >
                  Помощь
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200"
                >
                  Возврат
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-cosmetic-gold transition-colors duration-200"
                >
                  Связаться
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-600 text-sm">
            © 2024 Belle. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-stone-600 hover:text-cosmetic-gold text-sm transition-colors duration-200"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-stone-600 hover:text-cosmetic-gold text-sm transition-colors duration-200"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
