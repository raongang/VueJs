
// store.js 

import Vue from 'vue';
import Vuex from 'vuex';

// Vuex 플러그인 사용 등록 

Vue.use(Vuex);

export const store = new Vuex.Store({ 
    // 상태

    state : { 
        fruits: [
            { id: 1, name: 'Apple', price: 30 },
            { id: 2, name: 'Banana', price: 40 },
            { id: 3, name: 'Mango', price: 50 },
            { id: 4, name: 'Orange', price: 60 },
            { id: 5, name: 'Tomato', price: 70 },
            { id: 6, name: 'Pineapple', price: 80 }
          ]     
    }
});