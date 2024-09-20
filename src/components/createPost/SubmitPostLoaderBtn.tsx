import { Oval } from 'react-loader-spinner'

const SubmitPostLoaderBtn = () => {
    return (
        <span className="flex items-center justify-center">
            <Oval
                visible={true}
                height={24}
                width={24}
                color="#ffffff"
                ariaLabel="oval-loading"
                wrapperClass="absolute left-1/2 transform -translate-x-1/2"
            />
            <span className="ml-2">Submitting...</span>
        </span>
    )
}

export default SubmitPostLoaderBtn