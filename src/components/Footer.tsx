import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Видеонаблюдение для дома",
    "Видеонаблюдение для бизнеса", 
    "Видеонаблюдение для магазинов",
    "Монтаж и настройка",
    "Сервисное обслуживание",
    "Модернизация систем"
  ];

  const areas = [
    "Центральный район",
    "Советский район",
    "Ворошиловский район", 
    "Краснооктябрьский район",
    "Кировский район",
    "Красноармейский район",
    "Тракторозаводский район",
    "Дзержинский район"
  ];

  return (
    <footer id="contacts" className="bg-gradient-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">ВидеоНаблюдение34</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Профессиональная установка систем видеонаблюдения в Волгограде и области. 
              Гарантия качества, быстрый монтаж, сервисное обслуживание.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                 <a href="tel:+79295728881" className="hover:text-accent transition-colors">
                   +7 (929) 572-88-81
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@videonablydenie34.ru" className="hover:text-accent transition-colors">
                  info@videonablydenie34.ru
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>г. Волгоград, работаем по всему городу</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Наши услуги</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Районы обслуживания</h3>
            <ul className="space-y-2">
              {areas.map((area, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#advantages" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Наши работы
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#contact-form" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Контакты
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <h4 className="font-semibold text-accent mb-2">Срочный вызов!</h4>
              <p className="text-sm text-gray-300 mb-3">Аварийная служба 24/7</p>
               <a 
                 href="tel:+79295728881"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-semibold"
              >
                <Phone className="h-4 w-4 mr-2" />
                Вызвать сейчас
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} ВидеоНаблюдение34. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/user-agreement" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>

          {/* SEO Text */}
          <div className="mt-8 text-xs text-gray-500 leading-relaxed">
            <p>
              <strong>Установка видеонаблюдения в Волгограде</strong> - наша специализация уже более 7 лет. 
              Мы предлагаем профессиональный монтаж систем безопасности для частных домов, квартир, офисов, 
              складов и торговых точек. Наши инженеры выполняют установку камер видеонаблюдения с гарантией 
              качества во всех районах Волгограда: Центральном, Советском, Ворошиловском, Краснооктябрьском, 
              Кировском, Красноармейском, Тракторозаводском и Дзержинском. Звоните для бесплатной консультации!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;