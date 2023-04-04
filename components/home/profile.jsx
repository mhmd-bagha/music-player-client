import Image from "next/image";
import ImagePerson from "@/public/users/elon-musk.jpg";
import {IoNotificationsOutline} from "react-icons/io5";
import {useState} from "react";

const Profile = () => {
    const enableAlarm = useState(false)

    return (
        <div className="flex justify-between items-center">
            {/* user information */}
            <div className="flex items-center">
                <Image src={ImagePerson} alt={'elon musk'} className="w-12 h-12 rounded-3xl"/>
                <div className="pl-3.5">
                    <p className="color-gunmetal text-sm font-bold">elon musk</p>
                    <p className="color-crayola text-sm">Premium Member.</p>
                </div>
            </div>
            {/* notification */}
            <div>
                <IoNotificationsOutline className='color-gunmetal' size={27}/>
                {enableAlarm ?
                    <p className="relative w-2 h-2 rounded-full bg-red-600 border border-gray-800 left-4 bottom-5 after:content-['']"/> : null}
            </div>
        </div>
    )
}

export default Profile