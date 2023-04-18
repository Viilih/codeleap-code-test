import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [loginUser, setLoginUser] = useState<string | null>();
  const [userNotFound, setUserNotFound] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user == null) {
      localStorage.setItem("user", "Guilherme");
    }

    setLoginUser(user);
  }, []);

  const onUserSubmit = () => {
    if (username === loginUser) {
      localStorage.setItem("loggedUser", username);
      navigate("/user/dashboard");
    } else {
      setUserNotFound(true);
    }
  };

  return (
    <>
      <section>
        <div className={styles.container}>
          <h1>Welcome to CodeLeap network </h1>
          <form onSubmit={handleSubmit(onUserSubmit)}>
            <label htmlFor="name">Please enter your username</label>
            <input
              type="text"
              {...register("name", { required: true })}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Guilherme"
            />

            <button
              className={username === "" ? styles.disabled : styles.active}
              disabled={username === ""}
            >
              Enter
            </button>
            {userNotFound ? (
              <p className={styles.errorMessage}>Usuário não encontrado</p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
};
