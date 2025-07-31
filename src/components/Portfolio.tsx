import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  MapPin, 
  Clock, 
  Users,
  Building,
  Home,
  Store,
  Warehouse,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import cameraImage from "@/assets/camera-product.jpg";
import residentialSurveillance from "@/assets/residential-surveillance.jpg";
import commercialSurveillance from "@/assets/commercial-surveillance.jpg";
import warehouseSurveillance from "@/assets/warehouse-surveillance.jpg";
import officeSurveillance from "@/assets/office-surveillance.jpg";
import cottageSurveillance from "@/assets/cottage-surveillance.jpg";
import retailSurveillance from "@/assets/retail-surveillance.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Частный дом в Центральном районе",
      category: "residential",
      description: "Установка системы из 8 IP-камер с ночным видением и мобильным приложением",
       image: residentialSurveillance,
      details: {
        cameras: 8,
        area: "200 м²",
        duration: "1 день",
        features: ["4K качество", "Ночное видение", "Детекция движения", "Мобильное приложение"]
      },
      location: "ул. Мира, Центральный район",
      year: "2024"
    },
    {
      id: 2,
      title: "Торговый центр на ул. Ленина",
      category: "commercial",
      description: "Комплексная система видеонаблюдения для торгового центра площадью 1500 м²",
       image: commercialSurveillance,
      details: {
        cameras: 32,
        area: "1500 м²", 
        duration: "3 дня",
        features: ["32 камеры", "Центральный пульт", "Аналитика", "Архив 6 месяцев"]
      },
      location: "пр. Ленина, Центральный район",
      year: "2024"
    },
    {
      id: 3,
      title: "Складской комплекс в Красноармейском районе",
      category: "industrial",
      description: "Периметральная охрана складского комплекса с датчиками движения",
       image: warehouseSurveillance,
      details: {
        cameras: 16,
        area: "5000 м²",
        duration: "2 дня", 
        features: ["Периметр", "ИК-подсветка", "Датчики", "SMS уведомления"]
      },
      location: "Красноармейский район",
      year: "2023"
    },
    {
      id: 4,
      title: "Офисное здание в Советском районе",
      category: "commercial",
      description: "Многоуровневая система безопасности для офисного центра",
       image: officeSurveillance,
      details: {
        cameras: 24,
        area: "800 м²",
        duration: "2 дня",
        features: ["Контроль доступа", "Лицевая аналитика", "Интеграция с СКУД", "Облачное хранение"]
      },
      location: "ул. Советская, Советский район", 
      year: "2023"
    },
    {
      id: 5,
      title: "Коттеджный поселок в пригороде",
      category: "residential",
      description: "Система видеонаблюдения для охраны коттеджного поселка",
       image: cottageSurveillance,
      details: {
        cameras: 12,
        area: "территория поселка",
        duration: "1 день",
        features: ["Общая территория", "Въездные группы", "Мобильный доступ", "Уведомления"]
      },
      location: "пригород Волгограда",
      year: "2023"
    },
    {
      id: 6,
      title: "Сеть магазинов продуктов",
      category: "retail",
      description: "Стандартизированная система для сети из 5 магазинов",
      image: retailSurveillance,
      details: {
        cameras: 40,
        area: "5 объектов",
        duration: "5 дней",
        features: ["Кассовые зоны", "Торговые залы", "Единый центр", "POS интеграция"]
      },
      location: "различные районы города",
      year: "2024"
    }
  ];

  const categories = [
    { id: "all", name: "Все проекты", icon: Building },
    { id: "residential", name: "Жилые объекты", icon: Home },
    { id: "commercial", name: "Коммерческие", icon: Building },
    { id: "retail", name: "Торговля", icon: Store },
    { id: "industrial", name: "Промышленные", icon: Warehouse }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "residential": return Home;
      case "commercial": return Building;
      case "retail": return Store;
      case "industrial": return Warehouse;
      default: return Building;
    }
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case "residential": return "Жилой объект";
      case "commercial": return "Коммерческий объект";
      case "retail": return "Торговый объект";
      case "industrial": return "Промышленный объект";
      default: return "Объект";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наши реализованные проекты
            <span className="text-primary block">в Волгограде</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            За 7 лет работы мы успешно установили системы видеонаблюдения 
            на более чем 500 объектах различного назначения
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            
            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:border-primary/30">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <CategoryIcon className="h-3 w-3" />
                      <span className="text-xs">{getCategoryName(project.category)}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/90">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Camera className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{project.details.cameras} камер</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{project.details.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Монтаж: {project.details.duration}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {project.details.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {[
            { number: "500+", label: "Реализованных проектов", sublabel: "за 7 лет работы" },
            { number: "2000+", label: "Установленных камер", sublabel: "по всему Волгограду" },
            { number: "95%", label: "Клиентов рекомендуют", sublabel: "нас своим знакомым" },
            { number: "24/7", label: "Техническая поддержка", sublabel: "без выходных" }
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary p-6 md:p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Хотите увидеть больше примеров наших работ?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Мы с радостью покажем вам объекты, где уже установлены наши системы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("contact-form");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Camera className="h-5 w-5" />
                Заказать экскурсию по объектам
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-300"
                asChild
              >
                 <a href="tel:+79295728881">
                   Позвонить: +7 (929) 572-88-81
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;