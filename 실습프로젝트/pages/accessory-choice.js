import React, { useState } from "react";
import BottomButton from "../src/components/BottomButton";
import { useRouter } from "next/router";
import Radio from "../src/components/Radio";
import RadioGroup from "../src/components/RadioGroup";

export default function accessoryChoice() {
  const router = useRouter();
  const [selectedAccessory, setSelectAccessory] = useState("");

  const goNextPage = () => {
    localStorage.setItem("selected_accessory", selectedAccessory);
    router.push("/complete");
  };

  // const onChangeHandler = e => {
  //     setSelectAccessory(e.target.value);
  // };

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          모니터와 키보드 중 원하는 악세서리를 선택해 주세요.
        </h3>
        {/* <label>
                    <input type='radio' id='accessory' name='accessory' value='monitor' onChange={onChangeHandler} />
                    monitor
                </label>
                <label>
                    <input type='radio' id='accessory' name='accessory' value='keyboard' onChange={onChangeHandler} />
                    keyboard
                </label> */}
        <RadioGroup
          name="accessory"
          onChange={(state) => setSelectAccessory(state)}
        >
          <Radio
            id="monitor"
            name="accessory"
            value="monitor"
            label="monitor"
          />
          <Radio
            id="keyboard"
            name="accessory"
            value="keyboard"
            label="keyboard"
          />
        </RadioGroup>
        <BottomButton onClick={goNextPage}>완료 화면으로 넘어가기</BottomButton>
      </div>
    </div>
  );
}
