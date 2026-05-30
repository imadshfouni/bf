import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ClaudeExample } from '@/components/ui/ClaudeExample'
import { APP_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'

export function ToolExamples() {
  return (
    <section className="section-padding border-t border-white/[0.04]">
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">Learn with Claude</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Real tools. Real workflows. Real output.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Practice inside brAInify with the same AI stack professionals use
              — guided lessons walk you through Claude, automation, and more.
            </p>
            <Button href={APP_URL} className="mt-8">
              Open brAInify App
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <ClaudeExample />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="mt-16">
          <p className="eyebrow mb-6 text-center">Inside brAInify</p>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-cyan-500/20 bg-navy-card p-2 shadow-xl shadow-blue-500/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-500/20" />
            <img
              src="/examples/app-preview.png"
              alt="brAInify app — learning paths and AI mentor"
              className="relative w-full rounded-xl object-contain"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">
            Your dashboard: paths, progress, and AI mentor in one place
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
