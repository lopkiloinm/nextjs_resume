interface OpenAIResponse {
    choices: [{
      message: {
        content: string;
      };
    }];
  }
  
  export async function generateResumeData(question: string = ''): Promise<any> {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  
    const requestBody = {
      model: "gpt-4o-2024-08-06",
      messages: [
        {
          role: "system",
          content: "You generate resume."
        },
        {
          role: "user",
          content: question
        }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          "name": "math_response",
          "strict": true,
          "schema": {
            "type": "object",
            "$defs": {
              "skill_item": {
                "type": "object",
                "required": [
                  "category",
                  "skills"
                ],
                "properties": {
                  "skills": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "List of skills under the category."
                  },
                  "category": {
                    "type": "string",
                    "description": "Category of skills."
                  }
                },
                "additionalProperties": false
              },
              "resume_entry": {
                "type": "object",
                "required": [
                  "title",
                  "location",
                  "date",
                  "description",
                  "items"
                ],
                "properties": {
                  "date": {
                    "type": "string",
                    "description": "Date of the entry."
                  },
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Bullet points or descriptions under the entry."
                  },
                  "title": {
                    "type": "string",
                    "description": "Title of the entry."
                  },
                  "location": {
                    "type": "string",
                    "description": "Location of the entry."
                  },
                  "description": {
                    "type": "string",
                    "description": "Description of the entry."
                  }
                },
                "additionalProperties": false
              }
            },
            "required": [
              "author",
              "date",
              "language",
              "colored-headers",
              "show-footer",
              "education",
              "experience",
              "projects",
              "skills"
            ],
            "properties": {
              "date": {
                "type": "string",
                "description": "Current date."
              },
              "author": {
                "type": "object",
                "required": [
                  "firstname",
                  "lastname",
                  "email",
                  "phone",
                  "github",
                  "birth",
                  "linkedin",
                  "address",
                  "positions"
                ],
                "properties": {
                  "email": {
                    "type": "string",
                    "description": "Email address of the author."
                  },
                  "phone": {
                    "type": "string",
                    "description": "Phone number of the author."
                  },
                  "birth": { // Corrected from "birthe" to "birth"
                    "type": "string",
                    "description": "Birth date of the author."
                  },
                  "github": {
                    "type": "string",
                    "description": "GitHub username of the author."
                  },
                  "address": {
                    "type": "string",
                    "description": "Address of the author."
                  },
                  "lastname": {
                    "type": "string",
                    "description": "Last name of the author."
                  },
                  "linkedin": {
                    "type": "string",
                    "description": "LinkedIn profile of the author."
                  },
                  "firstname": {
                    "type": "string",
                    "description": "First name of the author."
                  },
                  "positions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "List of positions held by the author."
                  }
                },
                "description": "The author of the resume containing personal details.",
                "additionalProperties": false
              },
              "skills": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/skill_item"
                },
                "description": "List of skills for author."
              },
              "language": {
                "type": "string",
                "description": "Language preference."
              },
              "projects": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/resume_entry"
                },
                "description": "List of project entries."
              },
              "education": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/resume_entry"
                },
                "description": "List of educational entries."
              },
              "experience": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/resume_entry"
                },
                "description": "List of experience entries."
              },
              "show-footer": {
                "type": "boolean",
                "description": "Indicates if footer should be shown."
              },
              "colored-headers": {
                "type": "boolean",
                "description": "Indicates if headers should be colored."
              }
            },
            "additionalProperties": false
          }
        }
      }
    };
  
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        const errorDetail = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, details: ${errorDetail}`);
      }
  
      const data = await response.json() as OpenAIResponse;
      return JSON.parse(data.choices[0].message.content);
    } catch (error: any) {
      console.error('Failed to generate resume data:', error);
      throw new Error('Failed to generate resume data: ' + error.message);
    }
  }