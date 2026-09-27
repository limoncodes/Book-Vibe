import { BookDataType } from "@/type/booktype";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";

interface BookType {
    book: BookDataType;
}

const Bookcard = ({ book }: BookType) => {
    return (
        <Link href={`/book/${book.bookId}`} className="cursor-pointer">
            <div className="w-full max-w-[490px] rounded-[22px] border border-gray-300 bg-white p-7">

                {/* Image */}
                <div className="flex h-[300px] items-center justify-center rounded-[20px] bg-[#f4f4f4]">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={180}
                        height={240}
                        className="h-[220px] w-auto object-contain"
                    />
                </div>

                {/* Tags */}
                <div className="mt-8 flex gap-4">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-[#F3FDF1] px-6 py-2 text-[18px] text-green-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Book Name */}
                <h2 className="mt-7 text-[30px] font-bold text-[#151515]">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-4 text-[20px] text-gray-600">
                    By : {book.author}
                </p>

                {/* Divider */}
                <div className="my-6 border-t border-dashed border-gray-300"></div>

                {/* Bottom Info */}
                <div className="flex items-center justify-between">
                    <p className="text-[20px] text-gray-700">
                        {book.category}
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="text-[20px] text-gray-700">
                            {book.rating.toFixed(2)}
                        </span>

                        <FaRegStar className="text-[28px] text-gray-600" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Bookcard;