export default function Footer() {
    return (
        <footer className="text-start text-xs border-t border-slate-400 mt-20 pt-2 flex justify-between">
            <p>&copy; Copyright 2023, Jishnu Thazhath</p>
            <p>inspired from&nbsp;
                <a className="hover:underline" href="https://aswinmohan.me/"
                    rel="noopener noreferrer nofollow" target="_blank">Ashwin Mohan</a>
                ,&nbsp;
                <a className="hover:underline" href="https://sive.rs/" rel="noopener noreferrer nofollow" target="_blank">Derek Sivers</a></p>
        </footer>);
}