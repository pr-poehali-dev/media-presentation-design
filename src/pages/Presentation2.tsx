import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  { id: 'cover', title: 'Обложка' },
  { id: 'market', title: 'Рынок России' },
  { id: 'market-potential', title: 'Потенциал рынка' },
  { id: 'regions', title: 'Регионы' },
  { id: 'about', title: 'О нас' },
  { id: 'why', title: 'Почему мы' },
  { id: 'problems', title: 'Проблемы при выходе' },
  { id: 'solutions', title: 'Наши решения' },
  { id: 'services', title: 'Наши услуги' },
  { id: 'case-1', title: 'Кейс: Блог-тур' },
  { id: 'case-2', title: 'Кейс: Пельмени' },
  { id: 'case-3', title: 'Кейс: ВДНХ' },
  { id: 'case-4', title: 'Кейс: Хоккей' },
  { id: 'case-5', title: 'Кейс: Видеоролик' },
  { id: 'case-6', title: 'Кейс: ЛКЗ' },
  { id: 'case-7', title: 'Кейс: Экспорт' },
  { id: 'packages', title: 'Пакеты услуг' },
  { id: 'workflow', title: 'Этапы работы' },
  { id: 'contact', title: 'Контакты' },
];

export default function Presentation2() {
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

  const getWaveOffset = () => {
    return currentSlide * 120;
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Continuous Wave Pattern - проходит через все слайды */}
      <svg 
        className="fixed left-0 top-0 w-full pointer-events-none z-10 transition-transform duration-700 ease-out"
        style={{ 
          height: '400vh',
          transform: `translateY(-${getWaveOffset()}px)`
        }}
        viewBox="0 0 100 4000" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFC800" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#FFC800" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFC800" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {/* Плавная волнистая линия, проходящая через все слайды */}
        <path
          d="M 0 200 Q 25 150, 50 200 T 100 200 L 100 250 Q 75 300, 50 250 T 0 250 Z
             M 0 400 Q 25 350, 50 400 T 100 400 L 100 450 Q 75 500, 50 450 T 0 450 Z
             M 0 600 Q 25 550, 50 600 T 100 600 L 100 650 Q 75 700, 50 650 T 0 650 Z
             M 0 800 Q 25 750, 50 800 T 100 800 L 100 850 Q 75 900, 50 850 T 0 850 Z
             M 0 1000 Q 25 950, 50 1000 T 100 1000 L 100 1050 Q 75 1100, 50 1050 T 0 1050 Z
             M 0 1200 Q 25 1150, 50 1200 T 100 1200 L 100 1250 Q 75 1300, 50 1250 T 0 1250 Z
             M 0 1400 Q 25 1350, 50 1400 T 100 1400 L 100 1450 Q 75 1500, 50 1450 T 0 1450 Z
             M 0 1600 Q 25 1550, 50 1600 T 100 1600 L 100 1650 Q 75 1700, 50 1650 T 0 1650 Z
             M 0 1800 Q 25 1750, 50 1800 T 100 1800 L 100 1850 Q 75 1900, 50 1850 T 0 1850 Z
             M 0 2000 Q 25 1950, 50 2000 T 100 2000 L 100 2050 Q 75 2100, 50 2050 T 0 2050 Z"
          fill="url(#waveGradient)"
          opacity="0.6"
        />
        {/* Золотая контурная линия */}
        <path
          d="M 50 0 Q 25 50, 50 100 T 50 200 T 50 300 T 50 400 T 50 500 T 50 600 T 50 700 T 50 800 T 50 900 T 50 1000 T 50 1100 T 50 1200 T 50 1300 T 50 1400 T 50 1500 T 50 1600 T 50 1700 T 50 1800 T 50 1900 T 50 2000"
          stroke="#FFC800"
          strokeWidth="0.3"
          fill="none"
          opacity="0.4"
        />
      </svg>

      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-16 bg-primary flex flex-col items-center py-8 gap-2 z-50 overflow-y-auto">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 flex-shrink-0 ${
              currentSlide === index
                ? 'bg-secondary scale-150'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            title={slide.title}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="ml-16 min-h-screen relative z-20">
        {/* Slide 0: Cover */}
        {currentSlide === 0 && (
          <div className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-br from-primary to-primary/90 animate-fade-in">
            <div className="max-w-4xl text-center text-white">
              <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                <Icon name="Rocket" size={24} className="text-secondary" />
                <span className="font-semibold text-lg text-secondary">Centre digital & media</span>
              </div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Ваш надежный<br />PR-партнер для выхода<br />в Россию
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Полный цикл услуг медиапродвижения для брендов из дружественных стран
              </p>
            </div>
          </div>
        )}

        {/* Slide 1: Russian Market Overview */}
        {currentSlide === 1 && (
          <div className="min-h-screen flex items-center justify-center p-12 animate-fade-in">
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl font-bold mb-12 text-center text-primary">Российский рынок сегодня</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 bg-slate-50 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2">80М+</div>
                      <p className="text-base text-slate-700 leading-relaxed">активных потребителей готовы покупать ваши товары</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-slate-50 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-base text-slate-700 leading-relaxed">После 2022 года на российском рынке <span className="font-bold text-primary">освободились ниши</span> — реальные возможности для новых производителей</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-slate-50 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Heart" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-base text-slate-700 leading-relaxed">Жители России <span className="font-bold text-primary">готовы пробовать товары</span> и услуги из дружественных стран</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-slate-50 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Handshake" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-base text-slate-700 leading-relaxed">Продукция из СНГ, Азии и Ближнего Востока воспринимается как <span className="font-bold text-primary">"свое, родное"</span></p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 2: Market Potential */}
        {currentSlide === 2 && (
          <div className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-br from-primary to-primary/90 animate-fade-in">
            <div className="max-w-4xl text-center text-white">
              <div className="mb-12">
                <div className="text-8xl font-bold text-secondary mb-6">85%</div>
                <p className="text-3xl leading-relaxed">ваших будущих клиентов живут и принимают решения<br />за пределами Москвы.</p>
              </div>
              <h2 className="text-5xl font-bold mb-6">Главный актив бизнеса —<br />регионы страны!</h2>
            </div>
          </div>
        )}

        {/* Slide 3: Regions */}
        {currentSlide === 3 && (
          <div className="min-h-screen flex items-center justify-center p-12 animate-fade-in">
            <div className="max-w-5xl w-full">
              <h2 className="text-4xl font-bold mb-8 text-center text-primary">У каждого города России –<br />свой культурный код и свой покупатель!</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { city: 'Ижевск', desc: 'промышленный кластер, оружейная столица России' },
                  { city: 'Казань', desc: 'перекресток культур и технологий' },
                  { city: 'Екатеринбург', desc: 'деловая столица Урала' },
                  { city: 'Новосибирск', desc: 'научный и логистический хаб Сибири' },
                  { city: 'Краснодар', desc: 'аграрный и курортный центр Юга' },
                  { city: 'Нижний Новгород', desc: 'индустриальный кластер Поволжья' },
                  { city: 'Ростов-на-Дону', desc: '«ворота Кавказа»' },
                ].map((item, i) => (
                  <Card key={i} className="p-6 bg-slate-50 border border-slate-200">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-1">{item.city}</h3>
                        <p className="text-sm text-slate-700">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <p className="text-2xl text-center font-bold text-primary">
                Мы знаем эти города — работаем среди них <span className="text-secondary">более 19 лет!</span>
              </p>
            </div>
          </div>
        )}

        {/* Slide 4: About Us */}
        {currentSlide === 4 && (
          <div className="min-h-screen flex items-center justify-center p-12 animate-fade-in">
            <div className="max-w-5xl w-full">
              <h2 className="text-4xl font-bold mb-6 text-center text-primary">Centre digital & media — ваш PR-мост в Россию</h2>
              <p className="text-xl text-center text-slate-600 mb-10">Полный цикл услуг для продвижения бренда в регионах</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'Target', title: 'Стратегия и выход на рынок', desc: 'Анализ ЦА, позиционирование' },
                  { icon: 'FileText', title: 'Контент и коммуникации', desc: 'Тексты, фото, видео, SMM' },
                  { icon: 'Megaphone', title: 'PR и GR', desc: 'Публикации в СМИ, блогеры' },
                  { icon: 'Video', title: 'Продакшн', desc: 'Видео и аудио, своя студия' },
                  { icon: 'ShoppingCart', title: 'Медиазакупки', desc: 'ТВ, радио, digital, наружка' },
                  { icon: 'BarChart', title: 'Аналитика', desc: 'Прозрачная отчётность' },
                ].map((service, i) => (
                  <Card key={i} className="p-6 bg-slate-50 border border-slate-200">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} size={28} className="text-secondary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-primary">{service.title}</h3>
                    <p className="text-sm text-slate-700">{service.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Slide 5: Why Us */}
        {currentSlide === 5 && (
          <div className="min-h-screen flex items-center justify-center p-12 animate-fade-in">
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl font-bold mb-12 text-center text-primary">Почему выбирают нас</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: 'Globe', title: 'Понимаем обе стороны', desc: 'Знаем, как говорить о бренде на языке российских регионов' },
                  { icon: 'Network', title: 'Выход на региональные СМИ', desc: 'Личные связи с редакциями, блогерами, организаторами' },
                  { icon: 'Target', title: 'Работаем с нуля', desc: 'От стратегии до реализации — даже без присутствия в России' },
                  { icon: 'Zap', title: 'Быстрые результаты', desc: 'Первые публикации через 2-3 недели работы' },
                  { icon: 'Shield', title: 'Прозрачная отчетность', desc: 'Видите каждую публикацию, охват, результат' },
                  { icon: 'Award', title: 'Проверенный опыт', desc: 'Более 15 лет, сотни успешных проектов' },
                ].map((item, i) => (
                  <Card key={i} className="p-7 bg-slate-50 border border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Slide 6: Problems */}
        {currentSlide === 6 && (
          <div className="min-h-screen flex items-center justify-center p-12 animate-fade-in">
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl font-bold mb-12 text-center text-primary">Главные проблемы при выходе на рынок России</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: 'AlertCircle', title: 'Отсутствие доверия', desc: 'Покупатель не знает бренд — не покупает' },
                  { icon: 'XCircle', title: 'Нет нужных контактов', desc: 'Сложно выйти на СМИ, блогеров, партнеров' },
                  { icon: 'MessageSquare', title: 'Языковой барьер', desc: 'Сложности в коммуникации с партнерами' },
                  { icon: 'Map', title: 'Непонимание культурных кодов', desc: 'То, что работает у вас, может не сработать в России' },
                  { icon: 'DollarSign', title: 'Большие бюджеты', desc: 'Реклама требует миллионов без гарантий' },
                  { icon: 'Clock', title: 'Долгий путь к результату', desc: 'Без стратегии можно потратить годы' },
                ].map((item, i) => (
                  <Card key={i} className="p-7 bg-red-50 border border-red-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={24} className="text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-red-700 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Slide 7: Solutions */}
        {currentSlide === 7 && (
          <div className="min-h-screen flex items-center justify-center p-12 animate-fade-in">
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl font-bold mb-12 text-center text-primary">Наши решения</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: 'CheckCircle', title: 'Формируем доверие через PR', desc: 'Публикации в СМИ создают образ надежного бренда' },
                  { icon: 'Users', title: 'Используем готовую сеть контактов', desc: 'Не нужно искать партнеров — мы это сделаем за вас' },
                  { icon: 'MessageCircle', title: 'Говорим на языке аудитории', desc: 'Адаптируем сообщения под российские реалии' },
                  { icon: 'Compass', title: 'Учитываем местную специфику', desc: 'Контент с учетом особенностей каждого региона' },
                  { icon: 'TrendingUp', title: 'Эффективно расходуем бюджет', desc: 'PR дешевле рекламы при большем эффекте' },
                  { icon: 'Rocket', title: 'Обеспечиваем быстрый старт', desc: 'Первые результаты — через 2-3 недели' },
                ].map((item, i) => (
                  <Card key={i} className="p-7 bg-green-50 border border-green-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={24} className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-green-700 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Slide 8: Services */}
        {currentSlide === 8 && (
          <div className="min-h-screen flex items-center justify-center p-12 animate-fade-in">
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl font-bold mb-12 text-center text-primary">Наши услуги</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: 'FileText', title: 'Публикации в СМИ', desc: 'Статьи в федеральных и региональных изданиях' },
                  { icon: 'Video', title: 'Работа с блогерами', desc: 'Интеграции у тех, кому доверяет аудитория' },
                  { icon: 'Calendar', title: 'Организация мероприятий', desc: 'Презентации, блог-туры, выставки' },
                  { icon: 'Camera', title: 'Фото- и видеопроизводство', desc: 'Контент для соцсетей, сайта, презентаций' },
                  { icon: 'BarChart', title: 'Аналитика и стратегия', desc: 'PR-стратегия, анализ конкурентов' },
                  { icon: 'Share2', title: 'Управление репутацией', desc: 'Мониторинг упоминаний, работа с негативом' },
                ].map((item, i) => (
                  <Card key={i} className="p-7 bg-slate-50 border border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Cases slides 9-15 */}
        {currentSlide >= 9 && currentSlide <= 15 && (() => {
          const cases = [
            {
              title: 'Блог-тур для представителей СМИ',
              task: 'Представить новый гостиничный комплекс федеральным и региональным журналистам',
              solution: 'Организовали двухдневный блог-тур: проживание, экскурсии, знакомство с концепцией отеля',
              result: '22 публикации в топовых изданиях, охват 5+ млн читателей'
            },
            {
              title: 'Вывод на рынок азиатских пельменей',
              task: 'Познакомить российского покупателя с новым продуктом — замороженными пельменями',
              solution: 'Провели дегустации в торговых сетях, съемки для ТВ и food-блогеров, статьи в lifestyle-изданиях',
              result: 'Рост продаж на 40% за 3 месяца, 15 публикаций'
            },
            {
              title: 'Запуск павильона на ВДНХ',
              task: 'Обеспечить информационную поддержку открытия павильона страны-партнера',
              solution: 'Подготовили пресс-релизы, организовали пресс-подход, серия интервью, инфоповоды в телеграм',
              result: '30+ публикаций в федеральных СМИ, посещаемость +60%'
            },
            {
              title: 'Спортивное событие: турнир по хоккею',
              task: 'Привлечь внимание к международному юношескому хоккейному турниру',
              solution: 'Работа со спортивными СМИ: анонсы, репортажи, интервью. Контент для соцсетей',
              result: '18 публикаций в спортизданиях, заполняемость трибун с 30% до 80%'
            },
            {
              title: 'Имиджевый видеоролик для производителя',
              task: 'Создать видеоконтент для презентации завода на международных выставках',
              solution: 'Съемка производственного процесса, интервью с руководством, монтаж с субтитрами на 3 языках',
              result: 'Рост запросов от дистрибьюторов на 35%'
            },
            {
              title: 'Проект "Легендарные конструкторы"',
              task: 'Продвижение серии образовательных конструкторов для детей',
              solution: 'Мастер-классы в школах, обзоры у родительских блогеров, статьи в изданиях о воспитании',
              result: 'Охват 2000+ детей и родителей, рост узнаваемости +45%'
            },
            {
              title: 'Информационная поддержка экспортного проекта',
              task: 'Рассказать о новых экспортных направлениях компании в страны Азии',
              solution: 'Серия публикаций в деловых СМИ, интервью с руководством, кейс-стади',
              result: '20 публикаций в бизнес-изданиях, привлечение партнеров'
            }
          ];
          
          const caseData = cases[currentSlide - 9];
          
          return (
            <div className="min-h-screen flex items-center justify-center p-12 animate-fade-in bg-slate-50">
              <div className="max-w-5xl w-full">
                <div className="bg-secondary/10 rounded-2xl px-4 py-2 inline-block mb-6">
                  <span className="text-lg font-bold text-secondary">Кейс #{currentSlide - 8}</span>
                </div>
                <h2 className="text-4xl font-bold mb-10 text-primary">{caseData.title}</h2>
                
                <div className="space-y-6">
                  <Card className="p-7 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Target" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Задача</h3>
                        <p className="text-base text-slate-700 leading-relaxed">{caseData.task}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-7 border border-secondary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Lightbulb" size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-2">Решение</h3>
                        <p className="text-base text-slate-700 leading-relaxed">{caseData.solution}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-7 border border-green-200 bg-green-50">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                        <Icon name="Trophy" size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-700 mb-2">Результат</h3>
                        <p className="text-base text-slate-700 leading-relaxed">{caseData.result}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Slide 16: Packages */}
        {currentSlide === 16 && (
          <div className="min-h-screen flex items-center justify-center p-12 animate-fade-in">
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl font-bold mb-12 text-center text-primary">Пакеты услуг</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { name: 'Старт', price: '$3,000', icon: 'Sparkles', items: ['5-7 публикаций в СМИ', 'Базовая PR-стратегия', 'Ежемесячный отчет'] },
                  { name: 'Стандарт', price: '$7,000', icon: 'Zap', popular: true, items: ['10-15 публикаций', '2-3 интеграции с блогерами', 'Детальная стратегия', 'Мониторинг репутации'] },
                  { name: 'Премиум', price: '$15,000', icon: 'Crown', items: ['20+ публикаций', '5+ интеграций', 'Организация мероприятий', 'Фото/видео', 'Полное управление'] },
                ].map((pkg, i) => (
                  <Card key={i} className={`p-7 ${pkg.popular ? 'border-2 border-secondary bg-secondary/5' : 'bg-slate-50 border border-slate-200'}`}>
                    <div className="text-center mb-4">
                      {pkg.popular && (
                        <div className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                          ПОПУЛЯРНЫЙ
                        </div>
                      )}
                      <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                        <Icon name={pkg.icon as any} size={24} className="text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-1">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-secondary mb-1">{pkg.price}</div>
                      <p className="text-sm text-slate-600">/ месяц</p>
                    </div>
                    <ul className="space-y-2">
                      {pkg.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: 'Calendar', title: 'Разовая консультация', price: '$500', desc: 'Анализ и рекомендации' },
                  { icon: 'FileText', title: 'Разовая публикация', price: 'от $300', desc: 'Статья в выбранном СМИ' },
                  { icon: 'Users', title: 'Организация мероприятия', price: 'от $2,000', desc: 'Блог-тур, презентация' },
                ].map((item, i) => (
                  <Card key={i} className="p-5 bg-primary/5 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Icon name={item.icon as any} size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-base font-bold text-primary mb-1">{item.title}</h4>
                        <p className="text-lg text-slate-700 mb-1 font-semibold">{item.price}</p>
                        <p className="text-xs text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Slide 17: Workflow */}
        {currentSlide === 17 && (
          <div className="min-h-screen flex items-center justify-center p-12 animate-fade-in">
            <div className="max-w-5xl w-full">
              <h2 className="text-4xl font-bold mb-12 text-center text-primary">Как мы работаем</h2>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Знакомство и анализ', desc: 'Изучаем ваш бренд, продукт, ЦА. Анализируем конкурентов и медиаполе', time: '1-2 недели' },
                  { num: '2', title: 'Разработка стратегии', desc: 'Создаем медиаплан на 3-6 месяцев. Подбираем СМИ, блогеров, площадки', time: '1 неделя' },
                  { num: '3', title: 'Реализация и контроль', desc: 'Запускаем активности. Регулярная отчётность. Корректируем на основе данных', time: 'Постоянно' },
                ].map((step, i) => (
                  <Card key={i} className="p-8 bg-slate-50 border border-slate-200">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-secondary text-white flex items-center justify-center flex-shrink-0 text-3xl font-bold">
                        {step.num}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                        <p className="text-base text-slate-700 leading-relaxed mb-3">{step.desc}</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-lg">
                          <Icon name="Clock" size={18} className="text-secondary" />
                          <span className="text-sm font-semibold text-secondary">{step.time}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Slide 18: Contact */}
        {currentSlide === 18 && (
          <div className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-br from-primary to-primary/90 animate-fade-in">
            <div className="max-w-4xl w-full text-center text-white">
              <h2 className="text-5xl font-bold mb-8">Готовы начать?</h2>
              <p className="text-2xl mb-12 opacity-90">Свяжитесь с нами для бесплатной консультации</p>
              
              <Card className="p-12 bg-white/10 backdrop-blur border-2 border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-3xl font-bold mb-1">Софья Казакова</h3>
                      <p className="text-lg opacity-90">Руководитель проектов</p>
                    </div>
                  </div>

                  <div className="h-px bg-white/20 my-6"></div>

                  <div className="space-y-4">
                    <a href="mailto:s.kazakova@centre.digital" className="flex items-center justify-center gap-3 text-lg hover:text-secondary transition-colors">
                      <Icon name="Mail" size={24} />
                      <span>s.kazakova@centre.digital</span>
                    </a>
                    
                    <a href="https://t.me/sofiakz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-lg hover:text-secondary transition-colors">
                      <Icon name="Send" size={24} />
                      <span>@sofiakz</span>
                    </a>
                    
                    <a href="https://wa.me/79057682205" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-lg hover:text-secondary transition-colors">
                      <Icon name="Phone" size={24} />
                      <span>+7 905 768 22 05</span>
                    </a>
                  </div>
                </div>
              </Card>

              <div className="mt-12">
                <p className="text-base opacity-75">Centre digital & media — ваш путь к успеху в России</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="fixed bottom-6 right-6 flex gap-3 z-50">
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
            className="w-14 h-14 rounded-full shadow-xl bg-secondary hover:bg-secondary/90"
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="fixed bottom-8 left-20 text-base font-bold text-primary z-50 bg-white px-3 py-1.5 rounded-full shadow-lg">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
