'use client'
import { useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const projects = [
    {
        title: "Job search support application",
        technologies: ["React Native", "ReactJS", "Expo", "NestJS", "Typescript", "MongoDB"],
        link: "https://github.com/YKhoa2405/personal_page",
        image: "/images/project3.png",
        details: `Website cá nhân xây dựng bằng Next.js và Tailwind, tối ưu responsive, có chế độ light/dark, code sạch, dễ mở rộng. Tích hợp các section: About, Skills, Projects, Experience, Contact.`
    },
    {
        title: "Kodo Application",
        technologies: ["React Native CLI", "ReactJS", "NestJS", "Typescript", "MongoDB"],
        link: "#",
        image: "/images/project2.png",
        details: `CRUD sinh viên, xác thực đăng nhập, phân quyền, giao diện thân thiện, dễ sử dụng cho giáo viên và sinh viên.`
    },
    {
        title: "HK chat application",
        technologies: ["Java", "Firebase"],
        link: "https://github.com/YKhoa2405/JourneyManageApp",
        image: "/images/project1.png",
        details: `Cho phép đăng bài, upload ảnh, comment, realtime update với Firebase. Responsive, tối ưu SEO.`
    },
];

export default function Projects() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section className="section-main">
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="title-section">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className=" border-2 border-black p-0 bg-white hover:shadow-[4px_4px_0_0_#19171a] duration-300 transition-all"
                            onClick={() => setOpenIdx(idx)}
                        >
                            <div className="w-full h-48 relative overflow-hidden flex bg-white items-center justify-center">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="p-6 border-t-2 border-black flex justify-between items-center">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-bold mb-2 text-primary-color">{project.title}</h2>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-secondary-color rounded-full text-xs font-semibold border border-black/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Modal chi tiết project */}
            {/* {openIdx !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setOpenIdx(null)}>
                    <div className="bg-white rounded-xl p-8 max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 text-black text-xl font-bold px-2 py-1 hover:bg-gray-200 rounded"
                            onClick={() => setOpenIdx(null)}
                            aria-label="Đóng"
                        >×</button>
                        <h2 className="text-2xl font-bold mb-2 text-primary-color">{projects[openIdx].title}</h2>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {projects[openIdx].technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-secondary-color rounded-full text-xs font-semibold border border-black/10">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mb-4 text-secondary-color">{projects[openIdx].details}</p>
                        <a
                            href={projects[openIdx].link}
                            target="_blank"
                            className="text-sm underline text-primary-color hover:text-black"
                        >
                            {projects[openIdx].link.startsWith('http') ? 'View Source' : 'Chi tiết'}
                        </a>
                    </div>
                </div>
            )} */}
        </section>
    );
}