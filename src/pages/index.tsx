import React, { useState } from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [user, setUser] = useState<string>("");
  return (
    <>
      <section>
        <div className={styles.container}>
          <h1>Welcome to CodeLeap network </h1>
          <form>
            <label htmlFor="name">Please enter your username</label>
            <input
              type="text"
              {...register("name", { required: true })}
              onChange={(e) => setUser(e.target.value)}
            />

            <button
              className={user === "" ? styles.disabled : styles.active}
              disabled={user === ""}
            >
              Enter
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
