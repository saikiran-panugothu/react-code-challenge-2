import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostDetailsSkeltonLoader from '../skeletonLoaders/PostDetailsSkeltonLoader';
import NoDataComponent from '../common/NoDataComponent';
import { BASE_URL } from '../../util/Constants';
import { toast } from 'react-toastify';
import ErrorState from '../common/ErrorState';
import BackButton from './BackButton';

const PostDetails = () => {
    const { id } = useParams();
    const [errorState, setErrorState] = useState<boolean>(false)
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const URL = `${BASE_URL}posts/${id}`;
                const response = await fetch(URL);
                if (!response.ok) {
                    setErrorState(true);
                    toast.error("Something went wrong");
                    return;
                }
                const res = await response.json();
                setPost(res);
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100 p-6">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
                {loading ? (
                    <PostDetailsSkeltonLoader />
                ) : errorState ? (
                    <div>
                        <ErrorState />
                        <BackButton />
                    </div>
                ) : post ? (
                    <>
                        <h1 className="text-3xl font-bold text-blue-500 mb-4">Post {id} Details</h1>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
                        <p className="text-gray-700 mb-6">{post.body}</p>
                        <BackButton />
                    </>
                ) : (
                    <NoDataComponent />
                )}
            </div>
        </div>
    );
};

export default PostDetails;
