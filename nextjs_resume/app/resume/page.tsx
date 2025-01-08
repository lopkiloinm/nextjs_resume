'use client'

import { useEffect, useState } from 'react'
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
    return <div>Loading...</div>
  }

  return <Resume data={resumeData} />
}

