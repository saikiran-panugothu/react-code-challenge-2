import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../util/Constants';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa'
import SubmitPostLoaderBtn from './SubmitPostLoaderBtn';


const CreatePost = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [titleErrMsg, setTitleErrMsg] = useState<string>('');
    const [descriptionErrMsg, setDescriptionErrMsg] = useState<string>('')
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleTitleChange(e: any) {
        setTitleErrMsg('')
        setTitle(e.target.value)
    }

    function handleDescription(e: any) {
        setDescriptionErrMsg('')
        setDescription(e.target.value)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!title) {
            toast.error('Invalid Title')
            setTitleErrMsg('Title is required');
            return;
        }
        if (description.length > 1000) {
            toast.error('Invalid Description')
            setDescriptionErrMsg('Description cannot exceed 1000 characters');
            return;
        }
        setLoading(true);
        try {
            const URL = `${BASE_URL}posts`;
            const res = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    body: description,
                }),
            });
            if (res.status === 201) {
                toast.success('Post created successfully');
                navigate('/');
            } else {
                console.error('Failed to create post:', res.status);
                toast.error('Something went wrong')
            }
        } catch (error) {
            console.error('Error creating post:', error);
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">Create New Post</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-black"
                    />
                    {titleErrMsg && <p className="text-red-500 mb-4 text-sm">{titleErrMsg}</p>}
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={handleDescription}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-black"
                        maxLength={1000}
                        rows={4}
                    />
                    {descriptionErrMsg && <p className="text-red-500 mb-4 text-sm">{descriptionErrMsg}</p>}
                    <button
                        type="submit"
                        className={`w-full h-12 bg-blue-500 text-white rounded-3xl py-2 hover:bg-blue-600 transition duration-300 shadow-md relative ${loading ? 'opacity-50' : ''}`}
                        disabled={loading}
                    >
                        {loading ? (
                            <SubmitPostLoaderBtn />
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>
                <button
                    onClick={() => navigate('/')}
                    className="mt-8 flex items-center justify-center text-blue-500 hover:underline"
                >
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>
            </div>
        </div>
    );
};

export default CreatePost;
