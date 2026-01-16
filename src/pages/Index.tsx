import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  { id: 'cover', title: 'Обложка' },
  { id: 'market', title: 'Рынок России' },
  { id: 'regions', title: 'Регионы' },
  { id: 'about', title: 'О нас' },
  { id: 'services', title: 'Услуги' },
  { id: 'why', title: 'Почему мы' },
  { id: 'problems', title: 'Проблемы и решения' },
  { id: 'cases', title: 'Кейсы' },
  { id: 'packages', title: 'Пакеты' },
  { id: 'workflow', title: 'Этапы работы' },
  { id: 'contact', title: 'Контакты' },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-16 bg-secondary/95 backdrop-blur-sm flex flex-col items-center py-8 gap-3 z-50">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-primary scale-150'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            title={slide.title}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="ml-16 min-h-screen relative">
        {/* Slide 0: Cover */}
        {currentSlide === 0 && (
          <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
            <div className="max-w-5xl text-center">
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-primary/10 rounded-full">
                <Icon name="Rocket" size={24} className="text-primary" />
                <span className="font-medium text-primary">Centre digital & media</span>
              </div>
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent leading-tight">
                Ваш надежный<br />PR-партнер для выхода<br />в Россию
              </h1>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
                Полный цикл услуг медиапродвижения для брендов из дружественных стран
              </p>
            </div>
          </div>
        )}

        {/* Slide 1: Russian Market */}
        {currentSlide === 1 && (
          <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
            <div className="max-w-6xl">
              <h2 className="text-5xl font-bold mb-16 text-center">Российский рынок сегодня</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 bg-white/60 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2">80М+</div>
                      <p className="text-lg text-muted-foreground">активных потребителей готовы покупать ваши товары</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-white/60 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-lg text-muted-foreground">После 2022 года <span className="font-semibold text-foreground">освободились ниши</span> — реальные возможности для новых производителей</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-white/60 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Heart" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-lg text-muted-foreground">Жители России <span className="font-semibold text-foreground">готовы пробовать товары</span> из дружественных стран</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-white/60 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Handshake" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-lg text-muted-foreground">Продукция из СНГ, Азии и Ближнего Востока — <span className="font-semibold text-foreground">"своё, родное"</span></p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 2: Regions */}
        {currentSlide === 2 && (
          <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
            <div className="max-w-6xl">
              <div className="text-center mb-12">
                <div className="inline-block">
                  <div className="text-7xl font-bold text-primary mb-4">85%</div>
                  <p className="text-2xl text-muted-foreground">ваших будущих клиентов живут<br />за пределами Москвы</p>
                </div>
              </div>

              <h2 className="text-4xl font-bold mb-8 text-center">Главный актив бизнеса — регионы страны!</h2>
              
              <Card className="p-8 bg-white/60 backdrop-blur border-0 shadow-xl mb-8">
                <p className="text-xl text-center text-muted-foreground mb-8">
                  У каждого города России – свой культурный код и свой покупатель
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 text-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p><span className="font-semibold">Ижевск</span> — оружейная столица России</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p><span className="font-semibold">Казань</span> — перекресток культур</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p><span className="font-semibold">Екатеринбург</span> — деловая столица Урала</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p><span className="font-semibold">Новосибирск</span> — научный хаб Сибири</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p><span className="font-semibold">Краснодар</span> — курортный центр Юга</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p><span className="font-semibold">Ростов-на-Дону</span> — ворота Кавказа</p>
                  </div>
                </div>
              </Card>

              <p className="text-2xl text-center font-semibold">
                Мы знаем эти города, потому что работаем среди них — <span className="text-primary">более 19 лет!</span>
              </p>
            </div>
          </div>
        )}

        {/* Slide 3: About Us */}
        {currentSlide === 3 && (
          <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
            <div className="max-w-6xl">
              <h2 className="text-5xl font-bold mb-12 text-center">Centre digital & media — ваш PR-мост в Россию</h2>
              <p className="text-2xl text-center text-muted-foreground mb-16">Полный цикл услуг для продвижения бренда в регионах</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Target" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Стратегия и выход</h3>
                  <p className="text-muted-foreground">Анализ ЦА, позиционирование, рекламные кампании</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="FileText" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Контент</h3>
                  <p className="text-muted-foreground">Тексты, фото, видео и SMM под российскую аудиторию</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Megaphone" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">PR и GR</h3>
                  <p className="text-muted-foreground">Публикации в СМИ, работа с блогерами</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Video" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Продакшн</h3>
                  <p className="text-muted-foreground">Видео и аудио: от Reels до имиджевых фильмов</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Медиазакупки</h3>
                  <p className="text-muted-foreground">ТВ, радио, digital, наружка. Единое окно</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="BarChart" size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Аналитика</h3>
                  <p className="text-muted-foreground">Прозрачная отчётность в реальном времени</p>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 4: Why Us */}
        {currentSlide === 4 && (
          <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
            <div className="max-w-5xl">
              <h2 className="text-5xl font-bold mb-16 text-center">Почему мы?</h2>
              
              <div className="space-y-6">
                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">19 лет опыта</h3>
                      <p className="text-muted-foreground">Знаем, как продвигаться в субъектах РФ и на страну в целом</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Собственная команда 100+ специалистов</h3>
                      <p className="text-muted-foreground">Копирайтеры, дизайнеры, операторы, SMM-специалисты, продюсеры</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Radio" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Собственные медиа</h3>
                      <p className="text-muted-foreground">Многомиллионная аудитория: радиостанции, онлайн-СМИ, соцсети + доступ к федеральным СМИ</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">"Единое окно"</h3>
                      <p className="text-muted-foreground">Ведем клиентов комплексно. Прозрачность и регулярная отчётность по всем KPI</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Гибкость и скорость</h3>
                      <p className="text-muted-foreground">Мобильнее и быстрее, чем крупные федеральные агентства</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 5: Problems & Solutions */}
        {currentSlide === 5 && (
          <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
            <div className="max-w-6xl">
              <h2 className="text-4xl font-bold mb-12 text-center">Основные проблемы при выходе на рынок России</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-destructive">❌ Проблемы (90% компаний)</h3>
                  <div className="space-y-4">
                    <Card className="p-4 bg-red-50 border-red-200">
                      <p className="text-foreground">Культурные барьеры и ошибки в коммуникации</p>
                    </Card>
                    <Card className="p-4 bg-red-50 border-red-200">
                      <p className="text-foreground">Непонимание локальных медиаканалов</p>
                    </Card>
                    <Card className="p-4 bg-red-50 border-red-200">
                      <p className="text-foreground">Потеря 30–50% бюджета без стратегии</p>
                    </Card>
                    <Card className="p-4 bg-red-50 border-red-200">
                      <p className="text-foreground">Потеря времени, лидов и доверия</p>
                    </Card>
                    <Card className="p-4 bg-red-50 border-red-200">
                      <p className="text-foreground">Отсутствие прозрачности в медиазакупках</p>
                    </Card>
                    <Card className="p-4 bg-red-50 border-red-200">
                      <p className="text-foreground">Сложность выбора надёжного партнёра</p>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary">✅ Как мы решаем</h3>
                  <div className="space-y-4">
                    <Card className="p-4 bg-blue-50 border-blue-200">
                      <p className="text-foreground">Глубокая локализация под менталитет в 80+ городах</p>
                    </Card>
                    <Card className="p-4 bg-blue-50 border-blue-200">
                      <p className="text-foreground">19 лет опыта — знаем, где теряют бюджет</p>
                    </Card>
                    <Card className="p-4 bg-blue-50 border-blue-200">
                      <p className="text-foreground">Полный цикл «под ключ» — от анализа до продаж</p>
                    </Card>
                    <Card className="p-4 bg-blue-50 border-blue-200">
                      <p className="text-foreground">Регулярная отчётность и контроль каждого этапа</p>
                    </Card>
                    <Card className="p-4 bg-blue-50 border-blue-200">
                      <p className="text-foreground">Прямые контакты со СМИ — без посредников</p>
                    </Card>
                    <Card className="p-4 bg-blue-50 border-blue-200">
                      <p className="text-foreground">Прозрачный медиаплан с фиксацией KPI</p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 6: Cases */}
        {currentSlide === 6 && (
          <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
            <div className="max-w-6xl">
              <h2 className="text-5xl font-bold mb-12 text-center">Наши кейсы</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Users" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">Федеральный блог-тур</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Раскрытие туристического потенциала региона</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-primary">Результат:</span> 70+ публикаций, 400K+ просмотров, KPI × 3.5</p>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Palette" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">Бренд-платформа пельменей</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Подготовка к выходу в федеральные сети</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-primary">Результат:</span> Логотип, брендбук, 3 варианта упаковки</p>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Trophy" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">Выставка "Россия" на ВДНХ</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">8 месяцев медиасопровождения региона</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-primary">Результат:</span> 1М посетителей, 14М охватов, 700+ публикаций</p>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Megaphone" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">PR хоккейного марафона</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Федеральное освещение в 30+ регионах</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-primary">Результат:</span> 100+ новостей в СМИ, 810K просмотров, 3000+ участников</p>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Video" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">Имиджевый видеоролик</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Для выставки-форума на ВДНХ</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-primary">Результат:</span> 55K просмотров в первый день, 500K+ всего</p>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">Инфлюенс для ЛКЗ</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Повышение узнаваемости бренда</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-primary">Результат:</span> Рост поисковых запросов до 200%, продажи ↑</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 7: Packages */}
        {currentSlide === 7 && (
          <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
            <div className="max-w-6xl w-full">
              <h2 className="text-5xl font-bold mb-12 text-center">Пакеты услуг</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <Icon name="Search" size={32} className="text-primary mb-3" />
                    <h3 className="text-2xl font-bold mb-2">Исследования</h3>
                    <div className="text-3xl font-bold text-primary mb-2">€1,500–2,500</div>
                    <p className="text-sm text-muted-foreground mb-4">3–4 недели</p>
                  </div>
                  <p className="text-sm">Анализ ниши, конкурентов, ЦА, позиционирование и медиаплан</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <Icon name="Smartphone" size={32} className="text-primary mb-3" />
                    <h3 className="text-2xl font-bold mb-2">Digital и SMM</h3>
                    <div className="text-3xl font-bold text-primary mb-2">€3,000–8,000</div>
                    <p className="text-sm text-muted-foreground mb-4">3 месяца</p>
                  </div>
                  <p className="text-sm">Запуск кампаний, лидогенерация, ведение соцсетей</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <Icon name="FileText" size={32} className="text-primary mb-3" />
                    <h3 className="text-2xl font-bold mb-2">Контент</h3>
                    <div className="text-3xl font-bold text-primary mb-2">€2,500–6,000</div>
                    <p className="text-sm text-muted-foreground mb-4">8–12 недель</p>
                  </div>
                  <p className="text-sm">Разработка концепции, производство, локализация</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <Icon name="Video" size={32} className="text-primary mb-3" />
                    <h3 className="text-2xl font-bold mb-2">Видеопродакшн</h3>
                    <div className="text-3xl font-bold text-primary mb-2">€2,500–15,000+</div>
                    <p className="text-sm text-muted-foreground mb-4">4–8 недель</p>
                  </div>
                  <p className="text-sm">Бренд-фильмы, демо продукта, отзывы, интервью</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <Icon name="Newspaper" size={32} className="text-primary mb-3" />
                    <h3 className="text-2xl font-bold mb-2">PR и СМИ</h3>
                    <div className="text-3xl font-bold text-primary mb-2">€1,500–5,000</div>
                    <p className="text-sm text-muted-foreground mb-4">2–3 месяца</p>
                  </div>
                  <p className="text-sm">Публикации в федеральных и региональных СМИ</p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="mb-4">
                    <Icon name="Rocket" size={32} className="text-white mb-3" />
                    <h3 className="text-2xl font-bold mb-2">Полная кампания</h3>
                    <div className="text-3xl font-bold mb-2">€8,000–15,000/мес</div>
                    <p className="text-sm opacity-90 mb-4">6–12 месяцев</p>
                  </div>
                  <p className="text-sm opacity-90">Всё «под ключ»: стратегия, реклама, PR, контент, видео</p>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 8: Workflow */}
        {currentSlide === 8 && (
          <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
            <div className="max-w-4xl">
              <h2 className="text-5xl font-bold mb-16 text-center">Этапы работы</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    1
                  </div>
                  <Card className="flex-1 p-6 bg-white/60 backdrop-blur border-0 shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">Бриф и уточнение данных</h3>
                    <p className="text-muted-foreground mb-2">Сбор информации по нише, продукту и целям</p>
                    <p className="text-sm font-medium text-primary">1 рабочий день</p>
                  </Card>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    2
                  </div>
                  <Card className="flex-1 p-6 bg-white/60 backdrop-blur border-0 shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">Подготовка бюджета</h3>
                    <p className="text-muted-foreground mb-2">Формирование предложения: объем, сроки, стоимость</p>
                    <p className="text-sm font-medium text-primary">1-3 рабочих дня</p>
                  </Card>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    3
                  </div>
                  <Card className="flex-1 p-6 bg-white/60 backdrop-blur border-0 shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">Оказание услуги</h3>
                    <p className="text-muted-foreground mb-2">Сбор и анализ данных, оказание услуг, презентация результата</p>
                    <p className="text-sm font-medium text-primary">От 10 рабочих дней</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 9: Contact */}
        {currentSlide === 9 && (
          <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
            <div className="max-w-4xl text-center">
              <h2 className="text-5xl font-bold mb-8">Давайте обсудим ваши задачи!</h2>
              
              <Card className="p-12 bg-white/60 backdrop-blur border-0 shadow-2xl mb-8">
                <div className="mb-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon name="User" size={48} className="text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Софья Самойлова</h3>
                  <p className="text-xl text-muted-foreground">Директор по экспорту</p>
                </div>

                <div className="space-y-4 text-left max-w-md mx-auto">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50">
                    <Icon name="Mail" size={24} className="text-primary flex-shrink-0" />
                    <a href="mailto:s.samoylova@cdm.team" className="text-lg hover:text-primary transition-colors">
                      s.samoylova@cdm.team
                    </a>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50">
                    <Icon name="Phone" size={24} className="text-primary flex-shrink-0" />
                    <a href="tel:+79225256575" className="text-lg hover:text-primary transition-colors">
                      +7 922 525 65 75
                    </a>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50">
                    <Icon name="Globe" size={24} className="text-primary flex-shrink-0" />
                    <a href="https://centredigital.ru" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                      centredigital.ru
                    </a>
                  </div>
                </div>
              </Card>

              <p className="text-muted-foreground text-lg">
                Готовы начать путь на российский рынок вместе с надёжным партнёром
              </p>
            </div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="fixed bottom-8 right-8 flex gap-4 z-50">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            size="lg"
            variant="secondary"
            className="w-14 h-14 rounded-full shadow-xl"
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            size="lg"
            className="w-14 h-14 rounded-full shadow-xl"
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="fixed bottom-8 left-24 text-sm text-muted-foreground font-medium z-50">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
