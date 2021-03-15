import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        identity: 1,//0为用户1为管理员
    },
    mutations: {
        setIdentity(state,data){
            state.identity = data;
        }
    },
    actions:{
        Login(){},
        logout(){}
    }
})

export default store
