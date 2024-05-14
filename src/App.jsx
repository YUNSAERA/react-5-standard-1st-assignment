import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);
  const [name, setName] = useState(""); // 이름에 대한 상태
  const [age, setAge] = useState("");   // 나이에 대한 상태

  const addUser = (e) => {
    e.preventDefault();
    if (!name || !age) {
      alert("이름과 나이를 모두 입력하세요.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name,
      age: parseInt(age),
    };
    setUsers([...users, newUser]);
    setName(""); // 이름 입력 필드 초기화
    setAge("");  // 나이 입력 필드 초기화
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">사용자 추가</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ display: "flex", alignItems: "center" }}>
            이름: {user.name}, 나이: {user.age}
            <button onClick={() => removeUser(user.id)} style={{ marginLeft: "10px" }}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
