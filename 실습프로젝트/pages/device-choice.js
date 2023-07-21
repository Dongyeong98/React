import React, { useState } from "react";
import BottomButton from "../src/components/BottomButton";
import { useRouter } from "next/router";
import Radio from "../src/components/Radio";
import RadioGroup from "../src/components/RadioGroup";

export default function deviceChoice() {
  const router = useRouter();
  const [selectedDevice, setSelectDevice] = useState("");

  const goNextPage = () => {
    localStorage.setItem("selected_device", selectedDevice);
    router.push("/accessory-choice");
  };

  // const onChangeHandler = (e) => {
  //   setSelectDevice(e.target.value);
  // };

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">아이맥과 맥북 중 원하는 장비를 선택해 주세요.</h3>
        {/* <label>
                    <input type='radio' id='device' name='device' value='iMac' onChange={onChangeHandler} />
                    iMac
                </label>
                <label>
                    <input type='radio' id='device' name='device' value='Mackbook' onChange={onChangeHandler} />
                    Mackbook
                </label> */}
        <RadioGroup name="device" onChange={(state) => setSelectDevice(state)}>
          <Radio id="iMac" name="device" value="iMac" label="iMac" />
          <Radio
            id="Mackbook"
            name="device"
            value="Mackbook"
            label="Mackbook"
          />
        </RadioGroup>
        <BottomButton onClick={goNextPage}>
          악세서리 선택 화면으로 넘어가기
        </BottomButton>
      </div>
    </div>
  );
}
