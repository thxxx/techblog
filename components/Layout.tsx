import React from 'react'
import NavBar from './allPages/NaviBar'
import Head from 'next/head'
import Footer from './allPages/Footer'
import SEO from './SEO'

export default function Layout({children}) {
    return (
        <>
            <SEO title="홈" />
            <NavBar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    )
}