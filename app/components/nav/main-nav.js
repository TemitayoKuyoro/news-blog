import styles from './mainNav.module.css';

import { CATEGORIES } from '../../category'

export default function MainNav({ onCategoryChange, activeCategory }) {
    return (
        <div className={styles.nav} style={{ width: '800px', overflowX: 'scroll' }}>                {
                    CATEGORIES.map(
                        (c) => {
                            return (
                                <button key={c} onClick={() => onCategoryChange(c)} className={activeCategory === c ? 'active' : ''}>{c}</button>
                            )
                        }
                    )
                }
           
        </div>
    )
};