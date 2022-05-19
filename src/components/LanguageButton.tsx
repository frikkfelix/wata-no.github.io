import React from 'react'
import { IconButton, SvgIcon } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function LanguageButton() {
  const { i18n } = useTranslation();

  console.log(i18n)
  return (
    <IconButton
      onClick={() => i18n.changeLanguage(i18n.language === 'no' ? 'en' : 'no')}
      sx={{
        "&.MuiButtonBase-root:hover": {
          bgcolor: "transparent"
        }
      }}
    >
      <SvgIcon>
        {i18n.language === 'no' ?
          <svg xmlns='http://www.w3.org/2000/svg' id='flag-icons-no' viewBox='0 0 640 480'>
            <path fill='#ed2939' d='M0 0h640v480H0z' />
            <path fill='#fff' d='M180 0h120v480H180z' />
            <path fill='#fff' d='M0 180h640v120H0z' />
            <path fill='#002664' d='M210 0h60v480h-60z' />
            <path fill='#002664' d='M0 210h640v60H0z' />
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 640 480">
            <path fill="#012169" d="M0 0h640v480H0z"/>
            <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
            <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
            <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
            <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
          </svg>}
      </SvgIcon>
    </IconButton>
  )
}
