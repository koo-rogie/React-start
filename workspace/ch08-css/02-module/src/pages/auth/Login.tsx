import Button from "@/components/ui/Button";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={`${styles.form}`}>
        <div className={styles["input-group"]}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className={styles["input"]} autoComplete="email" required />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className={styles["input"]} autoComplete="current-password" required />
        </div>
        <Button type="button" bg="blue" color="red">
          회원가입
        </Button>
        <Button type="button" bg="yellow" color="red">
          로그인
        </Button>
        <Button type="button" bg="gray" color="blue">
          아이디 찾기
        </Button>
      </form>
    </div>
  );
}

export default Login;
