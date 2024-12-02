export function filterpost({ posts, filterCategory }) {
    const filteredPosts = posts.filter((post) => post.category === filterCategory);
    return filteredPosts
};