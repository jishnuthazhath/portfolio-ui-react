
export default function Header() {
    return (
        <header className="mb-10 text-sm md:text-base">
            <div className="mt-4 flex justify-start flex-wrap">
                <div className="px-1 mr-2 mb-2 hover:underline decoration-2 bg-teal-300
                 hover:bg-teal-200 hover:shadow-md">
                    <a href="/">home</a>
                </div>
                <div className="px-1 mr-2 mb-2 hover:underline decoration-2 bg-teal-300 
                hover:bg-teal-200 hover:shadow-md">
                    <a href="/about">about</a>
                </div>
                <div className="px-1 mr-2 mb-2 hover:underline decoration-2 bg-teal-300
                hover:bg-teal-200 hover:shadow-md">
                    <a href="/now">now</a>
                </div>
                <div className="px-1 mr-auto mb-2 hover:underline decoration-2 bg-teal-300
                hover:bg-teal-200 hover:shadow-md">
                    <a href="mailto:jishnu.sunil.thazhath@gmail.com">email ↗</a>
                </div>
                <div className="px-1 mr-2 mb-2 hover:underline decoration-2 bg-teal-300
                hover:bg-teal-200 hover:shadow-md">
                    <a href="https://github.com/jishnuthazhath" rel="noopener noreferrer nofollow"
                        target="_blank">github ↗</a>
                </div>
                <div className="px-1 mr-2 mb-2 hover:underline decoration-2 bg-teal-300
                hover:bg-teal-200 hover:shadow-md">
                    <a href="https://www.linkedin.com/in/jishnu-s-84108a158/"
                        rel="noopener noreferrer nofollow" target="_blank">linkedin ↗</a>
                </div>
            </div>

            <h1 className="mt-4 text-2xl hover:underline decoration-4"><strong><a href="/">JISHNU THAZHATH</a></strong></h1>
        </header>
    );
}