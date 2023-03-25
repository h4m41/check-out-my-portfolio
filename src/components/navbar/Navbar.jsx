import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { changeTheme } from '../../redux/ThemeSlice';
const Navbar = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center space-x-4 md:mt-10 mb-12">
      <Link
        to="/"
        className={` text-base px-4 py-2 rounded-lg self-center   ${
          isDark ? " bg-stone-600" : "bg-pattens-blue-200"
        }`}
      >
        home
      </Link>
      <Link
        to="/projects"
        className={`text-base px-4  py-2 rounded-lg self-center ${
          isDark ? " bg-stone-600" : "bg-pattens-blue-200"
        } `}
      >
        projects
      </Link>
      <div className=' space-x-2'>
        <input
          type="checkbox"
          name="in"
          checked={isDark}
          onChange={() => dispatch(changeTheme())}
        />
        <label>coffee</label>{" "}
      </div>{" "}
    </div>
  );
}

export default Navbar