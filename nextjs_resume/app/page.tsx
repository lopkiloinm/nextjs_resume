'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { validateJSON } from '../utils/validateJSON'

export default function Home() {
  const [jsonInput, setJsonInput] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const validatedData = validateJSON(jsonInput)
      localStorage.setItem('resumeData', JSON.stringify(validatedData))
      router.push('/resume')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Resume JSON Input</h1>
      <form onSubmit={handleSubmit}>
        <Textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Paste your JSON here..."
          className="h-96 mb-4"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Button type="submit">Generate Resume</Button>
      </form>
    </div>
  )
}

