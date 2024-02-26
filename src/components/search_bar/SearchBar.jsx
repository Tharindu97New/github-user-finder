import { useState, useEffect } from "react";
import FormInput from "../common/FormInput";
import "./SearchBar.css";
import SubmitButton from "../common/SubmitButton";
import { useDispatch } from "react-redux";
import { fetchSearchUsers } from "../../redux/searchUser/searchUserAction";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleSearch = async () => {
    dispatch(fetchSearchUsers(username));
  };

  return (
    <div className="search-bar-container">
      <FormInput 
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <SubmitButton text="Search" onClick={handleSearch} />
    </div>
  );
}

export default SearchBar;