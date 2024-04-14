import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const MessageContext = createContext();

function MessageProviderWrapper(props) {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('Mensaje de ejemplo');

    const emitMessage = text => {
        setToastMessage(text);
        setShowToast(true);
    };

    const closeToast = () => setShowToast(false);

    return (
        <MessageContext.Provider value={{ toastMessage, emitMessage, closeToast, showToast }}>
            {props.children}
        </MessageContext.Provider>
    );
}

// Agrega validación de tipo para props.children
MessageProviderWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export { MessageContext, MessageProviderWrapper };
