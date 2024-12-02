import styles from './sideItem.module.css';

import SideCard from "./sideCard";
import NewsSource from './newsSource';
import NewsTime from './newsTime';

export default function SideItem({ sideSourceName, sideSourceImage, sideNewsTime, sideImage }) {
    return (
        <SideCard>
            <div style={{backgroundImage: `url(${sideImage})`}} className={styles.sideImage} />
            <div>
                <NewsSource sourceName={sideSourceName} sourceImage={sideSourceImage}/>
                <NewsTime newsTime={sideNewsTime} />
            </div>
        </SideCard>
    )
}