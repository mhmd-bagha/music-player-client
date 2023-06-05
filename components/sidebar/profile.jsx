import Image from "next/image";
import ImagePerson from "@/public/users/elon-musk.jpg";
import {IoNotificationsOutline} from "react-icons/io5";
import {useState} from "react";
import useUser from "@/hooks/auth";
import Link from "next/link";
import {useRouter} from "next/router";

const Profile = () => {
    const {user, auth} = useUser()
    const enableAlarm = useState(false)
    const router = useRouter()

    return (
        auth ? <div className="flex justify-between items-center">
                {/* user information */}
                <div className="flex items-center">
                    <Image src={ImagePerson} alt={'elon musk'} className="w-12 h-12 rounded-3xl"/>
                    <div className="pl-3.5 lg:hidden 2xl:block">
                        {(user.last_name !== null) ?
                            <p className="color-gunmetal text-sm font-bold">{user.last_name}</p> :
                            <Link href="/profile">Change name</Link>}
                        <p className="color-crayola text-sm xl:text-xs">Premium Member.</p>
                    </div>
                </div>
                {/* notification */}
                <div>
                    <IoNotificationsOutline className='color-gunmetal' size={27}/>
                    {enableAlarm ?
                        <p className="relative w-2 h-2 rounded-full bg-red-600 border border-gray-800 left-4 bottom-5 after:content-['']"/> : null}
                </div>
            </div> :
            <button className="bg-anti-flash-white w-full hover:bg-gray-200 py-2.5 rounded-lg transition"
                    onClick={() => router.push('/auth')}>Login
            </button>
    )
}

export default Profile