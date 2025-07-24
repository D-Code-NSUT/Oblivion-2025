"use client";

import styles from "./Loading.module.css";

export default function Loading() {
    return(
    <>
        <div className={styles.page}>
            <div className={styles.loadingContainerWrapper}>
                <div className={styles.loadingContainerBack}>
                    <span className={styles.loadingTextBack}>OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION </span>
                </div>
                <div className={styles.loadingContainer}>
                    <span className={styles.loadingText}>OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION OBLIVION </span>
                </div>
            </div>
        </div>
    </>
    )
}