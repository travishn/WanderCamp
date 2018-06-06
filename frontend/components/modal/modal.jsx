import React from 'react';
import LoginFormContainer from '../../components/session_form/login_form_container';
import SignUpFormContainer from '../../components/session_form/signup_form_container';

class Modal extends React.Component {
  render() {
    const { modal, closeModal } = this.props;
    if (!modal) return null;
    let component;

    switch(modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignUpFormContainer />;
        break;
      default:
        return null;
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

export default Modal;