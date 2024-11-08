import Image from "next/image";




const hero =() => {
    return(
        <div className="h-[80vh] container mx-auto flex items-center">
                <div className="mx-[30px] flex-1">
                   <h1 className="text-[40px] font-serif italic leading-[50px] ">IMPECCABLE <br />
                   CRAFTSMANSHIP AND <br /> FINESSE
                   </h1>     
                   <p className="my-[20px] text-[#A29875] text-[25px] font-serif">An example of intricate workmanship and detail, elegant <br /> necklaces and long and short chains form a part of our <br /> desirable collection.</p>
                    <button className="h-[49px] w-[246px] bg-[#A29875] rounded-xl text-white p-[8.6px]">Explore Now</button>
                </div>
                <div className="me-3">
                    <Image  
                    src="/images/layer.svg"
                    alt="layer"
                    width={350}
                    height={573}
                    />
                </div>
            </div>
    )
}
export default hero;