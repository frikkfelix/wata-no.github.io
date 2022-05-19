import React from 'react'
import { Stack, Link } from '@mui/material'
import { NavLink, NavLinkProps } from 'react-router-dom'
import navConfig from './navConfig'
import { useTranslation } from 'react-i18next'

export default function DesktopMenu() {
  const { t: translate } = useTranslation()

  return (
    <Stack direction="row">
      {navConfig.map(item => (
        <DesktopMenuItem
          title={translate(item.key)}
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

const LinkBehavior = React.forwardRef<
  any,
  Omit<NavLinkProps, 'to'> & { href: NavLinkProps['to'] }
  >((props, ref) => {
  const { href, ...other } = props;
  return <NavLink ref={ref} to={href} {...other} />;
});

function DesktopMenuItem({ title, path }: DesktopMenuItemProps) {
  return (
    <Link
      sx={{
        marginRight: 2,
        color: 'text.primary',
        '&:hover': {
          color: 'action.hover',
          opacity: 0.48,
          textDecoration: 'none',
        },
        textTransform: 'capitalize'
      }}
      href={path}
      component={LinkBehavior}
    >
      {title}
    </Link>
  )
}