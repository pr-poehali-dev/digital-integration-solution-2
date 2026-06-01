import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Мгновенные переводы",
    description: "Переводы между счетами и на карты любых банков за секунды — круглосуточно, без выходных.",
    icon: "zap",
    badge: "24/7",
  },
  {
    title: "Банковская защита",
    description: "Шифрование по стандартам ISO 27001, двухфакторная аутентификация и биометрический вход.",
    icon: "lock",
    badge: "Защита",
  },
  {
    title: "Умная аналитика",
    description: "ИИ анализирует ваши расходы, находит экономию и помогает достигать финансовых целей.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "Кешбэк до 10%",
    description: "Возвращаем деньги за покупки в любимых категориях — еда, путешествия, развлечения.",
    icon: "target",
    badge: "Выгода",
  },
  {
    title: "Глобальные платежи",
    description: "Оплата в любой точке мира без скрытых комиссий. Выгодный курс обмена валют онлайн.",
    icon: "globe",
    badge: "Мир",
  },
  {
    title: "Интеграция сервисов",
    description: "Подключайте подписки, коммунальные платежи и любые сервисы в одном приложении.",
    icon: "link",
    badge: "Удобно",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Банкинг нового поколения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё необходимое для управления деньгами — в одном приложении
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}