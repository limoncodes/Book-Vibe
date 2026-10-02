'use client'

import { ThemeContext } from "@/app/theme-provider"
import { BookDataType } from "@/type/booktype"
import { Dispatch, SetStateAction, useContext } from "react"
import { Bounce, toast } from "react-toastify"

const Readbutton = ({ book }: { book: BookDataType }) => {
    const { read, setread } = useContext(ThemeContext) as {
        read: BookDataType[];
        setread: Dispatch<SetStateAction<BookDataType[]>>
    }
    const handlebutton = (books: BookDataType) => {
        const alredyread = read.some(bookid => bookid.bookId === books.bookId)
        if (alredyread) {
            toast.warn('This book is already in your Read list!')
                
            return



        }
        else {
            setread([...read, books])
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



    return (
        <button onClick={() => handlebutton(book)} className="cursor-pointer rounded-md border border-gray-300 px-6 py-2.5 font-medium transition hover:bg-gray-100">
            Read
        </button>
    )
}

export default Readbutton