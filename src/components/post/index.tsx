import React from "react";
import styles from "./index.module.scss";
import trashIcon from "../../assets/trash.svg";
import editIcon from "../../assets/edit2.svg";
import penIcon from "../../assets/pen.svg";
import editBtn from "../../assets/editBtn.svg";

interface PostProps {
  title: string;
  content: string;
  autor: string;
  time: string;
  auth?: boolean;
}

export const Post: React.FC<PostProps> = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <h2>{props.title}</h2>
        {props.auth === true ? (
          <div className={styles.icons}>
            <img src={trashIcon} alt="trash icon" />
            {/* <img src={editIcon} alt="edit icon" /> */}
            <img src={penIcon} alt="edit icon" />
          </div>
        ) : null}
      </div>
      <div className={styles.postBody}>
        <div className={styles.author}>
          <p>@{props.autor}</p>
          <p>{props.time}</p>
        </div>
        <div className={styles.postContent}>{props.content}</div>
      </div>
    </div>
  );
};
