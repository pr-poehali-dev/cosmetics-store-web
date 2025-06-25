import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Проверяем, скроллит ли пользователь вверх
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setScrollCount((prev) => prev + 1);
      } else if (currentScrollY > lastScrollY) {
        // Сбрасываем счётчик при скролле вниз
        setScrollCount(0);
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);

      // Показываем кнопку только после 3-го скролла вверх
      if (scrollCount >= 3 && currentScrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollCount]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsVisible(false);
    setScrollCount(0);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 bg-pantone-mocha text-white p-4 rounded-full shadow-lg hover:bg-pantone-deep transition-all duration-300 hover:scale-110 scroll-to-top ${
        isVisible ? "show" : ""
      }`}
      aria-label="Прокрутить наверх"
    >
      <Icon name="ArrowUp" size={24} />
      <span className="absolute -top-8 right-0 bg-pantone-deep text-white text-xs px-2 py-1 rounded font-mono whitespace-nowrap">
        скролл #{scrollCount}
      </span>
    </button>
  );
};

export default ScrollToTop;
