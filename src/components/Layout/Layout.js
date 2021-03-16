import React from 'react'
import './Layout.css'

function Layout({ children, title="Windbnb" }) {
    return (
        <div className="container">

            <main>
                {children}
            </main>
            
        </div>
    )
}

export default Layout;
