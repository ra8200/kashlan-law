import personalCardData from './personalCards'
import criminalCardData from './criminalCards'

export interface CaseType {
  title: string
  description: string
  image: string
}

export interface Specialty {
  slug: string
  title: string
  caseTypes: CaseType[]
}

/** map of specialty‐slug → Specialty data */
export const specialties: Record<string, Specialty> = {
  personal: {
    slug: 'personal',
    title: 'Personal Injury',
    caseTypes: personalCardData,
  },
  criminal: {
    slug: 'criminal',
    title: 'Criminal Defense',
    caseTypes: criminalCardData,
  },
}
