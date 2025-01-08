'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Resume } from '@/components/Resume'
import { ResumeData } from '@/types/resume'

export default function ResumePage() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)

  useEffect(() => {
    const data = localStorage.getItem('resumeData')
    if (data) {
      setResumeData(JSON.parse(data))
    }
  }, [])

  if (!resumeData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="w-16 h-16 bg-indigo-500"
        />
      </div>
    )
  }

  return <Resume data={resumeData} />
}

