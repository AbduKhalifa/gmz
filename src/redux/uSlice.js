// user slice file
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    email: "",
    isAdmin: "",
    tkn: "",
    isLogin: false,
}

const uSlice = createSlice({
    name: "uSlice",
    initialState,
    reducers: {
        userLogged: (state, action) => {
            const { email, id, isAdmin, token, nickname } = action.payload;
            state.email = email;
            state.tkn = token;
            state.isAdmin = isAdmin;
            state.id = id;
            state.nickname = nickname;
            state.isLogin = true;
            console.log("logged");
        }
    }
})

export const { userLogged } = uSlice.actions;
export default uSlice.reducer;