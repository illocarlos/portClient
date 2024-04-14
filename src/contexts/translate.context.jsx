import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const TranslateContext = createContext();

function TranslateContextWrapper(props) {
    const [isTranslate, setIsTranslate] = useState(false);

    const switchTranslate = () => {
        setIsTranslate(!isTranslate);
    };

    return (
        <TranslateContext.Provider value={{ isTranslate, switchTranslate }}>
            {props.children}
        </TranslateContext.Provider>
    );
}

// Agrega validación de tipo para props.children
TranslateContextWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export { TranslateContext, TranslateContextWrapper };
