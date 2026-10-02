
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="container mx-auto my-6 px-4 font-googlePro sm:my-8 sm:px-6 lg:my-12 lg:px-8">

            <div className="group relative flex flex-col-reverse items-center justify-between gap-8 overflow-hidden rounded-xl bg-[#F3F3F3] px-5 py-10 sm:gap-10 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:flex-row lg:gap-8 lg:px-16 lg:py-20 xl:px-24 xl:py-28">

                {/* Content */}
                <div className="relative z-10 w-full text-center lg:w-1/2 lg:text-left animate-[heroText_0.8s_ease-out_both]">

                    <h1 className="mb-7 text-3xl font-bold leading-tight text-[#131313] sm:text-4xl sm:leading-snug md:text-5xl lg:mb-10 lg:text-[42px] lg:leading-[1.4] xl:text-5xl">

                        Books to freshen
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        up your bookshelf

                    </h1>

                    <Link
                        href="/listed"
                        className="inline-flex items-center justify-center rounded-lg bg-[#23BE0A] px-6 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1fa609] hover:shadow-lg active:scale-95 sm:px-7 sm:py-4 sm:text-lg lg:py-5 lg:text-xl"
                    >
                        View The List
                    </Link>

                </div>

                {/* Image */}
                <div className="relative z-10 flex w-full justify-center lg:w-1/2 animate-[heroImage_1s_ease-out_both]">

                    <Image
                        src="/images/heroimage.png"
                        alt="Books to freshen up your bookshelf"
                        width={318}
                        height={394}
                        priority
                        sizes="(max-width: 640px) 210px, (max-width: 768px) 250px, (max-width: 1024px) 280px, 318px"
                        className="h-auto w-[190px] object-contain transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-105 sm:w-[230px] md:w-[270px] lg:w-[290px] xl:w-[318px]"
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;