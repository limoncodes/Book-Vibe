import { BookDataType } from "@/type/booktype";
import { notFound } from "next/navigation";
import Image from "next/image";

const getBook = async (): Promise<BookDataType[]> => {
  const response = await fetch("http://localhost:3000/booksData.json");

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const bookdata = await response.json();

  return bookdata;
};

const BookDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const data = await getBook();

  const { id } = await params;
  const idnumber = parseInt(id);

  const book = data.find(
    (book: BookDataType) => book.bookId === idnumber
  );

  if (!book) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

        {/* Book Image */}
        <div className="flex items-center justify-center overflow-hidden rounded-xl bg-[#f5f5f5] p-[74px]">
          <Image
            src={book.image}
            height={564}
            width={425}
            alt={book.bookName}
            priority
            className="h-full w-full object-contain"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-bold text-gray-900">
            {book.bookName}
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            By :{" "}
            <span className="font-medium">
              {book.author}
            </span>
          </p>

          <div className="my-5 border-t border-gray-200" />

          <p className="text-lg text-gray-700">
            {book.category}
          </p>

          <div className="my-5 border-t border-gray-200" />

          <p className="text-sm leading-6 text-gray-600">
            <span className="font-bold text-gray-900">
              Review :
            </span>{" "}
            {book.review}
          </p>

          {/* Tags */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-bold text-gray-900">
              Tag
            </span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="my-5 border-t border-gray-200" />

          {/* Details */}
          <div className="space-y-4 text-sm">

            <div className="grid grid-cols-2">
              <span className="text-gray-500">
                Number of Pages:
              </span>

              <span className="font-semibold">
                {book.totalPages}
              </span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-gray-500">
                Publisher:
              </span>

              <span className="font-semibold">
                {book.publisher}
              </span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-gray-500">
                Year of Publishing:
              </span>

              <span className="font-semibold">
                {book.yearOfPublishing}
              </span>
            </div>

            <div className="grid grid-cols-2">
              <span className="text-gray-500">
                Rating:
              </span>

              <span className="font-semibold">
                {book.rating}
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">

            <button className="rounded-md border border-gray-300 px-6 py-2.5 font-medium transition hover:bg-gray-100">
              Read
            </button>

            <button className="rounded-md bg-[#4DB0CE] px-6 py-2.5 font-medium text-white transition hover:bg-[#3d9fbd]">
              Wishlist
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;