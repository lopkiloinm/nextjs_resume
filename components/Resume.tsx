'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ResumeData, ResumeEntry, SkillItem } from '@/types/resume'
import { Mail, Phone, Github, Linkedin, MapPin, Calendar, Briefcase, GraduationCap, Folder, ChevronDown } from 'lucide-react'

export function Resume({ data }: { data: ResumeData }) {
  const { author, date, education, experience, projects, skills } = data

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <header className="bg-indigo-700 text-white p-6">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold font-serif"
        >
          {`${author.firstname} ${author.lastname}`}
        </motion.h1>
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-xl"
        >
          {author.positions.join(' | ')}
        </motion.p>
      </header>
      <div className="p-6 space-y-6">
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 text-sm"
        >
          <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> {author.email}</p>
          <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> {author.phone}</p>
          <p className="flex items-center"><Github className="w-4 h-4 mr-2" /> {author.github}</p>
          <p className="flex items-center"><Linkedin className="w-4 h-4 mr-2" /> {author.linkedin}</p>
          <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {author.address}</p>
        </motion.section>
        <Section title="Education" icon={<GraduationCap />} entries={education} />
        <Section title="Experience" icon={<Briefcase />} entries={experience} />
        <Section title="Projects" icon={<Folder />} entries={projects} />
        <SkillsSection skills={skills} />
      </div>
      <motion.footer 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-100 p-4 text-center text-sm text-gray-600"
      >
        <p className="flex items-center justify-center">
          <Calendar className="w-4 h-4 mr-2" /> Generated on {date}
        </p>
      </motion.footer>
    </motion.div>
  )
}

function Section({ title, icon, entries }: { title: string; icon: React.ReactNode; entries: ResumeEntry[] }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="space-y-4"
    >
      <motion.h2 
        className="text-2xl font-bold text-indigo-700 flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {title}
        <ChevronDown className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {entries.map((entry, index) => (
              <motion.div 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="ml-6 border-l-2 border-indigo-200 pl-4 space-y-2 mb-4"
              >
                <h3 className="text-xl font-semibold font-serif">{entry.title}</h3>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" /> {entry.location}
                  <span className="mx-2">|</span>
                  <Calendar className="w-4 h-4 mr-2" /> {entry.date}
                </p>
                <p className="text-gray-800">{entry.description}</p>
                <ul className="list-disc list-inside space-y-1">
                  {entry.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      className="text-gray-700"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

function SkillsSection({ skills }: { skills: SkillItem[] }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="space-y-4"
    >
      <motion.h2 
        className="text-2xl font-bold text-indigo-700 flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Skills
        <ChevronDown className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">{skill.category}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {skill.skills.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      className="text-gray-700"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

