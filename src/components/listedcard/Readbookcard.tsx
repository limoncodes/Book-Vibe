import { BookDataType } from "@/type/booktype";
import Image from "next/image";
import DetailsButton from "./DetailsButton";
import {
  FaUserFriends,
  FaBook,
  FaRegCalendarAlt,
} from "react-icons/fa";

const Readbookcard = ({ book }: { book: BookDataType }) => {
  return (
    <div className="my-4 flex w-full flex-col gap-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4 md:flex-row">

      {/* Book Image */}
      <div className="flex h-48 w-full shrink-0 items-center justify-center rounded-xl bg-gray-100 p-3 sm:h-52 sm:w-full md:h-36 md:w-36">
        <Image
          src={book.image}
          alt={book.bookName}
          width={144}
          height={144}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Book Information */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-700">
          By :{" "}
          <span className="font-medium">
            {book.author}
          </span>
        </p>

        {/* Tags + Year */}
        <div className="mt-2 flex flex-wrap items-center gap-2">

          <span className="mr-1 text-sm font-semibold text-gray-700">
            Tag
          </span>

          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
            >
              #{tag}
            </span>
          ))}

          <span className="flex items-center gap-1 text-xs text-gray-500 sm:text-sm">
            <FaRegCalendarAlt className="shrink-0 text-xs" />
            Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        {/* Publisher + Pages */}
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-gray-200 pb-3 text-xs text-gray-500 sm:text-sm">

          <span className="flex items-center gap-1">
            <FaUserFriends className="shrink-0" />
            Publisher: {book.publisher}
          </span>

          <span className="flex items-center gap-1">
            <FaBook className="shrink-0" />
            Page {book.totalPages}
          </span>

        </div>

        {/* Bottom */}
        <div className="mt-2 flex flex-wrap items-center gap-2">

          {/* Category */}
          <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-medium text-blue-500 sm:px-4">
            Category: {book.category}
          </span>

          {/* Rating */}
          <span className="rounded-full bg-orange-50 px-3 py-2 text-xs font-medium text-orange-500 sm:px-4">
            Rating: {book.rating}
          </span>

          {/* Details Button */}
          <DetailsButton book={book} />

        </div>
      </div>
    </div>
  );
};

export default Readbookcard;