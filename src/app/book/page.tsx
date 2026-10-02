
import Bookcard from "@/components/Bookcard"
import { BookDataType } from "@/type/booktype"
import bookdata from "../../../public/booksData.json"

const Bookpage = () => {
    const data: BookDataType[] = bookdata

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-googlePro text-center mt-8">

            {/* Heading */}
            <div className="mb-12 animate-[fadeInDown_0.7s_ease-out]">
                <h2 className="font-bold text-4xl sm:text-5xl text-[#131313] tracking-tight">
                    Books
                </h2>

                <div className="w-16 h-1 bg-[#131313] mx-auto mt-4 rounded-full" />
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-12">

                {data.map((book: BookDataType, index: number) => (
                    <div
                        key={book.bookId}
                        className="animate-[fadeInUp_0.6s_ease-out_both] transition-all duration-300 hover:-translate-y-2"
                        style={{
                            animationDelay: `${index * 100}ms`,
                        }}
                    >
                        <Bookcard book={book} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Bookpage
