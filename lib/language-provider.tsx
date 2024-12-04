'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

type LanguageContextType = {
    language: string
    setLanguage: (lang: string) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LANGUAGES = {
    zh: "简体中文",
    en: "English",
    jp: "日本語",
}

export const TRANSLATIONS: { [key: string]: { [key: string]: string } } = {
    zh: {
        settings: "设置",
        language: "语言",
        darkMode: "深色模式",
        newMarket: "新市",
        hot: "热门",
        explore: "探索",
        holding: "持仓",
        about: "关于",
        search: "搜索代币/钱包",
        connect: "连接",
        filter: "过滤器",
        buy: "买入",
        token: "代币",
        price: "价格",
        volume: "交易数",
        holders: "持有者",
        change: "涨跌幅",
    },
    en: {
        settings: "Settings",
        language: "Language",
        darkMode: "Dark Mode",
        newMarket: "New Market",
        hot: "Hot",
        explore: "Explore",
        holding: "Holdings",
        about: "About",
        search: "Search tokens/wallets",
        connect: "Connect",
        filter: "Filter",
        buy: "Buy",
        token: "Token",
        price: "Price",
        volume: "Volume",
        holders: "Holders",
        change: "Change",
    },
    jp: {
        settings: "設定",
        language: "言語",
        darkMode: "ダークモード",
        newMarket: "新規市場",
        hot: "人気",
        explore: "探索",
        holding: "保有",
        about: "概要",
        search: "トークン/ウォレットを検索",
        connect: "接続",
        filter: "フィルター",
        buy: "購入",
        token: "トークン",
        price: "価格",
        volume: "取引量",
        holders: "保有者",
        change: "変動",
    },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState('zh')

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language')
        if (savedLanguage && Object.keys(LANGUAGES).includes(savedLanguage)) {
            setLanguage(savedLanguage)
        }
    }, [])

    const changeLanguage = (lang: string) => {
        setLanguage(lang)
        localStorage.setItem('language', lang)
    }

    const t = (key: string) => {
        return TRANSLATIONS[language][key] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}


