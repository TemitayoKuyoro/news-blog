import styles from './newsTime.module.css'

export default function NewsTime ({newsTime}) {
    return (
        <p className={styles.newsTime}>{newsTime}</p>
    )
};