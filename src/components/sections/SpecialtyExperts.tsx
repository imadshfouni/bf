import {
  featuredInstructorsRow1,
  featuredInstructorsRow2,
  otherInstructors,
} from '@/data/content'
import { InstructorCard } from '@/components/ui/InstructorCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

function FeaturedRow({
  people,
  delayStart = 0,
}: {
  people: typeof featuredInstructorsRow1
  delayStart?: number
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
      {people.map((person, index) => (
        <ScrollReveal key={person.id} delay={delayStart + index * 0.08}>
          <InstructorCard
            name={person.name}
            role={person.role}
            image={person.image}
            featured
          />
        </ScrollReveal>
      ))}
    </div>
  )
}

export function SpecialtyExperts() {
  return (
    <section id="instructors" className="section-padding bg-[#060b18]">
      <div className="container-wide">
        <ScrollReveal className="mb-10 text-center md:mb-14">
          <p className="eyebrow">Inside brAInify</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            7 AI mentors. Seven specialties.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Meet the instructors guiding each path — the same mentors you&apos;ll
            learn with inside the app.
          </p>
        </ScrollReveal>

        <div className="mb-8 space-y-6 md:mb-12 md:space-y-8">
          <FeaturedRow people={featuredInstructorsRow1} />
          <FeaturedRow people={featuredInstructorsRow2} delayStart={0.1} />
        </div>

        {otherInstructors.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
            {otherInstructors.map((person, index) => (
              <ScrollReveal key={person.id} delay={index * 0.05}>
                <InstructorCard
                  name={person.name}
                  role={person.role}
                  image={person.image}
                />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
