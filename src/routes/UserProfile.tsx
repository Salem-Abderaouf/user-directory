import { Link, useLocation } from "react-router-dom";
import { User } from "../types/types";
import ProfileImage from "../components/ProfileImage";
import { LeftArrowIcon } from "../assets/icons/Icons";

const UserProfile = () => {

    const { state  } = useLocation();
    const user:User = state;

    return (
        <section className="container p-2 md:p-4 lg:p-6">
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <ProfileImage src={user.picture} alt={user.name.first} />
                <div className="py-5 text-center">
                    <p className="block text-xl font-bold text-gray-800 dark:text-white">{user.name.first} {user.name.last}</p>
                    <span className="text-sm text-gray-700 dark:text-gray-200">{user.email}</span>
                </div>
                <Link to="/">
                <button className="flex flex-row gap-2 items-center px-6 py-2 m-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    <LeftArrowIcon />
                    back
                </button>
                </Link>
            </div>
        </section>
    )
}
export default UserProfile;