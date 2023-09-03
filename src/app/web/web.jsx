import Image from 'next/image'

export default function Web() {
    return <div className="mt-16 w-auto inline-block">
        <p className="mb-2 text-sm md:text-lg underline"><strong>On the web</strong></p>
        <div className="px-1 mr-2 mb-2 decoration-2 hover:bg-teal-200 rounded-lg hover:shadow-md">
            <a href="https://github.com/jishnuthazhath" rel="noopener noreferrer nofollow" target="_blank">
                <div className='flex justify-start'>
                    <Image
                        src="/social/github.svg"
                        alt="@jishnuthazhath"
                        height={20}
                        width={20}
                    />
                    <b className='ml-2'>@jishnuthazhath</b>
                </div>
            </a>
        </div>
        <div className="px-1 mr-2 mb-2 decoration-2 hover:bg-teal-200 rounded-lg hover:shadow-md">
            <a href="https://www.linkedin.com/in/jishnuthazhath/" rel="noopener noreferrer nofollow" target="_blank">
                <div className='flex justify-start'>
                    <Image
                        src="/social/linkedin.svg"
                        alt="@jishnuthazhath"
                        height={20}
                        width={20}
                    />
                    <b className='ml-2'>@jishnuthazhath</b>
                </div>
            </a>
        </div>
        <div className="px-1 mr-2 mb-2 decoration-2 hover:bg-teal-200 rounded-lg hover:shadow-md">
            <a href="https://www.instagram.com/jishnuwashere/" rel="noopener noreferrer nofollow" target="_blank">
                <div className='flex justify-start'>
                    <Image
                        src="/social/instagram.svg"
                        alt="@jishnuwashere"
                        height={20}
                        width={20}
                    />
                    <b className='ml-2'>@jishnuwashere</b>
                </div>
            </a>
        </div>
        <div className="px-1 mr-2 mb-2 decoration-2 hover:bg-teal-200 rounded-lg hover:shadow-md">
            <a href="https://twitter.com/jishnuwashere" rel="noopener noreferrer nofollow" target="_blank">
                <div className='flex justify-start'>
                    <Image
                        src="/social/twitter.svg"
                        alt="@jishnuwashere"
                        height={20}
                        width={20}
                    />
                    <b className='ml-2'>@jishnuwashere</b>
                </div>
            </a>
        </div>
    </div >
}