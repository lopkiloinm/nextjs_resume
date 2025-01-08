'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { generateResumeData } from '@/utils/generateResumeData'

export default function Home() {
  const [textInput, setTextInput] = useState('')
  const [error, setError] = useState('')
  const [aiResponse, setAiResponse] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      // Always generate data from OpenAI using the text input
      const data = await generateResumeData(textInput)
      setAiResponse(JSON.stringify(data, null, 2))
      
      localStorage.setItem('resumeData', JSON.stringify(data))
      router.push('/resume')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process resume data')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Resume Text Input</h1>
      <form onSubmit={handleSubmit}>
        <Textarea
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter your resume details here..."
          className="h-96 mb-4"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Button type="submit">Generate Resume</Button>
      </form>
      
      {aiResponse && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">OpenAI Response:</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
            {aiResponse}
          </pre>
        </div>
      )}
    </div>
  )
}

