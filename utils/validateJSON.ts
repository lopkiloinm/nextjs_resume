import Ajv from 'ajv'
import { ResumeData } from '@/types/resume'

const ajv = new Ajv()

const schema = {
  // ... (paste the entire JSON schema here)
}

const validate = ajv.compile(schema)

export function validateJSON(jsonString: string): ResumeData {
  try {
    const data = JSON.parse(jsonString)
    const valid = validate(data)

    if (!valid) {
      throw new Error(ajv.errorsText(validate.errors))
    }

    return data as ResumeData
  } catch (error) {
    throw new Error('Invalid JSON: ' + (error instanceof Error ? error.message : String(error)))
  }
}

