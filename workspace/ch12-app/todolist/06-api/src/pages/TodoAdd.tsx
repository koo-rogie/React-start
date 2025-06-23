import useAxiosInstance from "@hooks/useAxiosInstance";
import type { TodoItem } from "@pages/TodoInfo";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

function TodoAdd() {
  "use no memo";
  const axiosInstance = useAxiosInstance();
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<TodoItem>();

  const addTodo = async (formData: TodoItem) => {
    console.log("API 서버에 등록 요청", formData);
    try {
      // 정상 사이트에 접근 할 경우에 나옴
      await axiosInstance.post("/todolist", formData);
      alert("할일이 등록 되었습니다.");

      reset();
      setFocus("title");
    } catch (err) {
      // 이미 삭제된 페이지에 접근 할 경우 나옴
      console.error("할일 등록이 실패 되었습니다.", err);
      alert("할일 등록이 실패 했습니다.");
    }
  };

  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form onSubmit={handleSubmit(addTodo)}>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
            autoFocus
            placeholder="제목을 입력해주세요"
            {...register("title", {
              required: "🚨 제목을 입력하세요",
              pattern: {
                value: /\S/,
                message: "제목에 공백만 입력할 수 없습니다.",
              },
            })}
          />
          <div className="input-error">{errors.title?.message}</div>
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols={23}
            rows={5}
            placeholder="내용을 입력해주세요"
            {...register("content", {
              required: "🚨 내용을 입력하세요",
              pattern: {
                value: /\S/,
                message: "내용에 공백만 입력할 수 없습니다.",
              },
            })}
          />
          <div className="input-error">{errors.content?.message}</div>
          <br />
          <button type="submit">추가</button>
          <Link to="/list"> 취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoAdd;
