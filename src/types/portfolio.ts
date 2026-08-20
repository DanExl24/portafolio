export interface ProjectDetail {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  githubUrl: string
  liveUrl?: string
  image?: string
  tags: string[]
  upcomingNotice?: string
  architecture: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    testing?: string[]
    integrations?: string[]
    dataProcessing?: string[]
  }
  highlights: string[]
}

export interface SkillCategory {
  title: string
  iconName: string
  skills: {
    name: string
    description: string
    highlight?: boolean
    badge?: string
  }[]
}

export interface SocialLink {
  label: string
  url: string
  icon: string
  action?: 'link' | 'copy' | 'download'
}
