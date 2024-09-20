import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListPostSkeletonLoader } from '../skeletonLoaders/ListPostSkeletonLoader';
import PostListHeader from './PostListHeader';
import { BASE_URL, LIMIT } from '../../util/Constants';
import { toast } from 'react-toastify';
import ErrorState from '../common/ErrorState';
import { useDispatch, useSelector } from 'react-redux';
import { setStart } from '../../reducers/PaginationReducer';
import NoDataComponent from '../common/NoDataComponent';

interface Post {
    id: string,
    title: string,
    body: string
}

const PostList = () => {
    const dispatch = useDispatch();
    const start = useSelector((state: any) => state.pagination.start);
    const [posts, setPosts] = useState<Post[]>([]);
    const [errorState, setErrorState] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchPosts();
    }, [start]);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            console.log(start, 'start', LIMIT);

            const URL = `${BASE_URL}posts?_start=${start}&_limit=${LIMIT}`;
            const response = await fetch(URL);
            if (!response.ok) {
                setErrorState(true);
                toast.error("Something went wrong");
                return;
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Something went wrong:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleNext = () => {
        if (posts.length > 0) {
            dispatch(setStart(start + LIMIT));
        }
    };

    const handlePrevious = () => {
        if (start >= LIMIT) {
            dispatch(setStart(start - LIMIT));
        }
    };

    return (
        <div className="p-6 max-w-screen-xl mx-auto">
            <PostListHeader />
            {loading ? (
                <ListPostSkeletonLoader />
            ) : errorState ? (
                <ErrorState />
            ) : posts.length === 0 ? (
                <NoDataComponent />
            ) : (
                <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post: Post) => (
                        <li key={post.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <Link to={`/posts/${post.id}`}>
                                <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300">{post.title}</h2>
                                <p className="text-gray-600 mt-2">{post.body.slice(0, 80)}...</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex justify-center space-x-4 mt-8">
                <button
                    onClick={handlePrevious}
                    disabled={start === 0}
                    className={`px-4 py-2 rounded-lg ${start === 0 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white shadow-md transition duration-300`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={posts.length === 0}
                    className={`px-4 py-2 rounded-lg ${posts.length === 0 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white shadow-md transition duration-300`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PostList;
