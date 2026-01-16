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
    <div className="min-h-screen bg-white">
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-20 bg-primary flex flex-col items-center py-8 gap-2 z-50 overflow-y-auto">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
              currentSlide === index
                ? 'bg-secondary scale-150'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            title={slide.title}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="ml-20 min-h-screen relative">
        {/* Slide 0: Cover */}
        {currentSlide === 0 && (
          <div className="min-h-screen flex items-center justify-center p-16 bg-gradient-to-br from-primary to-primary/90 animate-fade-in">
            <div className="max-w-5xl text-center text-white">
              <div className="inline-flex items-center gap-3 mb-12 px-8 py-4 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
                <Icon name="Rocket" size={32} className="text-secondary" />
                <span className="font-semibold text-2xl text-secondary">Centre digital & media</span>
              </div>
              <h1 className="text-8xl font-bold mb-8 leading-tight">
                Ваш надежный<br />PR-партнер для выхода<br />в Россию
              </h1>
              <p className="text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Полный цикл услуг медиапродвижения для брендов из дружественных стран
              </p>
            </div>
          </div>
        )}

        {/* Slide 1: Russian Market Overview */}
        {currentSlide === 1 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in">
            <div className="max-w-7xl w-full">
              <h2 className="text-6xl font-bold mb-20 text-center text-primary">Российский рынок сегодня</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-7xl font-bold text-primary mb-4">80М+</div>
                      <p className="text-xl text-slate-700 leading-relaxed">активных потребителей готовы покупать ваши товары</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-xl text-slate-700 leading-relaxed">После 2022 года на российском рынке <span className="font-bold text-primary">освободились ниши</span> — реальные возможности для новых производителей</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Heart" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-xl text-slate-700 leading-relaxed">Жители России <span className="font-bold text-primary">готовы пробовать товары</span> и услуги из дружественных стран — если они понятны и вызывают доверие</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Handshake" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-xl text-slate-700 leading-relaxed">Продукция из СНГ, Азии и Ближнего Востока воспринимается как <span className="font-bold text-primary">"свое, родное"</span> - люди доверяют соседям</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 2: Market Potential */}
        {currentSlide === 2 && (
          <div className="min-h-screen flex items-center justify-center p-16 bg-gradient-to-br from-primary to-primary/90 animate-fade-in">
            <div className="max-w-5xl text-center text-white">
              <div className="mb-16">
                <div className="text-9xl font-bold text-secondary mb-8">85%</div>
                <p className="text-4xl leading-relaxed">ваших будущих клиентов живут и принимают решения<br />за пределами Москвы.</p>
              </div>
              <h2 className="text-6xl font-bold mb-8">Главный актив бизнеса —<br />регионы страны!</h2>
            </div>
          </div>
        )}

        {/* Slide 3: Regions */}
        {currentSlide === 3 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in">
            <div className="max-w-6xl w-full">
              <h2 className="text-6xl font-bold mb-12 text-center text-primary">У каждого города России –<br />свой культурный код и свой покупатель!</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={28} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Ижевск</h3>
                      <p className="text-lg text-slate-700">мощный промышленный кластер, оружейная столица России</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={28} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Казань</h3>
                      <p className="text-lg text-slate-700">исторический перекресток культур и технологий</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={28} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Екатеринбург</h3>
                      <p className="text-lg text-slate-700">промышленное сердце и деловая столица Урала</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={28} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Новосибирск</h3>
                      <p className="text-lg text-slate-700">научный и логистический хаб Сибири</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={28} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Краснодар</h3>
                      <p className="text-lg text-slate-700">аграрный и курортный центр Юга</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={28} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Нижний Новгород</h3>
                      <p className="text-lg text-slate-700">индустриальный кластер Поволжья</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={28} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Ростов-на-Дону</h3>
                      <p className="text-lg text-slate-700">«ворота Кавказа» и крупный транспортный узел</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-semibold text-primary">И другие!</p>
                  </div>
                </Card>
              </div>

              <p className="text-3xl text-center font-bold text-primary">
                Мы знаем эти города и их жителей, потому что работаем среди них и для них — <span className="text-secondary">более 19 лет!</span>
              </p>
            </div>
          </div>
        )}

        {/* Slide 4: About Us */}
        {currentSlide === 4 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in">
            <div className="max-w-6xl w-full">
              <h2 className="text-6xl font-bold mb-8 text-center text-primary">Centre digital & media — ваш PR-мост в Россию</h2>
              <p className="text-3xl text-center text-slate-600 mb-16">Мы оказываем полный цикл услуг для продвижения бренда в регионах</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="w-20 h-20 rounded-3xl bg-secondary/20 flex items-center justify-center mb-6">
                    <Icon name="Target" size={40} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Стратегия и выход на рынок</h3>
                  <p className="text-lg text-slate-700">Анализ ЦА, позиционирование, рекламные кампании</p>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="w-20 h-20 rounded-3xl bg-secondary/20 flex items-center justify-center mb-6">
                    <Icon name="FileText" size={40} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Контент и коммуникации</h3>
                  <p className="text-lg text-slate-700">Подготовка текстов, фото, видео и SMM под российскую аудиторию</p>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="w-20 h-20 rounded-3xl bg-secondary/20 flex items-center justify-center mb-6">
                    <Icon name="Megaphone" size={40} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">PR и GR</h3>
                  <p className="text-lg text-slate-700">Публикации в СМИ, работа с экспертами и блогерами</p>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="w-20 h-20 rounded-3xl bg-secondary/20 flex items-center justify-center mb-6">
                    <Icon name="Video" size={40} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Продакшн</h3>
                  <p className="text-lg text-slate-700">Видео и аудио: от Reels до имиджевых фильмов. Собственная студия и команда профессионалов</p>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="w-20 h-20 rounded-3xl bg-secondary/20 flex items-center justify-center mb-6">
                    <Icon name="ShoppingCart" size={40} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Медиазакупки</h3>
                  <p className="text-lg text-slate-700">ТВ, радио, digital, наружка. Единое окно и полный контроль</p>
                </Card>

                <Card className="p-8 bg-slate-50 border-2 border-slate-200">
                  <div className="w-20 h-20 rounded-3xl bg-secondary/20 flex items-center justify-center mb-6">
                    <Icon name="BarChart" size={40} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Аналитика</h3>
                  <p className="text-lg text-slate-700">Прозрачная отчётность по охватам, лидам и продажам в реальном времени</p>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 5: Why Us */}
        {currentSlide === 5 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in">
            <div className="max-w-7xl w-full">
              <h2 className="text-6xl font-bold mb-20 text-center text-primary">Почему выбирают нас</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Globe" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Понимаем обе стороны</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Мы знаем, как говорить о бренде на языке российских регионов</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Network" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Есть выход на региональные СМИ</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Личные связи с редакциями, блогерами, организаторами мероприятий</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Работаем с нуля</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">От стратегии до реализации — даже если у вас ещё нет присутствия в России</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Быстрые результаты</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Первые публикации появляются уже через 2-3 недели работы</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Прозрачная отчетность</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Вы видите каждую публикацию, каждый охват, каждый результат</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Проверенный опыт</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Более 15 лет на рынке, сотни успешных проектов для брендов разного масштаба</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 6: Problems */}
        {currentSlide === 6 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in">
            <div className="max-w-7xl w-full">
              <h2 className="text-6xl font-bold mb-20 text-center text-primary">Главные проблемы при выходе на рынок России</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-10 bg-gradient-to-br from-red-50 to-white border-2 border-red-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="AlertCircle" size={32} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-700 mb-3">Отсутствие доверия</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Покупатель не знает бренд — не покупает</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-red-50 to-white border-2 border-red-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="XCircle" size={32} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-700 mb-3">Нет нужных контактов</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Сложно выйти на СМИ, блогеров, партнеров</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-red-50 to-white border-2 border-red-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageSquare" size={32} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-700 mb-3">Языковой барьер</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Сложности в коммуникации с местными партнерами и аудиторией</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-red-50 to-white border-2 border-red-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Map" size={32} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-700 mb-3">Непонимание культурных кодов</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">То, что работает у вас, может не сработать в России</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-red-50 to-white border-2 border-red-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="DollarSign" size={32} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-700 mb-3">Большие бюджеты</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Традиционная реклама требует миллионных вложений без гарантий</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-red-50 to-white border-2 border-red-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={32} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-700 mb-3">Долгий путь к результату</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Без грамотной стратегии можно потратить годы на "раскачку"</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 7: Solutions */}
        {currentSlide === 7 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in">
            <div className="max-w-7xl w-full">
              <h2 className="text-6xl font-bold mb-20 text-center text-primary">Наши решения</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-10 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle" size={32} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-700 mb-3">Формируем доверие через PR</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Публикации в федеральных и региональных СМИ создают образ надежного бренда</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={32} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-700 mb-3">Используем готовую сеть контактов</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Не нужно искать партнеров самостоятельно — мы это сделаем за вас</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={32} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-700 mb-3">Говорим на языке аудитории</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Адаптируем ваши сообщения под российские реалии и культуру</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Compass" size={32} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-700 mb-3">Учитываем местную специфику</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Создаем контент с учетом особенностей каждого региона</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" size={32} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-700 mb-3">Эффективно расходуем бюджет</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">PR-подход дешевле традиционной рекламы при большем эффекте на доверие</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="Rocket" size={32} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-700 mb-3">Обеспечиваем быстрый старт</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Первые результаты — уже через 2-3 недели</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 8: Services */}
        {currentSlide === 8 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in">
            <div className="max-w-7xl w-full">
              <h2 className="text-6xl font-bold mb-20 text-center text-primary">Наши услуги</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="FileText" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Публикации в СМИ</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Статьи и новости в федеральных и региональных изданиях: от РБК до местных газет. Охват — миллионы читателей.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Video" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Работа с блогерами</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Интеграции и обзоры у тех, кому доверяет ваша целевая аудитория. От макро- до микро-инфлюенсеров.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Calendar" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Организация мероприятий</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Презентации продукции, блог-туры, выставки, дегустации. Живое знакомство с брендом.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Camera" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Фото- и видеопроизводство</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Создание контента для соцсетей, сайта, презентаций. Репортажи, интервью, рекламные ролики.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="BarChart" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Аналитика и стратегия</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Разработка PR-стратегии, анализ конкурентов, медиапланирование. Работаем на основе данных.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Share2" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Управление репутацией</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">Мониторинг упоминаний, работа с негативом, поддержание позитивного образа бренда в медиапространстве.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 9: Case 1 - Blog Tour */}
        {currentSlide === 9 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in bg-slate-50">
            <div className="max-w-6xl w-full">
              <div className="bg-secondary/10 rounded-3xl p-3 inline-block mb-8">
                <span className="text-2xl font-bold text-secondary px-4">Кейс #1</span>
              </div>
              <h2 className="text-6xl font-bold mb-16 text-primary">Блог-тур для представителей СМИ</h2>
              
              <div className="space-y-8">
                <Card className="p-10 border-2 border-primary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Задача</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Представить новый гостиничный комплекс федеральным и региональным журналистам</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-secondary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Lightbulb" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-secondary mb-4">Решение</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Организовали двухдневный блог-тур: проживание, экскурсии, знакомство с концепцией отеля. Пригласили 15 представителей СМИ из Москвы и регионов</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-green-200 bg-green-50">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-green-700 mb-4">Результат</h3>
                      <p className="text-xl text-slate-700 leading-relaxed mb-4">22 публикации в топовых изданиях (Forbes, РБК, Ведомости, региональные СМИ)</p>
                      <p className="text-xl text-slate-700 leading-relaxed">Общий охват: более 5 миллионов читателей</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 10: Case 2 - Dumplings */}
        {currentSlide === 10 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in bg-slate-50">
            <div className="max-w-6xl w-full">
              <div className="bg-secondary/10 rounded-3xl p-3 inline-block mb-8">
                <span className="text-2xl font-bold text-secondary px-4">Кейс #2</span>
              </div>
              <h2 className="text-6xl font-bold mb-16 text-primary">Вывод на рынок азиатских пельменей</h2>
              
              <div className="space-y-8">
                <Card className="p-10 border-2 border-primary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Задача</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Познакомить российского покупателя с новым продуктом — замороженными азиатскими пельменями (манты, хинкали, момо)</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-secondary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Lightbulb" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-secondary mb-4">Решение</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Провели серию дегустаций в крупных торговых сетях Москвы и регионов. Организовали съемки для телеканалов и food-блогеров. Разместили статьи о продукте в lifestyle-изданиях</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-green-200 bg-green-50">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-green-700 mb-4">Результат</h3>
                      <p className="text-xl text-slate-700 leading-relaxed mb-4">Рост продаж на 40% за 3 месяца</p>
                      <p className="text-xl text-slate-700 leading-relaxed">15 публикаций и сюжетов на ТВ, более 3 млн охвата</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 11: Case 3 - VDNH */}
        {currentSlide === 11 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in bg-slate-50">
            <div className="max-w-6xl w-full">
              <div className="bg-secondary/10 rounded-3xl p-3 inline-block mb-8">
                <span className="text-2xl font-bold text-secondary px-4">Кейс #3</span>
              </div>
              <h2 className="text-6xl font-bold mb-16 text-primary">Запуск павильона на ВДНХ</h2>
              
              <div className="space-y-8">
                <Card className="p-10 border-2 border-primary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Задача</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Обеспечить информационную поддержку открытия нового павильона страны-партнера на ВДНХ</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-secondary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Lightbulb" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-secondary mb-4">Решение</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Подготовили пресс-релизы, организовали пресс-подход для СМИ в день открытия. Провели серию интервью с организаторами. Запустили инфоповод через телеграм-каналы</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-green-200 bg-green-50">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-green-700 mb-4">Результат</h3>
                      <p className="text-xl text-slate-700 leading-relaxed mb-4">30+ публикаций в федеральных СМИ за первую неделю</p>
                      <p className="text-xl text-slate-700 leading-relaxed">Посещаемость павильона превысила прогнозы на 60%</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 12: Case 4 - Hockey */}
        {currentSlide === 12 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in bg-slate-50">
            <div className="max-w-6xl w-full">
              <div className="bg-secondary/10 rounded-3xl p-3 inline-block mb-8">
                <span className="text-2xl font-bold text-secondary px-4">Кейс #4</span>
              </div>
              <h2 className="text-6xl font-bold mb-16 text-primary">Спортивное событие: турнир по хоккею</h2>
              
              <div className="space-y-8">
                <Card className="p-10 border-2 border-primary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Задача</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Привлечь внимание к международному юношескому хоккейному турниру в Москве</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-secondary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Lightbulb" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-secondary mb-4">Решение</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Работа с спортивными СМИ: анонсы, репортажи с матчей, интервью с тренерами и игроками. Создание контента для соцсетей: фото, видео, сторис</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-green-200 bg-green-50">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-green-700 mb-4">Результат</h3>
                      <p className="text-xl text-slate-700 leading-relaxed mb-4">18 публикаций в спортивных изданиях (Чемпионат.com, Sports.ru и др.)</p>
                      <p className="text-xl text-slate-700 leading-relaxed">Заполняемость трибун выросла с 30% до 80%</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 13: Case 5 - Video */}
        {currentSlide === 13 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in bg-slate-50">
            <div className="max-w-6xl w-full">
              <div className="bg-secondary/10 rounded-3xl p-3 inline-block mb-8">
                <span className="text-2xl font-bold text-secondary px-4">Кейс #5</span>
              </div>
              <h2 className="text-6xl font-bold mb-16 text-primary">Имиджевый видеоролик для производителя</h2>
              
              <div className="space-y-8">
                <Card className="p-10 border-2 border-primary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Задача</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Создать видеоконтент для презентации завода-производителя на международных выставках</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-secondary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Lightbulb" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-secondary mb-4">Решение</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Провели съемку производственного процесса. Записали интервью с руководством и сотрудниками. Смонтировали 5-минутный ролик с субтитрами на 3 языках</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-green-200 bg-green-50">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-green-700 mb-4">Результат</h3>
                      <p className="text-xl text-slate-700 leading-relaxed mb-4">Ролик используется на всех выставках и презентациях</p>
                      <p className="text-xl text-slate-700 leading-relaxed">Количество запросов от дистрибьюторов выросло на 35%</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 14: Case 6 - LKZ */}
        {currentSlide === 14 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in bg-slate-50">
            <div className="max-w-6xl w-full">
              <div className="bg-secondary/10 rounded-3xl p-3 inline-block mb-8">
                <span className="text-2xl font-bold text-secondary px-4">Кейс #6</span>
              </div>
              <h2 className="text-6xl font-bold mb-16 text-primary">Проект "Легендарные конструкторы"</h2>
              
              <div className="space-y-8">
                <Card className="p-10 border-2 border-primary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Задача</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Продвижение серии образовательных конструкторов для детей на российском рынке</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-secondary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Lightbulb" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-secondary mb-4">Решение</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Организовали мастер-классы в школах и детских центрах. Запустили обзоры у родительских блогеров. Опубликовали статьи в изданиях о воспитании и образовании</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-green-200 bg-green-50">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-green-700 mb-4">Результат</h3>
                      <p className="text-xl text-slate-700 leading-relaxed mb-4">Охват мероприятий: более 2000 детей и родителей</p>
                      <p className="text-xl text-slate-700 leading-relaxed">12 публикаций, рост узнаваемости бренда на 45%</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 15: Case 7 - Export */}
        {currentSlide === 15 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in bg-slate-50">
            <div className="max-w-6xl w-full">
              <div className="bg-secondary/10 rounded-3xl p-3 inline-block mb-8">
                <span className="text-2xl font-bold text-secondary px-4">Кейс #7</span>
              </div>
              <h2 className="text-6xl font-bold mb-16 text-primary">Информационная поддержка экспортного проекта</h2>
              
              <div className="space-y-8">
                <Card className="p-10 border-2 border-primary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Задача</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Рассказать о новых экспортных направлениях российской компании в страны Азии</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-secondary/20">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Lightbulb" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-secondary mb-4">Решение</h3>
                      <p className="text-xl text-slate-700 leading-relaxed">Подготовили серию публикаций в деловых СМИ. Организовали интервью с руководством компании. Создали кейс-стади об успешном выходе на новые рынки</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-10 border-2 border-green-200 bg-green-50">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-green-700 mb-4">Результат</h3>
                      <p className="text-xl text-slate-700 leading-relaxed mb-4">20 публикаций в бизнес-изданиях (РБК, Коммерсантъ, Ведомости)</p>
                      <p className="text-xl text-slate-700 leading-relaxed">Привлечение новых партнеров и инвесторов</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 16: Packages */}
        {currentSlide === 16 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in">
            <div className="max-w-7xl w-full">
              <h2 className="text-6xl font-bold mb-20 text-center text-primary">Пакеты услуг</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Sparkles" size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">Старт</h3>
                    <div className="text-5xl font-bold text-secondary mb-6">$3,000</div>
                    <p className="text-slate-600 mb-6">/ месяц</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">5-7 публикаций в СМИ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">Базовая PR-стратегия</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">Ежемесячный отчет</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-secondary/10 to-white border-2 border-secondary shadow-xl hover:shadow-2xl transition-shadow transform scale-105">
                  <div className="text-center mb-6">
                    <div className="bg-secondary text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                      ПОПУЛЯРНЫЙ
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Zap" size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">Стандарт</h3>
                    <div className="text-5xl font-bold text-secondary mb-6">$7,000</div>
                    <p className="text-slate-600 mb-6">/ месяц</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">10-15 публикаций в СМИ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">Работа с блогерами (2-3 интеграции)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">Детальная PR-стратегия</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">Мониторинг репутации</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Crown" size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">Премиум</h3>
                    <div className="text-5xl font-bold text-secondary mb-6">$15,000</div>
                    <p className="text-slate-600 mb-6">/ месяц</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">20+ публикаций в СМИ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">Работа с блогерами (5+ интеграций)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">Организация мероприятий</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">Фото/видео производство</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-slate-700">Полное управление репутацией</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="mt-16 grid md:grid-cols-3 gap-8">
                <Card className="p-8 bg-primary/5 border-2 border-primary/20">
                  <div className="flex items-start gap-4">
                    <Icon name="Calendar" size={28} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-2xl font-bold text-primary mb-2">Разовая консультация</h4>
                      <p className="text-xl text-slate-700 mb-3">$500</p>
                      <p className="text-slate-600">Анализ ситуации и рекомендации по стратегии</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-primary/5 border-2 border-primary/20">
                  <div className="flex items-start gap-4">
                    <Icon name="FileText" size={28} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-2xl font-bold text-primary mb-2">Разовая публикация</h4>
                      <p className="text-xl text-slate-700 mb-3">от $300</p>
                      <p className="text-slate-600">Статья в выбранном СМИ (цена зависит от издания)</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-primary/5 border-2 border-primary/20">
                  <div className="flex items-start gap-4">
                    <Icon name="Users" size={28} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-2xl font-bold text-primary mb-2">Организация мероприятия</h4>
                      <p className="text-xl text-slate-700 mb-3">от $2,000</p>
                      <p className="text-slate-600">Блог-тур, презентация, пресс-конференция</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 17: Workflow */}
        {currentSlide === 17 && (
          <div className="min-h-screen flex items-center justify-center p-16 animate-fade-in">
            <div className="max-w-6xl w-full">
              <h2 className="text-6xl font-bold mb-20 text-center text-primary">Как мы работаем</h2>
              <div className="space-y-12">
                <Card className="p-12 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-8">
                    <div className="w-24 h-24 rounded-3xl bg-secondary text-white flex items-center justify-center flex-shrink-0 text-5xl font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold text-primary mb-4">Знакомство и анализ</h3>
                      <p className="text-2xl text-slate-700 leading-relaxed mb-4">Изучаем ваш бренд, продукт, целевую аудиторию. Анализируем конкурентов и медиаполе. Определяем ключевые сообщения и каналы коммуникации.</p>
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-xl">
                        <Icon name="Clock" size={24} className="text-secondary" />
                        <span className="text-xl font-semibold text-secondary">1-2 недели</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-12 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-8">
                    <div className="w-24 h-24 rounded-3xl bg-secondary text-white flex items-center justify-center flex-shrink-0 text-5xl font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold text-primary mb-4">Разработка стратегии</h3>
                      <p className="text-2xl text-slate-700 leading-relaxed mb-4">Создаем медиаплан на 3-6 месяцев. Подбираем СМИ, блогеров, площадки. Формируем контент-план и список инфоповодов.</p>
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-xl">
                        <Icon name="Clock" size={24} className="text-secondary" />
                        <span className="text-xl font-semibold text-secondary">1 неделя</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-12 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
                  <div className="flex items-start gap-8">
                    <div className="w-24 h-24 rounded-3xl bg-secondary text-white flex items-center justify-center flex-shrink-0 text-5xl font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold text-primary mb-4">Реализация и контроль</h3>
                      <p className="text-2xl text-slate-700 leading-relaxed mb-4">Запускаем активности согласно плану. Регулярно отчитываемся о результатах. Корректируем стратегию на основе полученных данных.</p>
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-xl">
                        <Icon name="Clock" size={24} className="text-secondary" />
                        <span className="text-xl font-semibold text-secondary">Постоянно</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Slide 18: Contact */}
        {currentSlide === 18 && (
          <div className="min-h-screen flex items-center justify-center p-16 bg-gradient-to-br from-primary to-primary/90 animate-fade-in">
            <div className="max-w-5xl w-full text-center text-white">
              <h2 className="text-7xl font-bold mb-12">Готовы начать?</h2>
              <p className="text-3xl mb-16 opacity-90">Свяжитесь с нами для бесплатной консультации</p>
              
              <Card className="p-16 bg-white/10 backdrop-blur border-2 border-white/20">
                <div className="space-y-8">
                  <div className="flex items-center justify-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center">
                      <Icon name="User" size={40} className="text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-4xl font-bold mb-2">Софья Казакова</h3>
                      <p className="text-2xl opacity-90">Руководитель проектов</p>
                    </div>
                  </div>

                  <div className="h-px bg-white/20 my-8"></div>

                  <div className="space-y-6">
                    <a href="mailto:s.kazakova@centre.digital" className="flex items-center justify-center gap-4 text-2xl hover:text-secondary transition-colors">
                      <Icon name="Mail" size={32} />
                      <span>s.kazakova@centre.digital</span>
                    </a>
                    
                    <a href="https://t.me/sofiakz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 text-2xl hover:text-secondary transition-colors">
                      <Icon name="Send" size={32} />
                      <span>@sofiakz</span>
                    </a>
                    
                    <a href="https://wa.me/79057682205" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 text-2xl hover:text-secondary transition-colors">
                      <Icon name="Phone" size={32} />
                      <span>+7 905 768 22 05</span>
                    </a>
                  </div>
                </div>
              </Card>

              <div className="mt-16">
                <p className="text-xl opacity-75">Centre digital & media — ваш путь к успеху в России</p>
              </div>
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
            className="w-16 h-16 rounded-full shadow-2xl"
          >
            <Icon name="ChevronLeft" size={28} />
          </Button>
          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            size="lg"
            className="w-16 h-16 rounded-full shadow-2xl bg-secondary hover:bg-secondary/90"
          >
            <Icon name="ChevronRight" size={28} />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="fixed bottom-10 left-28 text-lg font-bold text-primary z-50 bg-white px-4 py-2 rounded-full shadow-lg">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}