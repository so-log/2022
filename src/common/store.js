import { createStore } from 'vuex'
const store = createStore({
    state(){
        return {
            member : {}
        };
    },
    mutations : {
        setMember(state, member){
            state.member = member;
        }
    },
});

export default store;