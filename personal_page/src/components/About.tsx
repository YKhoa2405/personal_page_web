import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {

    return (
        <section className="section-main bg-white">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="title-section">
                    Hello, I am <br />Khoa
                </h1>
                <p className="subtitle-section text-secondary-color">
                    I am a curious, lifelong learner and this website is a small space for you to discover more about me and what I am passionate about.
                </p>
                <Link
                    href="/images/Mobile_NguyenYKhoa.pdf"
                    target="_blank"
                    className="bg-primary-color text-white font-bold px-8 py-3 rounded w-max
                             transition duration-300 hover:opacity-80 md:text-lg text-base"
                >
                    See my CV
                </Link>
            </div>
            {/* Right: CV Display */}
            <div className="flex-1 flex flex-col justify-center">
                <div className="bg-gray-50 rounded-lg h-96 pt-4 overflow-hidden">
                    <iframe
                        src="/images/Mobile_NguyenYKhoa.pdf"
                        className="w-full h-full border-0"
                        title="Nguyen Y Khoa CV"
                    >
                        <p className="text-center text-gray-600 py-8">
                            Your browser doesn't support PDF preview.
                            <Link
                                href="/images/Mobile_NguyenYKhoa.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-color hover:underline ml-2"
                            >
                                Click here to view CV
                            </Link>
                        </p>
                    </iframe>
                </div>
            </div>
        </section>
    );
}