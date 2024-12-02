import styles from './newsItem.module.css'

import NewsCard from "./newsCard";
import NewsSource from './newsSource';
import NewsExcerpt from './newsExcerpt';
import NewsTime from './newsTime';

export default function NewsItem({ newsImage, sourceName, sourceImage, newsExcerpt, newsTime }) {
    return (
        <NewsCard>
            <div className={styles.newsImage} style={ { backgroundImage: `url(${newsImage})` }}/>
            <NewsSource sourceName={sourceName} sourceImage={sourceImage} />
            <NewsExcerpt newsExcerpt={newsExcerpt} />
            <NewsTime newsTime={newsTime} />
        </NewsCard>
    )
};