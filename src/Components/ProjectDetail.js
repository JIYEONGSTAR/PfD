import React, { useState } from "react";
import Modal from "react-modal";
import "Css/ProjectDetail.scss";

Modal.setAppElement("#root");

function ProjectDetail({ project }) {
  console.log(project);
  const [modalTrigger, setModalTrigger] = useState(false);

  const onModal = () => {
    console.log("모달 키기");
    setModalTrigger(true);
    console.log(modalTrigger);
  };

  const offModal = () => {
    console.log("모달 닫기");
    setModalTrigger(false);
    console.log(modalTrigger);
  };

  const customStyles = {
    overlay: {
      background: "rgba(127, 127, 127, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid black",
      borderRadius: "20px",
    },
  };

  const use_for = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(<li key={i}>{arr[i]}</li>);
    }

    return result;
  };

  return (
    <div className="projectDetail">
      {project && (
        <>
          <div onClick={onModal}>
            <div
              // onClick={() => console.log("모달누름")}
              className="projectDetail__name"
            >
              {project.name}
              <h6>{project.content}</h6>
              {project.name && (
                <button className="projectDetail__clickMe">click me</button>
              )}
            </div>
          </div>
          <Modal
            isOpen={modalTrigger}
            onRequestClose={offModal}
            style={customStyles}
          >
            <div className="header">
              <p>프로젝트 상세 설명 </p>
            </div>
            <div className="body">
              <table>
                <tr>
                  <td>프로젝트 이름</td>
                  <td>{project.name}</td>
                </tr>
                <tr>
                  <td>프로젝트 내용</td>
                  <td>{project.content}</td>
                </tr>
                <tr>
                  <td>기술 스택</td>
                  <td>{use_for(project.tech_stack)}</td>
                </tr>
                <tr>
                  <td>맡은 업무</td>
                  <td>{use_for(project.did)}</td>
                </tr>
              </table>
            </div>
            <div className="bottom">
              <button
                onClick={() => {
                  console.log("닫기 버튼 눌림");
                  offModal();
                }}
              >
                close
              </button>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
}

export default ProjectDetail;
