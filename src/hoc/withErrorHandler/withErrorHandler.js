import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxillary/Auxillary';
import useHttpErrorHandler from '../../hooks/http-error-handler';
//WithErrorHandler is a functional component which will wrap the incoming errors and provide error in    modal 
const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
       const [error, clearError] = useHttpErrorHandler(axios);
            return (
                <Aux>
                    <Modal
                        show={error}
                        modalClosed={clearError}>
                        {error ? error.message : null}
                    </Modal>
                    <WrappedComponent {...props} />
                </Aux>
            );
        }
    }

export default withErrorHandler;