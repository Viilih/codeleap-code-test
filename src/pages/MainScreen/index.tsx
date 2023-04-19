import React, { useState } from "react";
import styles from "./index.module.scss";
import { Post } from "../../components/post";

export const MainScreen = () => {
  const [title, setTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");

  return (
    <>
      <header className={styles.header}>
        <h1>CodeLeap Network</h1>
      </header>
      <main>
        <section className={styles.addPostContainer}>
          <div className={styles.addPost}>
            <h2>What's on your mind?</h2>
            <form>
              <div className={styles.input}>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Hello Word"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="title">Content</label>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  placeholder="Content Here"
                  onChange={(e) => setPostContent(e.target.value)}
                ></textarea>
              </div>

              <button
                className={
                  title === "" || postContent === ""
                    ? styles.disabled
                    : styles.active
                }
                disabled={title === "" || postContent === ""}
              >
                Create
              </button>
            </form>
          </div>
        </section>
        <section className={styles.postsContainer}>
          <Post
            title="My first Post on the Website"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laboriosam optio similique illum vero sed exercitationem, quisquam
          architecto esse accusantium!"
            autor="João"
            time="25 minutes ago"
            auth={true}
          />
        </section>
      </main>
    </>
  );
};
