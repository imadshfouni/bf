import { motion } from 'framer-motion'

/** Claude-style chat UI — matches real product look (terracotta accent) */
export function ClaudeExample() {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-[#D97757]/25 bg-[#1a1512] shadow-2xl shadow-[#D97757]/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#14110f] px-4 py-3">
        <img
          src="/logos/claude.svg"
          alt="Claude"
          className="h-7 w-7"
        />
        <div>
          <p className="text-sm font-semibold text-[#ececec]">Claude</p>
          <p className="text-[11px] text-[#a8a29e]">Sonnet · brAInify lesson</p>
        </div>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div className="rounded-xl bg-[#2a2420] px-4 py-3">
          <p className="text-sm leading-relaxed text-[#e7e5e4]">
            Help me draft a client proposal for an AI automation project. Keep it
            professional but approachable.
          </p>
        </div>
        <div className="flex gap-3">
          <img src="/logos/claude.svg" alt="" className="mt-1 h-6 w-6 shrink-0" />
          <div className="min-w-0 flex-1 space-y-2">
            <p className="text-sm leading-relaxed text-[#d6d3d1]">
              Here&apos;s a structured proposal outline with scope, timeline, and
              pricing tiers you can customize for your freelance path project…
            </p>
            <div className="flex flex-wrap gap-2">
              {['Scope', 'Deliverables', 'Timeline'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[#D97757]/30 bg-[#D97757]/10 px-2 py-0.5 text-[10px] font-medium text-[#f0a88c]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] px-4 py-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#14110f] px-3 py-2.5">
          <span className="flex-1 text-sm text-[#78716c]">Reply to Claude…</span>
          <span className="rounded-lg bg-[#D97757] px-3 py-1 text-xs font-semibold text-white">
            Send
          </span>
        </div>
      </div>
    </motion.div>
  )
}
