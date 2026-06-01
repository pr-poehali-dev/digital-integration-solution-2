import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как открыть счёт в NovaBank?",
      answer:
        "Всё онлайн: скачайте приложение, загрузите фото паспорта и сделайте селфи. Счёт открывается за 5 минут без похода в офис.",
    },
    {
      question: "Сколько стоит обслуживание карты?",
      answer:
        "Базовая карта и счёт — бесплатно навсегда. Никаких скрытых комиссий за обслуживание или смс-уведомления.",
    },
    {
      question: "Насколько безопасны мои деньги?",
      answer:
        "Все вклады застрахованы государством до 1,4 млн рублей. Данные защищены шифрованием банковского уровня, а операции подтверждаются биометрией.",
    },
    {
      question: "Как быстро проходят переводы?",
      answer:
        "Переводы внутри NovaBank — мгновенно. Переводы в другие банки по СБП — до 15 секунд круглосуточно.",
    },
    {
      question: "Есть ли поддержка 24/7?",
      answer:
        "Да, поддержка работает круглосуточно в чате приложения. Среднее время ответа — 2 минуты.",
    },
    {
      question: "Можно ли пользоваться NovaBank за рубежом?",
      answer:
        "Конечно. Карта работает в 180+ странах, оплата по выгодному курсу без дополнительных комиссий. Снятие наличных в партнёрских банкоматах бесплатно.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на самые популярные вопросы о NovaBank, безопасности и условиях обслуживания.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-blue-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-blue-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}