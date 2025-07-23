import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white border-t-2 border-black px-8 py-4">
            <div className="flex justify-between items-center w-full">
                <div className="flex space-x-6 text-2xl text-secondary-color hover:text-primary-color transition-colors duration-200">
                    <Link href="https://www.facebook.com/NguyenYKhoa123/" target="_blank"><FaFacebook /></Link>
                    <Link href="https://www.instagram.com/_nyk_24/" target="_blank"><FaInstagram /></Link>
                    <Link href="https://www.linkedin.com/in/nykhoa24/" target="_blank"><FaLinkedin /></Link>
                    <Link href="https://github.com/YKhoa2405/" target="_blank"><FaGithub /></Link>
                </div>
                <div className="text-secondary-color text-base">
                    © 2025 copyright all by Nguyen Y Khoa
                </div>
            </div>
        </footer>
    );
}