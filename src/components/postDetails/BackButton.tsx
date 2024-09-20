
import { Link } from 'react-router-dom'

const BackButton = () => {
    return (
        <Link
            to="/"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
            Back to Posts
        </Link>
    )
}

export default BackButton