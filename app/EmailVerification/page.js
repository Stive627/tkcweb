import EmailVerification from '@/Components/EmailVerification/EmailVerification'
import React, { Suspense } from 'react'

function Home() {
  return (
    <Suspense>
      <EmailVerification/>
    </Suspense>
  )
}

export default Home
