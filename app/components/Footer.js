import styles from './Footer.module.css';

export default function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.footerNav}>
                <p>Home</p>
                <p>About us</p>
                <p>Privacy policy</p>
                <p>Contact us</p>
            </div>
            <p style={{justifySelf: 'center', paddingBlock: '6px'}}>Copyright &copy; 2024</p>
        </div>
    )
}