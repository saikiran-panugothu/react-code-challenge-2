import { LIMIT } from "../../util/Constants";

export const ListPostSkeletonLoader = () => (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(LIMIT)].map((_, index) => (
            <div
                key={index}
                className="bg-gray-300 p-4 rounded-lg shadow-lg animate-pulse"
            >
                <div className="h-6 bg-gray-400 rounded mb-4 w-3/4"></div>
                <div className="h-4 bg-gray-400 rounded mb-2 w-full"></div>
                <div className="h-4 bg-gray-400 rounded mb-2 w-full"></div>
                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
        ))}
    </div>
);
