import "../styles/Modal.css";

function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(event) => {
          // we notice that out app is also closing even if we are not cliking on the backdrop
          event.stopPropagation(); // this stops that it doesnot passes the thing to the parents
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
