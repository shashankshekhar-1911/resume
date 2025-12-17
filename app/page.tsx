"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Resume } from "@/components/resume"
import { PrinterIcon, Upload, FileText } from "lucide-react"
import { resumeVersions } from "@/data/resume-versions"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { exportToDocx } from "@/lib/export-docx"

export default function Home() {
  const [selectedVersion, setSelectedVersion] = useState<keyof typeof resumeVersions>("Version 1: Digital Transformation")
  const [profileImage, setProfileImage] = useState<string | undefined>(resumeVersions[selectedVersion].profileImage)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const currentResumeData = {
    ...resumeVersions[selectedVersion],
    profileImage: profileImage,
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4 print:hidden">
          <div className="flex gap-3">
            <Select
              value={selectedVersion}
              onValueChange={(value) => {
                setSelectedVersion(value as keyof typeof resumeVersions)
                setProfileImage(resumeVersions[value as keyof typeof resumeVersions].profileImage)
              }}
            >
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select resume version" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(resumeVersions).map((version) => (
                  <SelectItem key={version} value={version}>
                    {version}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2 relative cursor-pointer bg-transparent">
              <Upload className="w-4 h-4" />
              Upload Photo
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </Button>
          </div>

          <div className="flex gap-2">
            <Button onClick={() => window.print()} className="gap-2">
              <PrinterIcon className="w-4 h-4" />
              Export to PDF
            </Button>
            <Button onClick={() => exportToDocx(currentResumeData)} className="gap-2">
              <FileText className="w-4 h-4" />
              Export to DOCX
            </Button>
          </div>
        </div>
        <Resume data={currentResumeData} />
      </div>
    </div>
  )
}
