import Link from "next/link";
import {BiUser} from "react-icons/bi";
import {AiOutlineLock} from "react-icons/ai";
import {object, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

const Login = () => {
    let validator = object({
        email: string().trim().required(),
        password: string().trim().required()
    })

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validator)})

    const handleLogin = () => {
    }

    return (
        <div className="grid place-items-center h-screen bg-anti-flash-white">
            <div className="shadow bg-white rounded-xl py-10 px-8">
                {/* title */}
                <div className="text-center pb-6">
                    <p className="text-lg text-gunmetal font-black">You must Sign In to join</p>
                    <p className="text-sm text-dark-electric-blue capitalize">We're a team that guides each other</p>
                </div>

                <form onSubmit={handleLogin}>
                    {/* email */}
                    <div className="py-3">
                        <label htmlFor="email" className="text-dark-electric-blue">Email</label>
                        <div className="flex items-center relative mt-2.5">
                            <BiUser size={22} className="text-zinc-400 absolute ml-2"/>
                            <input type="email" name="email" id="email" placeholder="Username@mail.com"
                                   className="border border-zinc-300 py-2.5 px-10 rounded-lg outline-none placeholder:text-zinc-400 pl-10" {...register('email')}/>
                        </div>
                        <p className="text-xs text-red-700 pt-1">{errors.email?.message}</p>
                    </div>
                    {/* password */}
                    <div className="py-3">
                        <label htmlFor="password" className="text-dark-electric-blue">Password</label>
                        <div className="flex items-center relative mt-2.5">
                            <AiOutlineLock size={22} className="text-zinc-400 absolute ml-2"/>
                            <input type="password" name="password" id="password" placeholder="Password"
                                   className="border border-zinc-300 py-2.5 px-10 rounded-lg outline-none placeholder:text-zinc-400 pl-10" {...register('password')}/>
                        </div>
                        <p className="text-xs text-red-700 pt-1">{errors.password?.message}</p>
                    </div>
                    {/* forgot password */}
                    <Link href="/auth/forgot-password" className="text-sm text-gunmetal flex justify-end">
                        Forgot password?
                    </Link>
                    {/* login button */}
                    <button type="button"
                            className="bg-gunmetal hover:bg-dark-electric-blue text-anti-flash-white w-full py-2.5 rounded-lg mt-10 transition">
                        Sing in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login