// import useAxios from "@hooks/useAxios";
import type { TodoItem } from "@pages/TodoInfo";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useOutletContext } from "react-router";

interface OutletContextProps {
  item: TodoItem;
}

function TodoEdit() {
  const navigate = useNavigate();

  const { item } = useOutletContext<OutletContextProps>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoItem>({
    defaultValues: {
      title: item.title,
      content: item.content,
      done: item.done,
    },
  });

  // 수정버튼을 클릭시
  const updateTodo = (formData: TodoItem) => {
    console.log("API 서버에 수정 요청", formData);
    try {
      alert("할일이 수정 되었습니다.");
      navigate(-1); // window.history.go(-1), 한페이지 전 화면을 보여줌
    } catch (err) {
      console.error("할일 수정에 실패하였습니다",err)
      alert("할일 수정에 실패하였습니다");
    }
    // 수정되고나서 사용자 화면이동(상세보기)
    // navigate(`list/1`); // list/1 을 보여줌, 하드코딩 => 이러면 현제 주소 뒤에 붙어서 무조건 절대경로 필수
    // navigate(`/list/1`); // list/1 을 보여줌, 하드코딩
  };
  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={handleSubmit(updateTodo)}>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
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
          <label htmlFor="done">완료 : </label>
          <input type="checkbox" id="done" defaultChecked={item.done} {...register("done")} />
          <br />
          <button type="submit">수정</button>
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
