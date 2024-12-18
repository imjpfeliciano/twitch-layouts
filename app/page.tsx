import Link from "next/link"
const HomePage = () => {
    return (
        <div className="flex flex-col w-full h-[100vh] items-center justify-center">
            <div>
                <h1 className="text-5xl font-bold text-center">Welcome to imjpfeliciano.dev!</h1>
                <div>
                    <h2 className="text-3xl font-bold text-center">Available endpoints</h2>
                    <ul className="list-disc list-inside">
                        <li>
                            <Link href="/dev/starting">
                                Stream starting
                            </Link>
                        </li>
                        <li>
                            <Link href="/dev/starting">
                                Stream ending
                            </Link>
                        </li>
                        <li>
                            <Link href="/gaming/ultrawide/fortnite">
                                Fortnite
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage
