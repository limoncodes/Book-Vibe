import { BookDataType } from "@/type/booktype";
import Link from "next/link";

const DetailsButton = ({ book }: { book: BookDataType }) => {
  return (
    <Link
      href={`/book/${book.bookId}`}
      className="rounded-full bg-green-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-green-700 sm:px-4"
    >
      View Details
    </Link>
  );
};

export default DetailsButton;