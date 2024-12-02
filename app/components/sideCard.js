import Card from './Card'
import styles from './sideCard.module.css'

export default function SideCard ({ children }) {
    return (
        <Card className={styles.sidecard}>
            {children}
        </Card>
    )
};