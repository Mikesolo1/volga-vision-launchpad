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
    <section id="contact-form" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <Card className="p-6 md:p-8 shadow-elegant">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Получите бесплатную консультацию
              </h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и наш инженер свяжется с вами в течение 15 минут
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="objectType">Тип объекта</Label>
                <select
                  id="objectType"
                  name="objectType"
                  value={formData.objectType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
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
                <Label htmlFor="message">Дополнительная информация</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Расскажите о ваших потребностях, количестве камер, особенностях объекта..."
                  rows={4}
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreement"
                  checked={formData.agreement}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreement: checked as boolean }))
                  }
                />
                <Label htmlFor="agreement" className="text-sm text-muted-foreground leading-relaxed">
                  Согласен на обработку персональных данных в соответствии с 
                  <a href="#" className="text-primary hover:underline ml-1">
                    политикой конфиденциальности
                  </a>
                </Label>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Отправляем...</>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Получить консультацию бесплатно
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Shield className="h-4 w-4" />
                <span>Ваши данные защищены и не передаются третьим лицам</span>
              </div>
            </div>
          </Card>

          {/* Info and Benefits */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">+7 (8442) 555-000</div>
                    <div className="text-sm text-muted-foreground">Звонок бесплатный</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">info@videonablydenie34.ru</div>
                    <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">г. Волгоград</div>
                    <div className="text-sm text-muted-foreground">Работаем по всему городу и области</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Пн-Пт: 8:00-20:00</div>
                    <div className="text-sm text-muted-foreground">Сб-Вс: 9:00-18:00</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <Card className="p-6 bg-gradient-primary text-white">
              <h3 className="text-xl font-bold mb-6">Что вы получаете:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Call */}
            <Card className="p-6 text-center bg-accent/5 border-accent/30">
              <h3 className="text-lg font-bold text-foreground mb-2">Нужна срочная консультация?</h3>
              <p className="text-muted-foreground mb-4">Позвоните прямо сейчас!</p>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <a href="tel:+78442555000">
                  <Phone className="h-5 w-5" />
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