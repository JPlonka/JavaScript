import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'

function MyApp() {
    return (
        <div className="app">
            <Header />
            <MainContent />
            <Footer />
        </div>
        
    )
}

export default MyApp