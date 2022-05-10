import React, { useEffect, useState } from "react";

// https://github.com/bobfrontdev/coding-assessment

//github에서 주어진 저장소를 복제하고 모든 문제를 해결한 후 pull 요청을 하십시오

//  1. 각각에 대한 반환 값을 기록하십시오.

// 0 == false ->  ?
// 0 === false -> ?
// 1 == “1” -> ?
// 1 === “1” -> ?

// '9' - '5' -> ?
// '19' - '13' + '17' -> ?
// '19' - '13' + 17 ->?
// '123' < 57 -> ?
// 5 + 6 + '4' + 9 - 4 - 2 -> ?

// 10 || ‘Number’ || ‘’ ->?
// 0 || 23 || ‘’ || 99  ->  ?

// 0 && ‘String’ -> ?
// 23 && ‘Number’ -> ?
// 9 && ‘Hello’ && 0 && ‘Spring’ -> ?

//2. 주어진 배열에서 중복을 제거하고 이 값을 콘솔에 기록하십시오. -> ['apple_pie', 'sunny_weather', 'dinner_table', 'hello_world']
const removeDuplicates = [
  "apple_pie_apple",
  "sunny_sunny_weather",
  "dinner_table_dinner",
  "hello_world_hello",
];

//3. 사용자의 이름과 성의 첫 글자만 사용하여 주어진 개체에 'userName' 속성을 추가하고  'userName' 을 포함한 전체 개체를 콘솔에 기록하십시오.. i.e  Bob Pak -> userName: bp
//'movements' 배열을 사용하여 주어진 객체에 'balance' 속성을 추가하십시오.

const userAccount = {
  owner: "Bob Pak",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

//4. CSS를 사용하여 스크린샷 파일에 주어진 UI를 빌드하세요.

//5. https://jsonplaceholder.typicode.com/users
// 주어진 API에서 데이터를 가져와서 이름, 이메일, 도시를 렌더링하세요.

const Assessment = () => {
  return (
    <div>
      <h1>Good Luck</h1>
    </div>
  );
};

export default Assessment;
