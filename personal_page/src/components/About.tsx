import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
    
    return (
        <section className="section-main bg-white">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="title-section">
                    Hello, I'm <br />Khoa
                </h1>
                <p className="subtitle-section text-secondary-color">
                    I am a curious, lifelong learner and this website is a small space for you to discover more about me and what I am passionate about.
                </p>
                <Link
                    href="/images/Mobile_NguyenYKhoa.pdf"
                    target="_blank"
                    className="bg-primary-color text-white font-bold px-8 py-3 rounded w-max
                             transition duration-300 hover:opacity-80"
                >
                    See my CV
                </Link>
            </div>
            <div className="flex-1 flex flex-col justify-center">
            </div>
        </section>
    );
}