import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx'
import { saveAs } from 'file-saver'
import type { ResumeData } from '@/data/resume-versions'

// Helper function to parse formatted text and convert to docx TextRuns
function parseTextToRuns(text: string): TextRun[] {
  const runs: TextRun[] = []
  const pattern = /(\*\*.*?\*\*|\*.*?\*|_.*?_|@.*?@\(.*?\))/g
  const parts = text.split(pattern).filter(Boolean)

  parts.forEach((part) => {
    // Links: @text@(url) - just extract text, underline it
    const linkMatch = part.match(/^@(.*?)@\((.*?)\)$/)
    if (linkMatch) {
      runs.push(new TextRun({ text: linkMatch[1], underline: {} }))
      return
    }
    // Bold: **text**
    if (part.startsWith('**') && part.endsWith('**')) {
      runs.push(new TextRun({ text: part.slice(2, -2), bold: true }))
      return
    }
    // Italic: *text*
    if (part.startsWith('*') && part.endsWith('*')) {
      runs.push(new TextRun({ text: part.slice(1, -1), italics: true }))
      return
    }
    // Underline: _text_
    if (part.startsWith('_') && part.endsWith('_')) {
      runs.push(new TextRun({ text: part.slice(1, -1), underline: {} }))
      return
    }
    // Plain text
    if (part) {
      runs.push(new TextRun({ text: part }))
    }
  })

  return runs
}

export async function exportToDocx(data: ResumeData) {
  const children: Paragraph[] = []

  // Header - Name
  children.push(
    new Paragraph({
      text: data.name,
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.LEFT,
      spacing: { after: 200 },
    })
  )

  // Contact Information
  const contactInfo = [
    data.location,
    data.phone,
    data.email,
    data.linkedin,
    data.github,
  ]
    .filter(Boolean)
    .join(' | ')

  children.push(
    new Paragraph({
      text: contactInfo,
      spacing: { after: 400 },
    })
  )

  // Profile
  children.push(
    new Paragraph({
      text: 'PROFILE',
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 200, after: 200 },
    })
  )

  const profileRuns = parseTextToRuns(data.profile)
  children.push(
    new Paragraph({
      children: profileRuns,
      spacing: { after: 400 },
    })
  )

  // Employment History
  children.push(
    new Paragraph({
      text: 'EMPLOYMENT HISTORY',
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 200, after: 200 },
    })
  )

  data.employment.forEach((job) => {
    const titleText = `${job.title} at ${job.company}${job.location ? `, ${job.location}` : ''}`
    children.push(
      new Paragraph({
        text: titleText,
        heading: HeadingLevel.HEADING_2,
        spacing: { after: 100 },
      })
    )

    children.push(
      new Paragraph({
        text: job.period,
        italics: true,
        spacing: { after: 200 },
      })
    )

    job.achievements.forEach((achievement) => {
      const achievementRuns = parseTextToRuns(achievement)
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: '• ', bold: true }),
            ...achievementRuns,
          ],
          spacing: { after: 150 },
        })
      )
    })
  })

  // Education
  children.push(
    new Paragraph({
      text: 'EDUCATION',
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
    })
  )

  data.education.forEach((edu) => {
    const degreeText = `${edu.degree}, ${edu.institution}${edu.location ? `, ${edu.location}` : ''}`
    children.push(
      new Paragraph({
        text: degreeText,
        heading: HeadingLevel.HEADING_2,
        spacing: { after: 100 },
      })
    )

    children.push(
      new Paragraph({
        text: edu.period,
        italics: true,
        spacing: { after: edu.grades ? 100 : 200 },
      })
    )

    if (edu.grades) {
      const gradesRuns = parseTextToRuns(edu.grades)
      children.push(
        new Paragraph({
          children: gradesRuns,
          italics: true,
          spacing: { after: 200 },
        })
      )
    }
  })

  // Internships
  if (data.internships && data.internships.length > 0) {
    children.push(
      new Paragraph({
        text: 'INTERNSHIPS',
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 200 },
      })
    )

    data.internships.forEach((internship) => {
      const titleText = `${internship.title} at ${internship.company}${internship.location ? `, ${internship.location}` : ''}`
      children.push(
        new Paragraph({
          text: titleText,
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 },
        })
      )

      children.push(
        new Paragraph({
          text: internship.period,
          italics: true,
          spacing: { after: 200 },
        })
      )

      internship.achievements.forEach((achievement) => {
        const achievementRuns = parseTextToRuns(achievement)
        children.push(
          new Paragraph({
            children: [
              new TextRun({ text: '• ', bold: true }),
              ...achievementRuns,
            ],
            spacing: { after: 150 },
          })
        )
      })
    })
  }

  // Skills
  children.push(
    new Paragraph({
      text: 'SKILLS',
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
    })
  )

  const skillsText = data.skills.join(', ')
  children.push(
    new Paragraph({
      text: skillsText,
      spacing: { after: 400 },
    })
  )

  // Create document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children,
      },
    ],
  })

  // Generate and download
  const blob = await Packer.toBlob(doc)
  const fileName = `${data.name.replace(/\s+/g, '_')}_Resume.docx`
  saveAs(blob, fileName)
}

