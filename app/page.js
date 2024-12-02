"use client";

import styles from './page.module.css';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import NewsItem from './components/newsItem';
import SideItem from './components/sideItem';

import { POSTS } from './posts';
import MainNav from './components/nav/main-nav';
import Container from './components/Container';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

export default function Home() {
  const [category, setCategory] = useState('Latest');
  const [posts, setPosts] = useState(POSTS);
  // const [isLarge, setIsLarge] = useState(true);
  useEffect(() => console.log(`Category is ${category}`), [category]);
  // useEffect(() => {
  //   // Fetch news posts here 
  //   // Using POSTS from posts.js till data fetching.

  //   // setPosts(POSTS);

  //   if (window.innerWidth > 899) {
  //     setIsLarge(true);
  //   }else {
  //     setIsLarge(false);
  //   }

  // }, []);

  // Extract filter function to separate function
  const filteredPosts = posts.filter((post) => post.newsCategory.includes(category))

  const suggestedPosts = posts.slice(0, 2)

  const suggestedList = suggestedPosts.map((post) => {
    return (
      <SideItem key={post.sourceName} sideImage={post.newsImage} sideSourceName={post.sourceName} sideSourceImage={post.sourceImage} sideNewsTime={post.newsTime} />
    )
  })


  return (
    <>
      <MainNav onCategoryChange={(c) => setCategory(c)} activeCategory={category} />
      <Container>
        <div className={styles.homebox}>
          <div className={styles.newsbox}>
            {
              filteredPosts.map((post) => {
                return (
                  <Link key={post.sourceName} href={`/news/${post.slug}`}>
                    <NewsItem newsImage={post.newsImage} sourceImage={post.sourceImage} sourceName={post.sourceName} newsExcerpt={post.newsExcerpt} newsTime={post.newsTime} />
                  </Link>
                )
              })
            }
          </div>
          <div className={styles.sidebox}>
            {suggestedList}
          </div>
        </div>
      </Container>
      <div style={{position: 'relative'}}>
        <Footer />
        <Newsletter />
      </div>
    </>
  );
}
