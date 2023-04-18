import React from 'react'
interface MobileMenuProps {
    visible: boolean;
  }

const MobileMenu:React.FC<MobileMenuProps> = ({visible}) => {
    if(!visible)
    {
        return null
    }
  return (
    <div className='text-white'>MobileMenu</div>
  )
}

export default MobileMenu