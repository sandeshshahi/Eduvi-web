/* eslint-disable react/prop-types */

import { Box } from "@mui/material";
import LoginModalForm from "./LoginModalForm";
import LoginModelLeft from "./LoginModelLeft";
import Modal from "@mui/material/Modal";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: "66.25rem",
  bgcolor: "background.paper",
  borderRadius: "0.938rem",
  boxShadow: 30,
  overflowY: "auto",
  outline: "none",
  paddingInline: "2.1875rem",
};

const LoginModal = ({ openloginModal, closeloginModal }) => {
  return (
    <>
      {console.log(openloginModal)}
      <Modal
        open={openloginModal}
        onClose={() => {
          closeloginModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="loginModal-box" sx={style}>
          <span
            onClick={() => {
              closeloginModal(false);
            }}
            className="loginModal-cross"
          >
            X
          </span>
          <div className="loginModal">
            <LoginModelLeft />
            <span className="loginModal-line"></span>
            <LoginModalForm />
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default LoginModal;
