
import { BookDataType } from "@/type/booktype";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";

interface BookType {
    book: BookDataType;
}

const Bookcard = ({ book }: BookType) => {
    return (
        <Link
            href={`/book/${book.bookId}`}
            className="group block w-full cursor-pointer"
        >
            <div className="h-full w-full rounded-[22px] border border-gray-300 bg-white p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-green-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.10)]">

                {/* Image */}
                <div className="flex h-[240px] sm:h-[270px] md:h-[290px] lg:h-[300px] items-center justify-center overflow-hidden rounded-[20px] bg-[#f4f4f4]">

                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={180}
                        height={240}
                        className="h-[190px] sm:h-[210px] md:h-[220px] w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                </div>

                {/* Tags */}
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 md:gap-4">

                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-[#F3FDF1] px-3 sm:px-4 md:px-6 py-2 text-sm sm:text-base md:text-lg text-green-600 transition-colors duration-300 group-hover:bg-green-100"
                        >
                            {tag}
                        </span>
                    ))}

                </div>

                {/* Book Name */}
                <h2 className="mt-5 sm:mt-6 md:mt-7 text-xl sm:text-2xl md:text-[26px] lg:text-[30px] font-bold text-[#151515] text-left leading-snug transition-colors duration-300 group-hover:text-green-700 line-clamp-2">

                    {book.bookName}

                </h2>

                {/* Author */}
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 text-left">

                    By : {book.author}

                </p>

                {/* Divider */}
                <div className="my-5 sm:my-6 border-t border-dashed border-gray-300"></div>

                {/* Bottom Info */}
                <div className="flex flex-wrap items-center justify-between gap-3">

                    <p className="text-base sm:text-lg md:text-xl text-gray-700">

                        {book.category}

                    </p>

                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

                        <span className="text-base sm:text-lg md:text-xl text-gray-700">

                            {book.rating.toFixed(2)}

                        </span>

                        <FaRegStar className="text-xl sm:text-2xl md:text-[28px] text-gray-600 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-yellow-500" />

                    </div>

                </div>

            </div>
        </Link>
    );
};

export default Bookcard;