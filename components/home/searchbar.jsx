import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import styles from "Styles/Home.module.scss";
import {IoSearchOutline} from "react-icons/io5";

const Searchbar = () => {
    return (
        <div className="flex px-8">
            {/* back and forward button */}
            <div className="flex items-center justify-between">
                <button className="px-5"><FiChevronLeft size={25} className="color-gunmetal"/></button>
                <button className="px-5"><FiChevronRight size={25} className="color-crayola"/></button>
            </div>
            {/* search */}
            <div className={`flex justify-center items-center w-10/12 ${styles.searchbar}`}>
                <IoSearchOutline size={19}/>
                <input type="text" placeholder="search..."/>
            </div>
        </div>
    )
}

export default Searchbar