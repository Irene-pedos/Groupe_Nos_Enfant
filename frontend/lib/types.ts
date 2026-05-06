export interface Program {
  id: string
  title: string
  description: string
  features: string[]
}

export interface NewsItem {
  id: string
  title: string
  date: string
  category: string
  summary: string
  image: string
}

export interface EventItem {
  id: string
  name: string
  date: string
  time: string
  location: string
  description: string
  category: string
}

export interface DonationTier {
  amount: number
  label: string
  description: string
}

export interface Dictionary {
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
  news: {
    title: string
    subtitle: string
    viewAll: string
    readMore: string
    imagePlaceholder: string
    categories: {
      all: string
      empowerment: string
      education: string
      innovation: string
      "success-story": string
    }
    items: NewsItem[]
  }
  events: {
    title: string
    subtitle: string
    viewAll: string
    register: string
    items: EventItem[]
  }
  donate: {
    title: string
    subtitle: string
    trustTitle: string
    trustDescription: string
    tiers: {
      title: string
      oneTime: string
      monthly: string
      custom: string
      customPlaceholder: string
      currency: string
      description: string
      items: DonationTier[]
    }
    form: {
      amountLabel: string
      nameLabel: string
      emailLabel: string
      submitButton: string
      secureNote: string
    }
    impact: {
      title: string
      sidebarTitle: string
      stats: { value: string; label: string }[]
    }
  }
}
