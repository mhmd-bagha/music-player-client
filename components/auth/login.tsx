import Link from "next/link";
import {BiUser} from "react-icons/bi";
import {AiOutlineLock} from "react-icons/ai";
import {object, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {ElementRef, useRef} from "react";
import {auth} from "@/lib/auth";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

const Login = () => {
    const loginBtnRef = useRef<ElementRef<any> | null>()
    const validator = object({
        email: string().trim().required(),
        password: string().trim().required().min(6)
    })
    const router = useRouter()


    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validator)})

    const handleLogin = (data) => {
        loginBtnRef.current.disabled = true

        auth(data).then((data) => {
            enableLoginBtn()
            toast.success(data.message)
            return router.push('/')
        }).catch((e) => {
            enableLoginBtn()
            handleValidateFormError(e)
            handleLoginError(e)
        });
    }

    const handleLoginError = (e) => {
        if (e.response?.status === 422) {
            const message = e.response.data.message;
            return toast.error(message)
        }
    }

    const handleValidateFormError = (e) => {
        if (e.response?.status === 417) {
            const message = e.response.data.message;

            message.map((errors) => {
                const key = Object.keys(errors)
                return toast.error(errors[key]?.[0])
            })
        }
    }

    const enableLoginBtn = () => loginBtnRef.current.disabled = false

    return (
        <div className="grid place-items-center h-screen bg-anti-flash-white">
            <div className="shadow bg-white rounded-xl py-10 px-8">
                {/* title */}
                <div className="text-center pb-6">
                    <p className="text-lg text-gunmetal font-black">You must Sign In to join</p>
                    <p className="text-sm text-dark-electric-blue capitalize">We&apos;re a team that guides each other</p>
                </div>

                <form method="post" onSubmit={handleSubmit(handleLogin)}>
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
                    <button type="submit"
                            className="bg-gunmetal hover:bg-dark-electric-blue text-anti-flash-white w-full py-2.5 rounded-lg mt-10 transition"
                            ref={loginBtnRef}>
                        Sing in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login