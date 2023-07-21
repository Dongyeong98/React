import React from 'react';
import styles from './BottomButton.module.css';

export default function BottomButton(props) {
    return (
        <button className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
