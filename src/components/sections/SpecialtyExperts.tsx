import { instructors } from '@/data/content'
import { InstructorCard } from '@/components/ui/InstructorCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function SpecialtyExperts() {
  return (
    <section id="instructors" className="section-padding bg-[#060b18]">
      <div className="container-wide">
        <ScrollReveal className="mb-10 text-center md:mb-12">
          <p className="eyebrow">Inside brAInify</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            7 AI mentors. Seven specialties.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Meet the instructors guiding each path — the same mentors you&apos;ll
            learn with inside the app.
          </p>
        </ScrollReveal>

        {/* All 7 side by side — scroll on mobile, full row on desktop */}
        <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 snap-x snap-mandatory [scrollbar-width:none] sm:gap-4 lg:mx-0 lg:grid lg:grid-cols-7 lg:gap-3 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {instructors.map((person, index) => (
            <ScrollReveal
              key={person.id}
              delay={index * 0.04}
              className="w-[min(46vw,168px)] shrink-0 snap-center lg:w-auto lg:min-w-0"
            >
              <InstructorCard
                name={person.name}
                role={person.role}
                image={person.image}
                compact
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
