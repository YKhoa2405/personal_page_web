'use client'
import { useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const relationships = [
    {
        name: "Mentor - Mỹ Linh",
        role: "Sale B2B",
        image: "/images/team1.jpg",
        details: "Hỗ trợ thiết kế UI/UX, review code và hướng dẫn best practices cho các dự án React/Next.",
        link: "#"
    },
    {
        name: "Collaborator - Mỹ Linh và bạn cô ấy",
        role: "Sale B2B & Hạt",
        image: "/images/team2.jpg",
        details: "Phát triển API, triển khai CI/CD và tối ưu hiệu năng cho các ứng dụng Node/NestJS.",
        link: "#"
    },
];

export default function Relationship() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const toggleOpen = (idx: number) => setOpenIdx(prev => (prev === idx ? null : idx));

    return (
        <section className="section-main">
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="title-section">Teams</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relationships.map((rel, idx) => (
                        <div
                            key={idx}
                            className="border-2 border-black p-0 bg-white hover:shadow-[4px_4px_0_0_#19171a] duration-300 transition-all cursor-pointer"
                            onClick={() => toggleOpen(idx)}
                            aria-expanded={openIdx === idx}
                        >
                            <div className="w-full h-48 relative overflow-hidden flex bg-white items-center justify-center">
                                <Image
                                    src={rel.image}
                                    alt={rel.name}
                                    fill
                                    className="object-contain transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="p-4 border-t-2 border-black flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-2xl font-bold mb-0 text-primary-color">{rel.name}</h2>
                                    <span className="text-sm text-secondary-color">{rel.role}</span>
                                </div>
                                {/* <FaChevronRight
                                    className={`text-xl transition-transform duration-300 ${openIdx === idx ? 'rotate-90' : ''}`}
                                    aria-hidden="true"
                                /> */}
                            </div>

                            {/* {openIdx === idx && (
                                <div
                                    className="p-6 border-t-2 border-black bg-white"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-4 rounded">
                                            <Image
                                                src={rel.image}
                                                alt={`${rel.name} preview`}
                                                width={520}
                                                height={300}
                                                className="object-cover rounded"
                                            />
                                        </div>

                                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="text-xl font-bold text-primary-color">{rel.name}</h3>
                                                    <p className="text-sm text-secondary-color">{rel.role}</p>
                                                </div>
                                                <button
                                                    onClick={() => setOpenIdx(null)}
                                                    className="ml-4 px-2 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
                                                    aria-label="Đóng chi tiết"
                                                >
                                                    Đóng
                                                </button>
                                            </div>

                                            <p className="text-sm text-secondary-color">{rel.details}</p>

                                            <a
                                                href={rel.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-sm underline text-primary-color hover:text-black"
                                            >
                                                Chi tiết
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )} */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}