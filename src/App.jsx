import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/slice/counterSlice";
import { login, logout } from "./redux/slice/userSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const handleCount = () => {
  //   dispatch(increment({count: 2}))
  // }
  const handleLogin = () => {
    dispatch(login({ name: "John Deo" }));
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center p-8 bg-white shadow-xl rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Redux Toolkit Counter</h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold">
              {user.isLoggedIn ? `Hello, ${user.name}` : "Please log in"}
            </h2>
            {user.isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>
          <div className="space-x-4">
            <button
              onClick={() => dispatch(increment())}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Increment
            </button>
            <span className="text-xl font-semibold">{count}</span>
            <button
              onClick={() => dispatch(decrement())}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch(reset())}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Reset Counter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
