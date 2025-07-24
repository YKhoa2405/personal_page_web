import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white border-t-2 border-black px-4 md:px-8 py-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-4 md:gap-0">
                <div className="flex justify-center md:justify-start space-x-6 text-xl md:text-2xl text-secondary-color">
                    <div className="hover:opacity-50 duration-200 ">   
                        <Link href="https://www.facebook.com/NguyenYKhoa123/" target="_blank"><FaFacebook /></Link>
                    </div>
                    <div className="hover:opacity-50 duration-200">   
                        <Link href="https://www.instagram.com/_nyk_24/" target="_blank"><FaInstagram /></Link>
                    </div>
                    <div className="hover:opacity-50 duration-200">   
                        <Link href="https://www.linkedin.com/in/nykhoa24/" target="_blank"><FaLinkedin /></Link>
                    </div>
                    <div className="hover:opacity-50 duration-200">   
                        <Link href="https://github.com/YKhoa2405/" target="_blank"><FaGithub /></Link>
                    </div>
                </div>
                <div className="text-secondary-color text-sm md:text-base text-center md:text-right">
                    © 2025 copyright all by Nguyen Y Khoa
                </div>
            </div>
        </footer>
    );
}