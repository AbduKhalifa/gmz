// user slice file

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { domain } from "../vars/var";

export const checkAboutUserToken = createAsyncThunk(
    'uSlice/checkAboutUserToken',
    async (userToken, thunkAPI) => {
        try {
            const route = "/auth/checktoken";
            const response = await axios.get(domain + route, {
                headers: {
                    "Authorization": userToken
                }
            });
            return response.data.information;
        } catch (error) {
            console.log(error);
            console.log("Failed token");
            // يمكنك إعادة إرجاع الخطأ هنا إذا لزم الأمر
            throw error;
        }
    }
);

const initialState = {
    id: "",
    email: "",
    role: "",
    tkn: "",
    isLogin: false,
    load: true,
    image: ""
}


const uSlice = createSlice({
    name: "uSlice",
    initialState,
    reducers: {
        userLogged: (state, action) => {
            const { email, id, token, nickname, role, avatar } = action.payload;
            state.email = email;
            state.tkn = token;
            state.id = id;
            state.nickname = nickname;
            state.isLogin = true;
            state.role = role
            state.image = avatar
            console.log("logged");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(checkAboutUserToken.fulfilled, (state, action) => {
            return { ...state, ...action.payload };
        });
        builder.addCase(checkAboutUserToken.rejected, (state, action) => {
            console.log("REJECTED");
        });
    },
})

export const { userLogged } = uSlice.actions;
export default uSlice.reducer;