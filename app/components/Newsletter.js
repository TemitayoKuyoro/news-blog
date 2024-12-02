import { useState } from 'react';

import styles from './Newsletter.module.css';

export default function Newsletter() {
    const [letterClose, setLetterClose] = useState(false);

    function handleSubmit(formData) {
        preventDefault();
        const email = formData.get('email')
        console.log(email)
    };

    return (
        <div className={styles.newsletter} style={{ display: letterClose ? 'none' : 'block' }}>
            <button className={styles.cancelButton} onClick={() => setLetterClose(true)}>X</button>
            <p>Subscribe to our Newsletter</p>
            <form action={handleSubmit}>
                <input name='email' autoComplete='yes'/>
                <button className={styles.submitButton} type='submit'>
                    Subscribe
                </button>
            </form>
        </div>
    )
}