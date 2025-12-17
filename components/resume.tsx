import type React from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import type { ResumeData } from "@/data/resume-versions"
import { parseFormattedText } from "@/lib/utils"

// Main resume data - edit this object to update the resume content

export function Resume({ data }: { data: ResumeData }) {
  return (
    <div className="bg-background shadow-xl rounded-lg overflow-hidden print:shadow-none print:rounded-none">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-5">
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-[0.02em]">{data.name}</h1>
            <div className="flex flex-wrap gap-3 mt-2 text-xs">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {data.location}
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                {data.phone}
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                {data.email}
              </div>
              {/* LinkedIn URL - Edit the href below to update your LinkedIn link */}
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/shashankshekhar963/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {data.linkedin}
                </a>
              </div>
              {/* Github URL - Edit the href below to update your Github link */}
              <div className="flex items-center gap-1.5">
                <Github className="w-4 h-4" />
                <a href="https://github.com/shashankshekhar-1911" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {data.github}
                </a>
              </div>
            </div>
          </div>
          {data.profileImage && (
            <div className="flex-shrink-0">
              <img
                src={data.profileImage || "/placeholder.svg"}
                alt={`${data.name} profile picture`}
                className="w-32 h-32 rounded-full object-cover border-4 border-primary-foreground/20"
              />
            </div>
          )}
        </div>
      </div>

      {/* Main Content - Now only Profile, Employment History, Education, Internships, Skills, and Hobbies */}
      <div className="px-6 py-6 space-y-6">
        {/* Profile */}
        <Section title="PROFILE">
          <p className="text-[13px] leading-[1.35] tracking-[0.01em] whitespace-pre-line text-foreground/90">
            {parseFormattedText(data.profile)}
          </p>
        </Section>

        {/* Employment History */}
        <Section title="EMPLOYMENT HISTORY">
          <div className="space-y-5">
            {data.employment.map((job, index) => (
              <JobEntry key={index} {...job} />
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="EDUCATION">
          <div className="space-y-3">
            {data.education.map((edu, index) => (
              <EducationEntry key={index} {...edu} />
            ))}
          </div>
        </Section>

        {/* Internships */}
        <Section title="INTERNSHIPS">
          <div className="space-y-5">
            {data.internships.map((internship, index) => (
              <JobEntry key={index} {...internship} />
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="SKILLS">
          <div className="flex flex-wrap gap-1.5">
            {data.skills.map((skill, index) => (
              <span key={index} className="text-[13px] text-foreground/90">
                {parseFormattedText(skill)}
                {index < data.skills.length - 1 && ","}
              </span>
            ))}
          </div>
        </Section>

        {/* Hobbies */}
        {/* <Section title="HOBBIES">
          <ul className="space-y-1 flex flex-wrap gap-x-3">
            {data.hobbies.map((hobby, index) => (
              <li key={index} className="text-[13px] text-foreground/90">
                {parseFormattedText(hobby)}
              </li>
            ))}
          </ul>
        </Section> */}
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-[11px] font-bold tracking-wide mb-2.5 text-primary border-b border-border pb-1">{title}</h2>
      {children}
    </div>
  )
}

function JobEntry({
  title,
  company,
  location,
  period,
  achievements,
}: {
  title: string
  company: string
  location?: string
  period: string
  achievements: string[]
}) {
  return (
    <div>
      <div className="mb-1.5">
        <h3 className="font-semibold text-sm leading-[1.25]">
          {parseFormattedText(title)} at {parseFormattedText(company)}
          {location && `, ${parseFormattedText(location)}`}
        </h3>
        <p className="text-[11px] text-muted-foreground italic leading-[1.2]">{parseFormattedText(period)}</p>
      </div>
      <ul className="space-y-1.5">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-[13px] leading-[1.35] text-foreground/90 flex gap-2">
            <span className="text-primary text-[13px] leading-[1.35]">•</span>
            <span className="flex-1">{parseFormattedText(achievement)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function EducationEntry({
  degree,
  institution,
  location,
  period,
  grades,
}: {
  degree: string
  institution: string
  location?: string
  period: string
  grades?: string
}) {
  return (
    <div>
      <h3 className="font-semibold text-sm leading-[1.25]">
        {parseFormattedText(degree)}, {parseFormattedText(institution)}
        {location && `, ${parseFormattedText(location)}`}
      </h3>
      <p className="text-[11px] text-muted-foreground italic leading-[1.2]">{parseFormattedText(period)}</p>
      {grades && (
        <p className="text-[11px] text-muted-foreground italic leading-[1.2]">{parseFormattedText(grades)}</p>
      )}
    </div>
  )
}
