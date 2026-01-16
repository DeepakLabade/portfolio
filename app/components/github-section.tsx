import React from 'react'
import {motion} from "motion/react"
import { BasicVariants } from '../variants/basic-variant'


const WEEKS = 52
const DAYS = 7

const intensity = [
  "bg-emerald-400/10",
  "bg-emerald-400/20",
  "bg-emerald-400/40",
  "bg-emerald-400/70",
]


const GithubSection = () => {
  return (
    <motion.div
    variants={BasicVariants}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          transition={{duration: 0.3, delay: 0.2}}
    >
        <div className="relative overflow-hidden rounded-2xl bg-zinc-900 p-6">
      
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${WEEKS}, 1fr)` }}
      >
        {Array.from({ length: WEEKS * DAYS }).map((_, i) => {
          const level =
            intensity[Math.floor(Math.random() * intensity.length)]

          return (
            <div
              key={i}
              className={`w-[10px] h-[10px] rounded-sm ${level}
                animate-[fade_3.5s_ease-in-out_infinite]`}
              style={{
                animationDelay: `${i * 12}ms`,
              }}
            />
          )
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-zinc-900 via-transparent to-zinc-900" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-zinc-900" />

      <div className="relative z-10 mt-6">
        <h3 className="text-lg font-medium text-white">
          Building consistently
        </h3>
        <p className="text-sm text-zinc-400">
          A visual rhythm of my daily development work
        </p>
      </div>
    </div>
    </motion.div>
  )
}

export default GithubSection