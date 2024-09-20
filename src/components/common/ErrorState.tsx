
const ErrorState = () => {
    return (
        <div className="text-red-500 text-center p-4 flex flex-col items-center justify-center h-full">
            <img src="/errorState.png" className="w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-4" alt="Error State" />
            <p className="text-lg">Oops! Something went wrong while fetching the posts.</p>
            <p className="text-lg">Please try again later.</p>
        </div>
    )
}

export default ErrorState