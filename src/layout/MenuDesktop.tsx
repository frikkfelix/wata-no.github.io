import React from 'react'
import { Stack, Link } from '@mui/material'
import { NavLink as RouterLink, NavLinkProps } from 'react-router-dom'
import navConfig from './navConfig'
import { useTranslation } from 'react-i18next'

export default function MenuDesktop() {
  const { t: translate } = useTranslation()

  return (
    <Stack direction="row">
      {navConfig.map(item => (
        <DesktopMenuItem
          title={translate(`${item.key}.title`)}
          path={item.path}
        />
      ))}
    </Stack>
  )
}

type DesktopMenuItemProps = {
  title: string,
  path: string
}

const NavLink = React.forwardRef<
  any,
  Omit<NavLinkProps, 'to'> & { href: NavLinkProps['to'] }
  >((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

function DesktopMenuItem({ title, path }: DesktopMenuItemProps) {
  return (
    <Link
      sx={{
        mr: 4,
        color: 'text.primary',
        '&:hover': {
          color: 'action.hover',
          opacity: 0.48,
          textDecoration: 'none',
        },
        textTransform: 'capitalize'
      }}
      href={path}
      component={NavLink}
    >
      {title}
    </Link>
  )
}