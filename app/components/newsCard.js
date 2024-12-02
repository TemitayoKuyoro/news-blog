import styles from './newsCard.module.css';

import Card from './Card';

export default function NewsCard ({ children }) {
    return (
        <Card className={styles.newsCard}>{children}</Card>
    )
};