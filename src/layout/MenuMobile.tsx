import React, { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Drawer, IconButton, List, ListItemButton, ListItemButtonProps, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
import navConfig from './navConfig'
import { useTranslation } from 'react-i18next'

export default function MenuMobile() {
  const { t: translate } = useTranslation()

  const [open, setOpen] = useState(false);

  const handleOpenDrawer = () => {
    setOpen(true)
  }

  const handleCloseDrawer = () => {
    setOpen(false)
  }

  return (
    <>
      <IconButton
        onClick={handleOpenDrawer}
        sx={{
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent"
          }
        }}
      >
        <AiOutlineMenu />
      </IconButton>
      <Drawer
        anchor="top"
        open={open}
        onClose={handleCloseDrawer}
        ModalProps={{
          keepMounted: true
        }}
      >
        <List>
          {navConfig.map(item => (
            <MenuMobileItem
              title={translate(`${item.key}.title`)}
              path={item.path} />
          ))}
        </List>
      </Drawer>
    </>
  )
}

function CustomListItem<C extends React.ElementType>(
  props: ListItemButtonProps<C, {component?: C}>) {

  return (
    <ListItemButton {...props}>
      {props.children}
    </ListItemButton>
  )
}

type MenuMobileItemProps = {
  title: string,
  path: string,
}

function MenuMobileItem({ title, path }: MenuMobileItemProps) {
  return (
    <CustomListItem
      to={path}
      component={NavLink}
      end={path === '/'}
    >
      <ListItemText
        sx={{ textTransform: 'capitalize' }}
        disableTypography primary={title}
      />
    </CustomListItem>
  )
}