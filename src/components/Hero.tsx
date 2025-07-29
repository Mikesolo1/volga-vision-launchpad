import { Button } from "@/components/ui/button";
import { Shield, Camera, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Установка видеонаблюдения в Волгограде" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Профессиональная установка
              <span className="text-accent block">видеонаблюдения</span>
              в Волгограде
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Защитите свой дом и бизнес с помощью современных систем безопасности. 
              Гарантия качества, быстрый монтаж, сервисное обслуживание.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base">Гарантия 3 года</span>
              </div>
              <div className="flex items-center space-x-3">
                <Camera className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base">HD качество</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base">500+ объектов</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base">Монтаж за 1 день</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToForm}
                className="flex-1 sm:flex-initial"
              >
                Получить расчет бесплатно
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="flex-1 sm:flex-initial border-white text-white hover:bg-white hover:text-primary"
                onClick={() => {
                  const element = document.getElementById("services");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Наши услуги
              </Button>
            </div>

            {/* Special Offer */}
            <div className="mt-8 p-4 bg-accent/10 border border-accent/30 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                <span className="text-accent font-semibold">Акция до конца месяца!</span>
              </div>
              <p className="text-gray-200">
                Установка от 4 камер - <span className="text-accent font-bold">скидка 20%</span> + 
                бесплатная настройка мобильного приложения
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Установленных систем", icon: Camera },
                { number: "7", label: "Лет на рынке", icon: Shield },
                { number: "24/7", label: "Техподдержка", icon: Clock },
                { number: "100%", label: "Довольных клиентов", icon: Users }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center text-white hover:bg-white/15 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;