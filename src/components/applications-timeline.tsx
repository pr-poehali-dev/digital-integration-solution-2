import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Дебетовая карта",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Умная карта с мгновенным выпуском и кешбэком до 10%. Управляйте лимитами, замораживайте карту
            и настраивайте уведомления прямо в приложении.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Виртуальная карта за 2 минуты
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Кешбэк на все покупки до 10%
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Apple Pay и Google Pay
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Вклады и накопления",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Открывайте вклады под выгодный процент и копилки для целей. ИИ-советник поможет
            выбрать оптимальную стратегию накоплений под ваши задачи.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Вклады до 18% годовых
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Копилки с автопополнением
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Страхование до 1,4 млн рублей
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Кредиты и ипотека",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Быстрое одобрение кредита без похода в офис. Онлайн-заявка, решение за 5 минут,
            деньги на счёте в течение часа.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Решение за 5 минут онлайн
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Ставка от 9,9% годовых
            </div>
            <div className="flex items-center gap-3 text-blue-400 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Ипотека с онлайн-одобрением
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Продукты NovaBank</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Полный набор финансовых инструментов для жизни — от карты до ипотеки.
            Всё в одном приложении, доступно 24/7.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}