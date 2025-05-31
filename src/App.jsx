import "./App.css";
import Todo from "./component/todo/Todo";
// import Increment from "./component/Increment";

function App() {
  return (
    <>
      <div className="h-dvh w-full bg-gray-800">
        <h2 className="text-3xl font-bold text-green-500 text-center pt-8">
          Todos With Redux
        </h2>
        <Todo />
      </div>
      {/* incremented from redux */}
      {/* <Increment/> */}
    </>
  );
}

export default App;
