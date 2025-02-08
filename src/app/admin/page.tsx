"use client"
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'
import { login } from '../utils/action/auth'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Login to Continue</h1>
      <Button className=' p- m-11 text-lg outline' onClick={() => login()}>Continue with GitHub</Button>
    </div>
  )
}

export default page;
