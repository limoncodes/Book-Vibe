'use client'
import { Dispatch, SetStateAction, useContext } from "react"
import { ThemeContext } from "../theme-provider"
import { BookDataType } from "@/type/booktype";
import { DiVim } from "react-icons/di";
import Readbookcard from "@/components/listedcard/Readbookcard";


const Listed = () => {
  const { read, setread,
    wishlist, setwishlist } = useContext(ThemeContext) as {
      read: BookDataType[];
      setread: Dispatch<SetStateAction<BookDataType[]>>,
      wishlist: BookDataType[];
      setwishlist: Dispatch<SetStateAction<BookDataType[]>>
    }
  console.log("read ", read)
  console.log("wishlist", wishlist)
  return (
    <div className="container mx-auto">
      <div className="bg-[#F3F3F3] mt-8 rounded-2xl mb-28">
        <h2 className="py-8 text-center font-bold text-2xl text-black">Books</h2>
      </div>


      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {read.length === 0 ? (
            <div className="text-center text-gray-500">No books found.</div>
          ) : (
            read.map((book) => (
              <Readbookcard key={book.bookId} book={book} />
            ))
          )}
        </div>

        <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">
        {wishlist.length === 0 ? (
            <div className="text-center text-gray-500">No books found.</div>
          ) : (
            wishlist.map((book) => (
              <Readbookcard key={book.bookId} book={book} />
            ))
          )}
        </div>


      </div>
    </div>
  )
}

export default Listed