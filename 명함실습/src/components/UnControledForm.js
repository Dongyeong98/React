import React, { useRef }from "react";

// ref 활용 -> 비제어 컴포넌트 방식으로 Form 다루기
export default function UnControledForm() {
    const inputRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        alert(inputRef.current.value);
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>닉네임 : </label>
            <input type="text" name="nickname" ref={inputRef}/>
            <input type="submit"  value="제출"/>
        </form>
    )
}