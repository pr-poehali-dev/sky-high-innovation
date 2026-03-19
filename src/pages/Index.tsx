import { Hero } from "@/components/Hero";
import Icon from "@/components/ui/icon";

const products = [
  {
    icon: "Cpu",
    title: "Материнские платы",
    desc: "Серверные и десктопные материнские платы из реестра МинПромТорга для корпоративных задач.",
  },
  {
    icon: "Monitor",
    title: "Моноблоки",
    desc: "Компактные моноблочные рабочие станции — производительность без лишних проводов.",
  },
  {
    icon: "Server",
    title: "Системные блоки",
    desc: "Корпоративные системные блоки с возможностью кастомизации под любые задачи.",
  },
  {
    icon: "Layers",
    title: "Автоматизированные рабочие места",
    desc: "Комплексное оснащение рабочих мест под ключ — от подбора до инсталляции.",
  },
];

const advantages = [
  { value: "1000+", label: "Рабочих мест оснащено" },
  { value: "РФ", label: "Реестр МинПромТорга" },
  { value: "B2G/B2B", label: "Госструктуры и корпорации" },
  { value: "24/7", label: "Техническая поддержка" },
];

export default function Index() {
  return (
    <>
      <Hero />

      {/* Products */}
      <section id="products" className="py-24 border-t border-white/10">
        <div className="container">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4">
            Продукция
          </p>
          <h2 className="text-3xl sm:text-4xl font-sentient mb-16 max-w-xl">
            Техника из реестра <i className="font-light">МинПромТорга</i>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {products.map((p) => (
              <div
                key={p.title}
                className="bg-background p-8 flex flex-col gap-6 group hover:bg-white/5 transition-colors duration-300"
              >
                <Icon name={p.icon as "Cpu"} size={28} className="text-foreground/60 group-hover:text-foreground transition-colors" />
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider mb-3">{p.title}</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="about" className="py-24 border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {advantages.map((a) => (
              <div key={a.label} className="bg-background py-12 px-8 text-center">
                <p className="text-4xl sm:text-5xl font-sentient mb-2">{a.value}</p>
                <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distributors */}
      <section id="distributors" className="py-24 border-t border-white/10">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
            <div className="lg:w-1/2">
              <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4">
                Дистрибьюторам
              </p>
              <h2 className="text-3xl sm:text-4xl font-sentient mb-6">
                Партнёрская <i className="font-light">программа</i>
              </h2>
              <p className="text-foreground/50 leading-relaxed mb-8">
                Предлагаем выгодные условия сотрудничества для дистрибьюторов и реселлеров. Работаем напрямую с производством — без посредников, по конкурентным ценам.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-sm uppercase text-primary hover:text-primary/80 transition-colors"
              >
                Стать партнёром <Icon name="ArrowRight" size={16} />
              </a>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              {[
                { icon: "BadgeCheck", text: "Прямые поставки с производства" },
                { icon: "ShieldCheck", text: "Официальное включение в реестр МинПромТорга" },
                { icon: "Truck", text: "Логистика по всей России" },
                { icon: "HeadphonesIcon", text: "Персональный менеджер и постпродажная поддержка" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4 py-5 border-b border-white/10 last:border-0">
                  <Icon name={item.icon as "BadgeCheck"} size={20} className="text-foreground/50 mt-0.5 shrink-0" />
                  <p className="font-mono text-sm text-foreground/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-white/10">
        <div className="container text-center">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4">
            Контакты
          </p>
          <h2 className="text-3xl sm:text-5xl font-sentient mb-6">
            Готовы оснастить <br />
            <i className="font-light">ваши рабочие места?</i>
          </h2>
          <p className="text-foreground/50 max-w-md mx-auto mb-12 leading-relaxed">
            Оставьте заявку — мы подберём оптимальную конфигурацию оборудования и подготовим коммерческое предложение.
          </p>
          <a
            href="mailto:info@komtek.ru"
            className="inline-flex items-center gap-3 font-mono text-sm uppercase border border-white/20 px-8 py-4 hover:bg-white/5 transition-colors"
          >
            <Icon name="Mail" size={16} />
            Написать нам
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-foreground/30">
            © 2024 KOMTEK. Производство и поставка компьютерной техники.
          </p>
          <p className="font-mono text-xs text-foreground/30">
            Реестр МинПромТорга РФ
          </p>
        </div>
      </footer>
    </>
  );
}
