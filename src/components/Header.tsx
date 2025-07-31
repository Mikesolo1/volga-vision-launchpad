import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Shield } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/40 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              ВидеоНаблюдение34
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Преимущества
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Наши работы
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-semibold text-primary">+7 (929) 572-88-81</div>
              <div className="text-xs text-muted-foreground">Звонок бесплатный</div>
            </div>
            <Button 
              variant="cta" 
              size="default"
              onClick={() => scrollToSection("contact-form")}
            >
              <Phone className="h-4 w-4" />
              Заказать звонок
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("advantages")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Преимущества
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Наши работы
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
              <div className="pt-4 border-t border-border/40">
                <div className="text-lg font-semibold text-primary mb-2">+7 (929) 572-88-81</div>
                <Button 
                  variant="cta" 
                  size="default" 
                  className="w-full"
                  onClick={() => scrollToSection("contact-form")}
                >
                  <Phone className="h-4 w-4" />
                  Заказать звонок
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;