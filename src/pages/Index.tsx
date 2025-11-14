import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">TelematicsPro</div>
          <div className="hidden md:flex gap-8">
            {['services', 'benefits', 'technologies', 'faq', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {section === 'services' && 'Услуги'}
                {section === 'benefits' && 'Преимущества'}
                {section === 'technologies' && 'Технологии'}
                {section === 'faq' && 'FAQ'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Интеграция телематики <br />
            <span className="text-primary">с вашей CRM-системой</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Автоматизируем передачу данных между телематическими платформами и учётными системами вашего бизнеса
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            onClick={() => scrollToSection('contacts')}
          >
            Получить консультацию
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Database', title: 'Интеграция с CRM', desc: 'Подключение к 1С, Bitrix24, AmoCRM и другим системам' },
              { icon: 'Workflow', title: 'Автоматизация процессов', desc: 'Настройка автоматической передачи данных телематики' },
              { icon: 'BarChart3', title: 'Аналитика и отчёты', desc: 'Создание дашбордов и аналитических панелей' },
              { icon: 'Shield', title: 'Безопасность данных', desc: 'Шифрование и защита каналов передачи информации' },
              { icon: 'Zap', title: 'API-интеграции', desc: 'Разработка REST API для обмена данными' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Техническая поддержка и консультации' }
            ].map((service, idx) => (
              <Card key={idx} className="p-6 hover:border-primary transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 text-primary">
                  <Icon name={service.icon} size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Преимущества работы с нами</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: 'Gauge', title: 'Быстрая интеграция', desc: 'Подключаем системы за 3-5 дней' },
              { icon: 'Code', title: 'Без доработки кода', desc: 'Работаем через API без изменения вашей инфраструктуры' },
              { icon: 'TrendingUp', title: 'Масштабируемость', desc: 'Решения растут вместе с вашим бизнесом' },
              { icon: 'Lock', title: 'Надёжность', desc: 'SLA 99.9% и резервное копирование данных' }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name={benefit.icon} size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Технологии и платформы</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Wialon', '1C', 'Bitrix24', 'AmoCRM', 'PostgreSQL', 'REST API', 'WebSocket', 'OAuth 2.0'].map((tech, idx) => (
              <Card key={idx} className="p-6 text-center hover:border-secondary transition-all duration-300">
                <div className="text-2xl font-semibold text-secondary">{tech}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: 'Какие CRM-системы вы поддерживаете?', 
                a: 'Мы работаем с 1С, Bitrix24, AmoCRM, Salesforce и другими популярными CRM. Также можем интегрировать кастомные решения через API.' 
              },
              { 
                q: 'Сколько времени занимает интеграция?', 
                a: 'Стандартная интеграция занимает 3-5 рабочих дней. Для сложных проектов срок может увеличиться до 2-3 недель.' 
              },
              { 
                q: 'Нужно ли менять нашу текущую систему?', 
                a: 'Нет, мы работаем через API и не требуем изменений в вашей инфраструктуре. Всё подключается без доработки существующего кода.' 
              },
              { 
                q: 'Какие данные можно передавать?', 
                a: 'GPS-координаты, пробег, время работы, расход топлива, события (стоянки, превышение скорости), показания датчиков и другие телематические данные.' 
              },
              { 
                q: 'Как обеспечивается безопасность данных?', 
                a: 'Используем шифрование SSL/TLS, OAuth 2.0 для авторизации и регулярное резервное копирование. Соответствуем требованиям ФЗ-152.' 
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Связаться с нами</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                placeholder="Ваше имя" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Расскажите о вашем проекте" 
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 TelematicsPro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
