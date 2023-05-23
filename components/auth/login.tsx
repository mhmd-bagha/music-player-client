import {BiUser} from "react-icons/bi";
import {AiOutlineLock} from "react-icons/ai";

const Login = () => {
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow bg-white rounded-lg py-5 px-8 h-1/2">
                <form>
                    {/* email */}
                    <div className="py-2">
                        <label htmlFor="email" className="text-dark-electric-blue">Email</label>
                        <div className="flex items-center relative mt-2.5">
                            <BiUser size={22} className="text-zinc-400 absolute ml-2"/>
                            <input type="email" name="email" id="email" placeholder="Username@mail.com"
                                   className="border border-zinc-300 py-2.5 px-10 rounded-lg outline-none placeholder:text-zinc-400 pl-10"/>
                        </div>
                    </div>
                    {/* password */}
                    <div className="py-2">
                        <label htmlFor="password" className="text-dark-electric-blue">Password</label>
                        <div className="flex items-center relative mt-2.5">
                            <AiOutlineLock size={22} className="text-zinc-400 absolute ml-2"/>
                            <input type="password" name="password" id="password" placeholder="Password"
                                   className="border border-zinc-300 py-2.5 px-10 rounded-lg outline-none placeholder:text-zinc-400 pl-10"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login