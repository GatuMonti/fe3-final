export const reducer = (state, accion) => {
    switch (accion.type) {
        case "GET_DENTISTAS":
            return { ...state, dentistas: accion.payload };
        case "GET_DENTISTA_DETAIL":
            return {
                ...state,
                dentista: { ...state.dentista, detail: accion.payload },
            };
        case "SAVE_ID_DENTISTA":
            return {
                ...state,
                dentista: { ...state.dentista, paramDent: accion.payload },
            };
        case "CHANGE_THEME":
            return {
                ...state,
                theme: accion.payload
            }
        case "UPDATE_FAVS":
            return {
                ...state,
                favs: accion.payload
            }
        

    }
};

