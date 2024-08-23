import React, { useState, useEffect } from 'react';
import styles from './ColoredCounter.module.css'; // Das Modul richtig importieren

export default function ColoredCounter() {
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState('#323');

    const increment = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        if (count % 2 === 0) {
            setBgColor('red');
        } else {
            setBgColor('blue');
        }
    }, [count]);

    return (
        <div className={styles.coloredCounter} style={{ backgroundColor: bgColor }}>
            <button className={styles.button} onClick={increment}>Increase</button>
            <span className={styles.counterSpan}> Count: {count} </span>
        </div>
    );
}
