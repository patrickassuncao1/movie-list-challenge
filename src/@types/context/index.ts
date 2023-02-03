import { ReactNode } from "react"

export type ProviderType = {
    children: ReactNode
}

export type ThemeContextType = {
    isDark: boolean,
    handleThemeModeChange:  () => void
}