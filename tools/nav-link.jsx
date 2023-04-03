import Link from "next/link";
import {useRouter} from "next/router";

const NavLink = ({href, className = '', activeClassName = '', children}) => {
    const router = useRouter()

    return (
        <Link href={href}
              className={`${className} ${(router.pathname === href) ? (activeClassName !== '') ? activeClassName : 'active' : ''}`}>{children}</Link>
    )
}

export default NavLink