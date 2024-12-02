import Link from 'next/link';

import styles from './page.module.css';

import { POSTS } from "../../posts";

import Container from "../../components/Container";
import SideItem from '../../components/sideItem';

// export default function NewsPage({ slug }) {
//     return <div>{slug} page</div>
// };

// export async function getStaticPaths() {
//     const paths = POSTS.map((post) => ({
//         params: {
//             slug: post.slug
//         }
//     }))

//     console.log(paths)

//     return {
//         paths,
//         fallback: false
//     }
// };

// export async function getStaticProps({ params: { slug } }) {
//     console.log(slug)
//     return {
//         props: {
//             slug: slug
//         }
//     }
// };

export async function generateStaticParams() {
    const slugs = POSTS.map((post) => ({ slug: post.slug }))

    return slugs;
}

function getPost(slug) {
    const post = POSTS.find((p) => p.slug === slug);

    return post;
}

export default function NewsPage({ params }) {
    const post = getPost(params.slug)

    const suggestedPosts = POSTS.slice(0, 2)

    const suggestedList = suggestedPosts.map((post) => {
        return (
          <SideItem key={post.sourceName} sideImage={post.newsImage} sideSourceName={post.sourceName} sideSourceImage={post.sourceImage} sideNewsTime={post.newsTime} />
        )
      })
    
    return (
        <>
            <Link href='/'>
                <button className={styles.button}>Go back</button>
            </Link>
            <Container>
                <h1 className={styles.newsTitle}>{post.newsTitle}</h1>
                <div className={styles.newsImage} style={{ backgroundImage: `url(${post.newsImage})` }} />
                <span className={styles.newsSource}>Posted {post.sourceName} ago</span>
                <p className={styles.newsExcerpt}>{post.newsExcerpt}</p>
                <div className={styles.shareNews}>
                    <p>Share&#58; </p>
                    <div>
                        <button className={styles.button}>Twitter</button>
                        <button className={styles.button}>Facebook</button>
                        <button className={styles.button}>Whatsapp</button>
                        <button className={styles.button}>Telegram</button>
                    </div>
                </div>
                <div className={styles.relatedNews}>
                    <p>Related stories</p>
                    <div>
                        {suggestedList}
                    </div>
                </div>

            </Container>
        </>
    )
}