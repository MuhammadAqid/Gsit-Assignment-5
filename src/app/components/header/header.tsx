import Image from "next/image";
import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";

const header = () => {
return(
    <div className="bg-[#A29875] flex items-center justify-between containerxl p-4">
        <ul className="mx-[30px] flex items-center justify-evenly">
            <Link href="#" className="mr-[100px]"><Image 
            src="/images/Group.svg"
            alt="title"
            width={200}
            height={200}
            />
            </Link>
            <li className="flex">
            <input type="text" name="" id="" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…" className="w-[769px] h-[45px] rounded-lg p-[10px] "/>
            <CiSearch className="-ml-9 h-[20px] w-[20px] mt-3"/>
            </li>
            <li><CiHeart className="w-[33.29px] h-[30px] text-white ms-[50px]"/></li>
            <li><IoPersonOutline className="w-[22px] h-[22px] mx-6 text-white"/></li>
            <li><PiShoppingCartLight className="w-[25px] h-[25px] text-white" /></li>

        </ul>
    </div>
)
}
export default header;