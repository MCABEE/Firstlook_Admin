import { createSlice } from "@reduxjs/toolkit";

export const paymentPlanSlice = createSlice({
    name: 'paymentPlans',
    initialState: {
        paymentPlans: [],
        selectedPlan: {},
        editMode: false,
        update: false,
    },
    reducers: {
        setPaymentPlans: (state, action) => {
            state.paymentPlans = action.payload;
        },
        setSelectedPlan: (state, action) => {
            state.selectedPlan = action.payload;
        },
        setEditMode: (state, action) => {
            state.editMode = action.payload;
        },
        setPlanUpdate: (state) => {
            state.update = !(state.update);
        }
    }
})

export const { setPaymentPlans, setSelectedPlan, setEditMode, setPlanUpdate } = paymentPlanSlice.actions;
export default paymentPlanSlice.reducer;