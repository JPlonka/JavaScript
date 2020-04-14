import React from 'react'
//import './footer.css'

function Footer() {

    const styles={
        height: "100px",
        width: "100%",
        backgroundColor: "rgb(70, 70, 70)",
        color: "darkturquoise",
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <footer style={styles}>
            <p>Made by Jonatan</p>
        </footer>
    )
}

export default Footer