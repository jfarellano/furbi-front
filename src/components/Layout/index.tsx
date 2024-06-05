"use client"
import * as React from 'react';

import { MenuItem } from './styled';
import { usePathname } from 'next/navigation';
import { Badge, Person } from '@mui/icons-material';
import { SideBar } from './side-bar';
import { CentralBox } from './central-box';

const menuItems: MenuItem[] = [
  {
    title: 'Users',
    redirect: '/users',
    icon: <Person />
  },
  {
    title: 'Clients',
    redirect: '/clients',
    icon: <Badge />
  }
]

const boxPaths = [
  '/login',
  '/register'
]

export const Layout = ({children}:{children: React.ReactNode}) =>  {
  const pathname = usePathname()
 
  if (boxPaths.includes(pathname)) return <CentralBox>{children}</CentralBox>

  return (
    <SideBar>
      {children}
    </SideBar>
  )
}
