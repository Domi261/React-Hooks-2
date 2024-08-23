import { useEffect, useState } from 'react';
import Link from 'next/link';
 
const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
            setLoading(false);
        };
 
        fetchPosts();
    }, []);
 
    if (loading) return <div>Laden...</div>;
 
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link href={`/posts/${post.id}/comments`}>Kommentare anzeigen</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
 
export default Posts;