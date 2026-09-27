import Image from "next/image"


const Hero = () => {
    return (
        <div className="container mx-auto bg-[#F3F3F3] my-12 font-googlePro rounded-xl flex items-center justify-between py-[136] px-30">
            {/* div1 */}
            <div>
                <h1 className="font-bold text-5xl leading-20 mb-12">Books to freshen <br /> up your bookshelf</h1>
                <a className="btn bg-[#23BE0A] text-white px-7 py-5 font-bold text-xl">View The List</a>
            </div>
            {/* div2 */}
            <div>
                <Image
                    src="/images/heroimage.png"
                    alt="book banner"
                    width={318}
                    height={394}
                />
            </div>


        </div>
    )
}

export default Hero