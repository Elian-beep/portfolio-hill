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
    onAlertSwitch: boolean,
}

const state: State = reactive({
    sectionName: 'home',
    onAlertSwitch: false
});

export const provideStore = () => {
    return {
        state: readonly(state),
        setSectionName: (name: string) => {
            state.sectionName = name;
        },
        setOnAlertSwitch: (isSwitch: boolean) => {
            state.onAlertSwitch = isSwitch;
        },
    }
}