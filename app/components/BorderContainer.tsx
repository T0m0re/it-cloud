import React from 'react';

interface BorderContainerProps {
  children: React.ReactNode;
}

const BorderContainer = ({ children }: BorderContainerProps) => {
  return (
    <main className='mx-auto max-w-9/10 border-r border-l border-white'>
        {children}
    </main>
  )
}
export default BorderContainer