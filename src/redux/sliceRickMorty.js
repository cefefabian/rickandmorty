import { createSlice } from '@reduxjs/toolkit';
import apiRest from '../api/apiRest';

export const rickMortySlice = createSlice({
    name: 'rickMorty',
    initialState: {
        dataFill: null,
        page: 1,
        data: [],
        dataPage: []
    },
    reducers: {
        dataFn: (state) => {
            const {data} = apiRest()
            state.data = data;
        },
        dataFillFn: (state, action) => {
            const filtradoHover = state.data.filter((p)=> p.id === action.payload)

            state.dataFill = filtradoHover[0].id
        },
        dataFillFn2: (state) => {
            state.dataFill = 0
        },
        avanzar: (state, action) => {
            let results
            state.page = action.payload + 1
            console.log(state.page);
            const url = `https://rickandmortyapi.com/api/character/?page=${state.page}`
            fetch(url)
            .then((res)=> res.json())
            .then((res)=> res.results)
            .then((res)=> results = res)

            state.dataPage = results 
        }
    }
});


// Action creators are generated for each case reducer function
export const { dataFn, dataFillFn, dataFillFn2, avanzar } = rickMortySlice.actions;