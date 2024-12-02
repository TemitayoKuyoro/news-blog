import styles from './newsSource.module.css'

export default function NewsSource({ sourceName, sourceImage }) {
    return (
        <>
            <img className={styles.newsSourceImage} src={sourceImage}/>
            <p className={styles.newsSource}>{sourceName}</p>
        </>
    )
};