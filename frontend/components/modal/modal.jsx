import React from 'react';
import LoginFormContainer from '../../components/session_form/login_form_container';
import SignUpFormContainer from '../../components/session_form/signup_form_container';

class Modal extends React.Component {
  animateOut() {
    const { closeModal } = this.props;
    const targetEl = document.querySelector('.modal-child')
    targetEl.classList.remove('slideInDown');
    targetEl.classList.add('fadeOutUp');

    window.setTimeout(() => {
      closeModal();
    }, 600);
  }

  render() {
    const { modal } = this.props;
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

    return <div className="modal-background" onClick={() => this.animateOut()}>
        <div className="modal-child animated slideInDown" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>;
  }
}

export default Modal;