import React from "react";

function Footer() {
    const fullYear = new Date().getFullYear();
    return <footer>
        <p>copyright © {fullYear}</p>
    </footer>
}

export default Footer; 