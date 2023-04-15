import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className='roundes-md bg-purple-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
    onClick={() => setSelectedPage(SelectedPage.SignUp)}
    href={`#${SelectedPage.SignUp}`}
    >
        {children}
    </AnchorLink>
  )
}
export default ActionButton