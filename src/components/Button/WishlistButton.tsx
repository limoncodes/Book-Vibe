'use client'

import { ThemeContext } from "@/app/theme-provider"
import { BookDataType } from "@/type/booktype"
import { Dispatch, SetStateAction, useContext } from "react"
import { Bounce, toast } from "react-toastify"

const WishlistButton = ({ book }: { book: BookDataType }) => {
    const { wishlist, setwishlist } = useContext(ThemeContext) as {
        wishlist: BookDataType[];
        setwishlist: Dispatch<SetStateAction<BookDataType[]>>
    }
    const handlebutton = (books: BookDataType) => {
        const alredyread = wishlist.some(bookid => bookid.bookId === books.bookId)
        if (alredyread) {
            toast.warn('This book is already in your wishlist list!')
               
            return



        }
        else {
            setwishlist([...wishlist, books])
            toast.success(`Added to ${books.bookName} `, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        }


    }
    console.log("wishlist", wishlist)



    return (
        <button onClick={() => handlebutton(book)} className="cursor-pointer rounded-md bg-[#4DB0CE] px-6 py-2.5 font-medium text-white transition hover:bg-[#3d9fbd]">
            Wishlist
        </button>
    )
}

export default WishlistButton