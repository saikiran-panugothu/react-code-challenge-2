import { Link } from 'react-router-dom'

const PostListHeader = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
            <Link to="/create-post" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Create Post
            </Link>
        </div>
    )
}

export default PostListHeader