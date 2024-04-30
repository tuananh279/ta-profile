'use client'
import { Button } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)        
    }, [])

    if(!mounted) return null

    return (
        <div>
            The current theme is: {theme}
            <Button onPress={() => setTheme('light')}>Light Mode</Button>
            <Button onPress={() => setTheme('dark')}>Dark Mode</Button>
        </div>
    )
}

export default ThemeSwitcher