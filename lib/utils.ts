import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import React from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseFormattedText(text: string): React.ReactNode[] {
  // Pattern matches: **bold**, *italic*, _underline_, or @text@(url) links
  const pattern = /(\*\*.*?\*\*|\*.*?\*|_.*?_|@.*?@\(.*?\))/g
  const parts = text.split(pattern).filter(Boolean)
  return parts.map((part, i) => {
    // Links with URL: @text@(url) - URLs are specified directly in resume data
    const linkMatch = part.match(/^@(.*?)@\((.*?)\)$/)
    if (linkMatch) {
      const [, linkText, linkUrl] = linkMatch
      return React.createElement('a', {
        key: i,
        href: linkUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'text-primary underline'
      }, linkText)
    }
    // Bold: **text**
    if (part.startsWith('**') && part.endsWith('**')) return React.createElement('strong', { key: i }, part.slice(2, -2))
    // Italic: *text*
    if (part.startsWith('*') && part.endsWith('*')) return React.createElement('em', { key: i }, part.slice(1, -1))
    // Underline: _text_
    if (part.startsWith('_') && part.endsWith('_')) return React.createElement('span', { key: i, className: 'underline' }, part.slice(1, -1))
    return part
  })
}
