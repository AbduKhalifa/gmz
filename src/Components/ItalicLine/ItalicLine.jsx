import React from 'react'
import styles from "./italic.module.css";

export default function ItalicLine({ bg, h }) {

    const height = `h-[${h}px]`;

    return (
        <i className={styles.italic + ` block ${bg} w-full ${height}`}>

        </i>
    )
}
