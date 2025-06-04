import { Suspense, type ReactNode } from 'react'

const LazyLayout = ({children}: {children: ReactNode}) => {
  return (
    <Suspense fallback = "Loading...">
        {children}
    </Suspense>
  )
}

export default LazyLayout