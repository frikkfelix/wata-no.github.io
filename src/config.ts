import { enUS, nbNO } from '@mui/material/locale'

export const languages = [
  {
    value: 'no',
    label: 'Norsk',
    systemValue: nbNO,
    flag: '/flags/no.svg'
  },
  {
    value: 'en',
    label: 'English',
    systemValue: enUS,
    flag: '/flags/gb.svg'
  },
]

export const defaultLanguage = languages[0]