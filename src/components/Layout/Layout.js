import React from 'react'
import classes from './Layout.module.css'

function Layout({ children, title="Windbnb" }) {
    return (
        <div className={classes.Container}>

            <main>
                {children}
            </main>
            
        </div>
    )
}

export default Layout;
