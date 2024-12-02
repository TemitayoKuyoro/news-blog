import styles from './mainNav.module.css';

export default function NavLayout ({ children }) {
    return <nav className={styles.nav}>{children}</nav>
}