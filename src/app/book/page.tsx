import Bookcard from "@/components/Bookcard"
import { BookDataType } from "@/type/booktype"

const getBook = async () => {
    const response = await fetch("http://localhost:3000/booksData.json")
    const bookdata = await response.json()
    return bookdata
}

const Bookpage = async () => {
    const data = await getBook()

    return (
        <div className="container mx-auto font-googlePro text-center mt-5  ">
            <h2 className="font-bold text-5xl text-[#131313]">Books</h2>
            <div className="grid grid-cols-3 gap-6 my-20">
                {
                    data.map((book:BookDataType) => <Bookcard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    )
}

export default Bookpage