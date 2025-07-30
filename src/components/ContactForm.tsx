import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { sendToTelegram } from "@/lib/telegram";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Shield,
  CheckCircle
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    objectType: "",
    message: "",
    agreement: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Отправляем данные в Telegram
      const success = await sendToTelegram({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        objectType: formData.objectType,
        message: formData.message
      });

      if (success) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в течение 15 минут",
        });

        // Очистка формы
        setFormData({
          name: "",
          phone: "",
          email: "",
          objectType: "",
          message: "",
          agreement: false
        });
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позвонить нам напрямую",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Бесплатный выезд инженера",
    "Расчет сметы за 24 часа", 
    "Гарантия лучшей цены",
    "Рассрочка до 12 месяцев"
  ];

  return (
    <section id="contact-form" className="py-8 sm:py-12 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Form */}
          <Card className="p-4 sm:p-6 md:p-8 shadow-elegant order-2 lg:order-1">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                Получите бесплатную консультацию
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Оставьте заявку и наш инженер свяжется с вами в течение 15 минут
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">Ваше имя *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Введите ваше имя"
                  className="text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm sm:text-base">Телефон *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (___) ___-__-__"
                  className="text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="objectType" className="text-sm sm:text-base">Тип объекта</Label>
                <select
                  id="objectType"
                  name="objectType"
                  value={formData.objectType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:py-3 border border-input rounded-md bg-background text-foreground text-sm sm:text-base min-h-[40px] sm:min-h-[44px]"
                >
                  <option value="">Выберите тип объекта</option>
                  <option value="house">Частный дом</option>
                  <option value="apartment">Квартира</option>
                  <option value="office">Офис</option>
                  <option value="warehouse">Склад</option>
                  <option value="shop">Магазин</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">Дополнительная информация</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Расскажите о ваших потребностях, количестве камер, особенностях объекта..."
                  rows={3}
                  className="text-sm sm:text-base resize-none"
                />
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <Checkbox
                  id="agreement"
                  checked={formData.agreement}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreement: checked as boolean }))
                  }
                  className="mt-0.5 flex-shrink-0"
                />
                <Label htmlFor="agreement" className="text-xs sm:text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Согласен на обработку персональных данных в соответствии с 
                  <a href="#" className="text-primary hover:underline ml-1">
                    политикой конфиденциальности
                  </a>
                </Label>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full text-sm sm:text-base py-3 sm:py-4 min-h-[48px] sm:min-h-[52px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Отправляем...</>
                ) : (
                  <>
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Вызвать инженера бесплатно
                  </>
                )}
              </Button>
            </form>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-2 text-muted-foreground text-xs sm:text-sm">
                <Shield className="h-4 w-4 flex-shrink-0" />
                <span>Ваши данные защищены и не передаются третьим лицам</span>
              </div>
            </div>
          </Card>

          {/* Info and Benefits */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Contact Info */}
            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Контактная информация</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground text-sm sm:text-base">+7 (8442) 555-000</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Звонок бесплатный</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground text-sm sm:text-base break-all">info@videonablydenie34.ru</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Ответим в течение часа</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground text-sm sm:text-base">г. Волгоград</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Работаем по всему городу и области</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground text-sm sm:text-base">Пн-Пт: 8:00-20:00</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Сб-Вс: 9:00-18:00</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <Card className="p-4 sm:p-6 bg-gradient-primary text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Что вы получаете:</h3>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Call */}
            <Card className="p-4 sm:p-6 text-center bg-accent/5 border-accent/30">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">Нужна срочная консультация?</h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">Позвоните прямо сейчас!</p>
              <Button variant="cta" size="lg" className="w-full text-sm sm:text-base py-3 sm:py-4" asChild>
                <a href="tel:+78442555000">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  +7 (8442) 555-000
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;