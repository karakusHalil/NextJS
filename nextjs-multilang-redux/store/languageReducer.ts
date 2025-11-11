export interface LanguageState {
    language: string;
}

const initialState: LanguageState = { language: 'en' };

export const SET_LANGUAGE = 'SET_LANGUAGE';

interface SetLanguageAction {
    type: typeof SET_LANGUAGE;
    payload: string;
}

type LanguageActionTypes = SetLanguageAction;


const languageReducer = (
    state = initialState,
    action: LanguageActionTypes
): LanguageState => {
    switch (action.type) {
        case SET_LANGUAGE:
            return { ...state, language: action.payload };
        default:
            return state;
    }
};

export default languageReducer;