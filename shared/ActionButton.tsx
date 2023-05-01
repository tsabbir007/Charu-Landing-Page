import React from 'react'
import Link from 'next/link'
import { SelectedPage } from './types'

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <Link
    className='rounded bg-primary-100 text-white py-2 px-4 focus:outline-none focus:shadow-outline'
    style={{backgroundColor: '#8b3dff', color: '#fff', borderRadius: '4px', padding:'0.5 1rem'}}
    onClick={() => setSelectedPage(SelectedPage.Charu)}
    href={`${SelectedPage.Charu}`}
    >
        {children}
    </Link>
  )
}
export default ActionButton