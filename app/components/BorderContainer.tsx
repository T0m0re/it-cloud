import React from 'react';

interface BorderContainerProps {
  children: React.ReactNode;
  className?: string
}

const BorderContainer = ({ children, className }: BorderContainerProps) => {
  return (
    <main className={`mx-auto max-w-9/10 border-r border-l border-white ${className}`}>
        {children}
    </main>
  )
}
export default BorderContainer