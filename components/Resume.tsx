import { ResumeData, ResumeEntry, SkillItem } from '@/types/resume'

export function Resume({ data }: { data: ResumeData }) {
  const { author, date, education, experience, projects, skills } = data

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <header className="bg-gray-800 text-white p-6">
        <h1 className="text-3xl font-bold">{`${author.firstname} ${author.lastname}`}</h1>
        <p className="mt-2">{author.positions.join(' | ')}</p>
      </header>
      <div className="p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>Email: {author.email}</p>
          <p>Phone: {author.phone}</p>
          <p>GitHub: {author.github}</p>
          <p>LinkedIn: {author.linkedin}</p>
          <p>Address: {author.address}</p>
        </section>
        <Section title="Education" entries={education} />
        <Section title="Experience" entries={experience} />
        <Section title="Projects" entries={projects} />
        <SkillsSection skills={skills} />
      </div>
      <footer className="bg-gray-200 p-4 text-center">
        <p>Generated on {date}</p>
      </footer>
    </div>
  )
}

function Section({ title, entries }: { title: string; entries: ResumeEntry[] }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {entries.map((entry, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{entry.title}</h3>
          <p className="text-gray-600">{entry.location} | {entry.date}</p>
          <p className="mt-1">{entry.description}</p>
          <ul className="list-disc list-inside mt-2">
            {entry.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

function SkillsSection({ skills }: { skills: SkillItem[] }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold">{skill.category}</h3>
            <ul className="list-disc list-inside">
              {skill.skills.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

