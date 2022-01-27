import { useState, useRef, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { DiaryDispatchContext } from "../Basic";

import MyButton from "./Mybutton";
import MyHeader from "./MyHeader";
import IconItem from "./IconItem";

import { getStringDate } from "../util/date";
import { iconList } from "../util/icon";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [icon, setIcon] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);
  const handleClickIcon = useCallback((icon) => {
    setIcon(icon);
  }, []);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, icon);
      } else {
        onEdit(originData.id, date, content, icon);
      }
    }

    navigate("/mycolor", { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setIcon(originData.icon);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={isEdit ? "DIARY EDIT" : "NEW DIARY"}
        leftChild={<MyButton text={"<< BACK"} onClick={() => navigate(-1)} />}
        rightChild={
          isEdit && (
            <MyButton
              text={"DELETE"}
              type={"negative"}
              onClick={handleRemove}
            />
          )
        }
      />
      <div>
        <section>
          <h4>What day is it today?</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
        <section>
          <h4>Today's mood</h4>
          <div className="input_box icon_list_wrapper">
            {iconList.map((it) => (
              <IconItem
                key={it.icon_id}
                {...it}
                onClick={handleClickIcon}
                isSelected={it.icon_id === icon}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>Today's diary.</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="What happened today?"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={"CANCEL"} onClick={() => navigate(-1)} />
            <MyButton
              text={"COMPLETE"}
              type={"positive"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
