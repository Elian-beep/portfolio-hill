// import type { InjectionKey } from "vue";
// import { Store, createStore } from "vuex/types/index.js";

// interface State {
//     sectionName: string
// }
// export const key: InjectionKey<Store<State>> = Symbol();

// export const store = createStore<State>({
//     state: {
//         sectionName: 'home',
//     }
// });
import { reactive, readonly } from 'vue';

interface State {
    sectionName: string,
}

const state: State = reactive({
    sectionName: 'home',
});

export const provideStore = () => {
    return {
        state: readonly(state),
        setSectionName: (name: string) => {
            state.sectionName = name;
        }
    }
}