import React from "react";

const ConfirmationModal = ({ title, message, cancel, successModal, data,actionBntName,actionBntNameClsName }) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={successModal}
              htmlFor="confirmation-modal"
              className={`btn ${actionBntNameClsName}`}
            >
              {actionBntName}
            </label>
            <label
              onClick={cancel}
              htmlFor="confirmation-modal"
              className="btn btn-outline"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ConfirmationModal;
