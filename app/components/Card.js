import styles from './Card.module.css'

import cn from 'classnames';

export default function Card({ children, className }) {
    return (
        <div className={cn(styles.card, className)}>{children}</div>
    )
}