import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
 
const Comments = () => {
    const router = useRouter();
    const { id } = router.query;
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        if (!id) return;
 
        const fetchComments = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const data = await response.json();
            setComments(data);
            setLoading(false);
        };
 
        fetchComments();
    }, [id]);     
 
    if (loading) return <div>Laden...</div>;
 
    return (  
        <div>
            <h1>Kommentare für Post {id}</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h3>{comment.name}</h3>
                        <p>{comment.body}</p>
                        <p><strong>Email:</strong> {comment.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
 
export default Comments;