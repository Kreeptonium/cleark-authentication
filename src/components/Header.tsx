'use client'

import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Header = () => {
    return (
        <div className="px-10 py-3 flex items-center justify-between border-b border-b-gray-300">
            <h2 className='uppercase font-semibold text-lg tracking-wide'>Logo</h2>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton  afterSignOutUrl="/"/>
            </SignedIn>
        </div>
    )
}

export default Header