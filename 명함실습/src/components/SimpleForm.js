import React, { useState }  from "react";

export default function SimpleForm() {
    // const [nickname, setNickname] = useState("")
    // const [password, setPasword] = useState("")
    const [userInputs, setUserInputs] = useState({
        nickname : "",
        password : "",
    })

    const handleChange = (e) => {
        setUserInputs({ ...userInputs, [e.target.name] : e.target.value});
        // if(e.target.name === "nickname") return setUserInputs(e.target.value);
        // return setPasword(e.target.value);
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nickname, password } = userInputs
        alert(`nickname : ${nickname}, password : ${password}`);
    };

    return (
        <form onSubmit={handleSubmit}> 
            <label>닉네임 : </label>
            <input type="text" name="nickname" onChange={handleChange} value={userInputs.nickname}/> <br />
            <label>패스워드 : </label>
            <input type="text" name="password" onChange={handleChange} value={userInputs.password}/>
            <input type="submit" value="제출" />
        </form>
    )
}