import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
    const contact = [
        {
            icon: <FaMailBulk className="text-4xl text-white" />,
            label: "Email",
            value: "nykhoa2405@gmail.com"
        },
        {
            icon: <FaLinkedin className="text-4xl text-white" />,
            label: "Linkedin",
            value: "https://www.linkedin.com/in/nykhoa24/"
        },
        {
            icon: <FaGithub className="text-4xl text-white" />,
            label: "Github",
            value: "https://github.com/YKhoa2405"
        },
    ]
    return (
        <section className="section-main bg-secondary-color">
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="title-section">Contact</h1>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8">
                {contact.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col sm:flex-row items-start sm:items-center pb-6 md:pb-8 ${idx !== contact.length - 1 ? "border-b-2 border-black" : ""}`}>
                        <div className="icon-container mb-2 sm:mb-0">{item.icon}</div>
                        <div className="flex-1 flex items-center">
                            <div>
                                <div className="text-lg md:text-xl text-secondary-color font-bold mb-2">{item.label}</div>
                                <Link
                                    href={item.label === "Email" ? `mailto:${item.value}` : item.value}
                                    target="_blank"
                                    className="break-all text-base md:text-2xl font-bold hover:underline duration-300 transition-all"
                                >
                                    {item.value}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}