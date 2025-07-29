import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Camera, 
  Monitor, 
  Smartphone, 
  Shield, 
  Settings, 
  HeadphonesIcon,
  Home,
  Building,
  Store,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Видеонаблюдение для дома",
      description: "Защитите свой дом и семью с помощью современных IP-камер высокого разрешения",
      features: ["4-32 камеры", "Ночная съемка", "Мобильное приложение", "Облачное хранение"],
      price: "от 25 000 ₽",
      popular: false
    },
    {
      icon: Building,
      title: "Видеонаблюдение для бизнеса",
      description: "Комплексные решения для офисов, складов и производственных помещений",
      features: ["До 128 камер", "Аналитика поведения", "Контроль доступа", "Архив до 1 года"],
      price: "от 80 000 ₽",
      popular: true
    },
    {
      icon: Store,
      title: "Видеонаблюдение для магазинов",
      description: "Предотвращение краж и контроль персонала в торговых точках",
      features: ["Кассовая зона", "Торговый зал", "Склад", "POS интеграция"],
      price: "от 45 000 ₽",
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Monitor,
      title: "Настройка и монтаж",
      description: "Профессиональная установка с настройкой всех компонентов системы"
    },
    {
      icon: Smartphone,
      title: "Мобильное приложение",
      description: "Просмотр камер в режиме реального времени с любого устройства"
    },
    {
      icon: Shield,
      title: "Сервисное обслуживание",
      description: "Техническая поддержка и профилактическое обслуживание 24/7"
    },
    {
      icon: Settings,
      title: "Модернизация систем",
      description: "Обновление и расширение существующих систем видеонаблюдения"
    }
  ];

  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Услуги по установке
            <span className="text-primary block">видеонаблюдения в Волгограде</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Предлагаем полный спектр услуг от проектирования до сервисного обслуживания 
            систем видеонаблюдения для частных лиц и организаций
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative p-6 hover:shadow-card transition-all duration-300 border-2 ${
                service.popular 
                  ? 'border-primary shadow-glow bg-primary/5' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярное
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  service.popular 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center pt-4 border-t border-border">
                <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                <Button 
                  variant={service.popular ? "hero" : "premium"}
                  className="w-full"
                  onClick={scrollToForm}
                >
                  Получить расчет
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-card transition-all duration-300 hover:border-primary/30"
            >
              <div className="inline-flex p-3 bg-primary/10 text-primary rounded-full mb-4">
                <service.icon className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Не знаете, какая система подойдет именно вам?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Наш инженер приедет на бесплатную консультацию и составит техническое задание
            </p>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              onClick={scrollToForm}
            >
              <HeadphonesIcon className="h-5 w-5" />
              Вызвать инженера бесплатно
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;