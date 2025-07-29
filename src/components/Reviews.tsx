import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, User, MapPin, Calendar } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Александр Петров",
      location: "Центральный район",
      project: "Частный дом",
      rating: 5,
      date: "Январь 2024",
      text: "Отличная работа! Ребята приехали точно в срок, установили 6 камер за один день. Качество изображения превосходное, особенно ночью. Мобильное приложение работает без сбоев. Очень доволен результатом!",
      verified: true
    },
    {
      id: 2,
      name: "Марина Сидорова",
      location: "Советский район", 
      project: "Офисное здание",
      rating: 5,
      date: "Декабрь 2023",
      text: "Профессиональный подход на всех этапах работы. От консультации до настройки - все четко и качественно. Система работает безупречно уже полгода. Рекомендую всем!",
      verified: true
    },
    {
      id: 3,
      name: "Владимир Кузнецов",
      location: "Красноармейский район",
      project: "Склад",
      rating: 5,
      date: "Ноябрь 2023", 
      text: "Нужно было срочно установить видеонаблюдение на складе. Приехали в тот же день, сделали расчет, на следующий день установили 12 камер. Работают круглосуточно, качество отличное!",
      verified: true
    },
    {
      id: 4,
      name: "Елена Михайлова",
      location: "Ворошиловский район",
      project: "Магазин",
      rating: 5,
      date: "Октябрь 2023",
      text: "Установили систему в магазине. Очень понравился индивидуальный подход - учли все наши пожелания. Цены честные, без скрытых доплат. Гарантийное обслуживание на высоте!",
      verified: true
    },
    {
      id: 5,
      name: "Дмитрий Орлов",
      location: "Тракторозаводский район",
      project: "Коттедж",
      rating: 5,
      date: "Сентябрь 2023",
      text: "Искал надежную компанию для установки видеонаблюдения в коттедже. После консультации стало понятно - это профессионалы! Работу выполнили на 5+, все объяснили и показали.",
      verified: true
    },
    {
      id: 6,
      name: "Анна Волкова",
      location: "Кировский район",
      project: "Квартира",
      rating: 5,
      date: "Август 2023",
      text: "Спасибо за качественную работу! Установили камеры в квартире быстро и аккуратно. Никакой грязи и пыли. Система работает стабильно, техподдержка всегда на связи!",
      verified: true
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Средняя оценка", sublabel: "на основе 200+ отзывов" },
    { number: "98%", label: "Рекомендуют нас", sublabel: "друзьям и знакомым" },
    { number: "24ч", label: "Среднее время ответа", sublabel: "на обращения клиентов" },
    { number: "100%", label: "Гарантия качества", sublabel: "на все выполненные работы" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Отзывы наших клиентов
            <span className="text-primary block">о видеонаблюдении в Волгограде</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Более 500 довольных клиентов уже оценили качество наших услуг 
            по установке систем безопасности
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </Card>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="p-6 hover:shadow-card transition-all duration-300 hover:border-primary/30 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-8 w-8 text-primary" />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>
                {review.verified && (
                  <Badge variant="secondary" className="text-xs">
                    Проверено
                  </Badge>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-muted-foreground">({review.rating}/5)</span>
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-4 leading-relaxed">{review.text}</p>

              {/* Footer */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{review.date}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {review.project}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Reviews Section */}
        <div className="bg-white rounded-2xl p-8 shadow-elegant mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Видеоотзывы наших клиентов
            </h3>
            <p className="text-lg text-muted-foreground">
              Посмотрите, что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="relative overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                    <div className="font-semibold">Видеоотзыв #{index}</div>
                    <div className="text-sm opacity-80">Клиент рассказывает о работе</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Присоединяйтесь к довольным клиентам!
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Получите бесплатную консультацию и узнайте, как мы можем помочь вам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById("contact-form");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                Получить консультацию бесплатно
              </button>
              <a 
                href="tel:+78442555000"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white bg-transparent text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                Позвонить: +7 (8442) 555-000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;