

const NoDataComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full space-y-4">
            <img src="/noDataImg.jpg" className="max-w-full h-auto sm:max-w-md md:max-w-lg lg:max-w-xl" alt="No Data" />
            <p className="text-lg text-black font-semibold">No Posts Found</p>
        </div>
    )
}

export default NoDataComponent