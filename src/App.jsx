import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [workList, setWorkList] = useState([
    {
      id: Date.now(),
      title: "순공 시간 확인하기",
      content: "순공 시간 체크해서 공부해봅시다.",
      isDone: true,
    },
  ]);

  const clickAddWorkHandler = () => {
       // title과 content가 모두 비어 있지 않은 경우에만 작업 항목 추가
    if (title.trim() && content.trim()) {
        // 새로운 작업 항목 추가
      setWorkList([
        ...workList, // 기존 작업 목록 유지
        { id: Date.now(), title, content, isDone: false },
      ]);
      setTitle("");   
      setContent("");
    }
  };

  const toggleCompletionHandler = (id) => {
    setWorkList(
      workList.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const clickDeleteHandler = (id) => {
    setWorkList(workList.filter((item) => item.id !== id));
  };

  return (
    <div className="layout">
      <div className="title">
        <div className="title1">My Todo List</div>
        <div className="title2">React</div>
      </div>
      <div className="inputArea">
        <div className="titleText">제목 :</div>
        <input
          className="inputTitle"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <div className="contentText">내용 :</div>
        <input
          className="inputContent"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button className="addWork" onClick={clickAddWorkHandler}>
          추가하기
        </button>
      </div>
      <section className="working">
        <h3 className="workingTitle">Working..🔥</h3>
        <div className="workingList">
          {workList
            .filter((item) => !item.isDone)
            .map((item) => (
              <div key={item.id} className="workingComponent">
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
                <div className="buttons">
                  <button
                    className="deleteWork"
                    onClick={() => clickDeleteHandler(item.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="completeWork"
                    onClick={() => toggleCompletionHandler(item.id)}
                  >
                    완료
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section className="done">
        <h3 className="doneTitle">Done..!🎉</h3>
        <div className="doneList">
          {workList
            .filter((item) => item.isDone)
            .map((item) => (
              <div key={item.id} className="doneComponent">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="buttons">
                  <button
                    className="deleteWork"
                    onClick={() => clickDeleteHandler(item.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="uncompletedWork"
                    onClick={() => toggleCompletionHandler(item.id)}
                  >
                    취소
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default App;
