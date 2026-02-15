import Link from "next/link"
import { styleSheets } from "./StyleSheet"

export default function Menubar() {
    return (
        <nav className="flex w-full py-5 justify-around items-center">
            <div className="text-xl text-[#1E376D] font-bold">
                Taxora corporate solutions
            </div>
            <div className="flex justify-between items-center w-[45%]">
                <div>
                    <ul className="flex gap-10 items-center">
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/'}>About Us</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Services</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Blog</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className={styleSheets.BlueBTNStyle}>
                        Get a quote
                    </button>
                </div>
            </div>
        </nav>
    )
}
