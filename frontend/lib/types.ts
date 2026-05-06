export interface Program {
  id: string
  title: string
  description: string
  features: string[]
}

export interface AboutDictionary {
  about: {
    title: string
    subtitle: string
    history: {
      title: string
      content: string
    }
    mission: {
      title: string
      content: string
    }
    vision: {
      title: string
      content: string
    }
    values: {
      title: string
      items: string[]
    }
  }
  programs: {
    title: string
    subtitle: string
    list: Program[]
  }
  common: {
    mission: string
    vision: string
    learnMore: string
    applyNow: string
  }
}
