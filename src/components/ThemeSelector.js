// styles
import './ThemeSelector.css'
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode-icon.svg'
import React from 'react'

const themeColor = ['#58249c', '#249c6b', '#b70233']
export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme()

    const toogleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode)
    return (
        <div className='theme-selector'>
            <div className="mode-toogle">
                <img
                    onClick={toogleMode}
                    src={modeIcon}
                    alt='dark/light toogle icon'
                    style={{ filter: mode === 'dark' ? 'invert(100%)': 'invert(20%)' }}
                />
            </div>
            <div className="theme-buttons">
                {themeColor.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}>
                    </div>
                ))}
            </div>
        </div>
    )
}
