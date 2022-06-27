import React from 'react'
import { MenuItem, Select } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function LanguageSelect() {
  const { i18n } = useTranslation();

  return (
    <Select
      sx={{
        height: 44,
      }}
      value={i18n.language}
      displayEmpty
      onChange={(event) => {
        i18n.changeLanguage(event.target.value)
      }}
      MenuProps={{
        sx: {top: -5},
        disableScrollLock: true,
        autoFocus: false
      }}
    >
      <MenuItem value='no'>Norsk</MenuItem>
      <MenuItem value='en'>English</MenuItem>
    </Select>
  )
}
