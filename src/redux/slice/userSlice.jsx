import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: { name: "", isLoggedIn: false },
  reducers: {
    login: (state, action) => {
      (state.isLoggedIn = true), (state.name = action.payload.name);
    },
    logout: (state) => {
      (state.isLoggedIn = false), (state.name = "");
    },
  },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;

/*
- Install npm install @reduxjs/toolkit react-redux
- when you want to set the value from frontend insated of static like we did in count then action parameter will be use along with state
- we can access the value which is come from ui using action.payload 
- In ui we just have to dispatch value like this --> dispatch(login({name: "John Deo"}))
*/
