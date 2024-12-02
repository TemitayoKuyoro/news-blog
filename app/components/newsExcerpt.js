import styles from './newsExcerpt.module.css'

export default function NewsExcerpt ({newsExcerpt}) {
    return (
        <p className={styles.newsExcerpt}>{newsExcerpt}</p>
    )
};