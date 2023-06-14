export type SiteConfig  = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
      twitter?: string
      instagram?: string
      facebook?: string
    }
  }