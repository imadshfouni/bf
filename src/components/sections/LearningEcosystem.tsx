import { ecosystemFeatures } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function LearningEcosystem() {
  return (
    <section id="ecosystem" className="section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-card p-2">
              <img
                src="/examples/app-preview.png"
                alt="brAInify learning dashboard"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2" delay={0.1}>
            <p className="eyebrow">Inside the app</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              A learning ecosystem
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Project-led lessons, gamified progress, XP, and streaks — built in
              so you actually finish.
            </p>

            <ul className="mt-10 space-y-6">
              {ecosystemFeatures.map((feature) => (
                <li
                  key={feature.title}
                  className="border-l-2 border-cyan-500/40 pl-5"
                >
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
