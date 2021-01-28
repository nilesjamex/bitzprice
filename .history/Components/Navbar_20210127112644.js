import Link from "next/link"
const Navbar = () => {
    return (
        <div>
        <ul>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <Link href="/About"><a>About</a></Link>
            </li>
            </ul>    
        </div>
    )
}

export default Navbar