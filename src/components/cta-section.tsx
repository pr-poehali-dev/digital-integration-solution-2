import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Откройте счёт за 5 минут</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Присоединяйтесь к 500 000 клиентов, которые уже доверяют NovaBank свои финансы.
            Бесплатная карта, кешбэк и умная аналитика — с первого дня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 pulse-button text-lg px-8 py-4"
            >
              Открыть счёт бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white text-lg px-8 py-4 bg-transparent"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}