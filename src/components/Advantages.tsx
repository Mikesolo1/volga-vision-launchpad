import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Wrench, 
  CheckCircle,
  Camera,
  Smartphone,
  CloudIcon
} from "lucide-react";
import monitoringImage from "@/assets/monitoring-center.jpg";

const Advantages = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Официальная гарантия 3 года",
      description: "Предоставляем расширенную гарантию на все установленное оборудование и выполненные работы"
    },
    {
      icon: Clock,
      title: "Быстрый монтаж за 1 день",
      description: "Профессиональная бригада установит систему видеонаблюдения в кратчайшие сроки без ущерба качеству"
    },
    {
      icon: Award,
      title: "Сертифицированное оборудование",
      description: "Работаем только с проверенными брендами: Hikvision, Dahua, Uniview и другими лидерами рынка"
    },
    {
      icon: Users,
      title: "Опыт более 7 лет",
      description: "За время работы установили свыше 500 систем видеонаблюдения в Волгограде и области"
    },
    {
      icon: Wrench,
      title: "Сервисное обслуживание 24/7",
      description: "Круглосуточная техническая поддержка и оперативное устранение неисправностей"
    },
    {
      icon: CheckCircle,
      title: "Гарантия лучшей цены",
      description: "Найдете дешевле у конкурентов - снизим цену или вернем разницу"
    }
  ];

  const features = [
    {
      icon: Camera,
      title: "HD/4K качество",
      description: "Кристально четкое изображение днем и ночью"
    },
    {
      icon: Smartphone,
      title: "Мобильное приложение",
      description: "Просмотр в реальном времени с телефона"
    },
    {
      icon: CloudIcon,
      title: "Облачное хранение",
      description: "Надежное хранение записей в облаке"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Почему выбирают именно
            <span className="text-primary block">нашу компанию?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем не просто установку оборудования, а комплексные решения 
            для обеспечения безопасности с полным сервисным сопровождением
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Advantages Grid */}
          <div className="grid gap-4 md:gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-card transition-all duration-300 hover:border-primary/30 bg-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
                    <advantage.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Image and Features */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={monitoringImage} 
                alt="Центр мониторинга видеонаблюдения" 
                className="w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>

            <div className="grid gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-muted/50 rounded-lg">
                  <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{feature.title}</div>
                    <div className="text-sm text-muted-foreground">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary p-6 md:p-8 lg:p-12 rounded-2xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { number: "500+", label: "Установленных объектов", sublabel: "в Волгограде и области" },
              { number: "7", label: "Лет успешной работы", sublabel: "на рынке безопасности" },
              { number: "24/7", label: "Техническая поддержка", sublabel: "без выходных" },
              { number: "3", label: "Года гарантии", sublabel: "на все работы" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm md:text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-xs md:text-sm opacity-80">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Готовы обеспечить безопасность вашего объекта?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Получите бесплатную консультацию и выезд инженера на объект
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+78442555000"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
              >
                Позвонить сейчас: +7 (8442) 555-000
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById("contact-form");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                Оставить заявку онлайн
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;