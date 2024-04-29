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
  width: "66.25rem",
  bgcolor: "background.paper",
  borderRadius: "0.938rem",
  boxShadow: 30,
  overflowY: "auto",
  outline: "none",
  paddingInline: "2.1875rem",
};

// const styleForSmallDevices = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "100%",
//   bgcolor: "background.paper",
//   // borderRadius: "1rem",
//   boxShadow: 30,
//   overflowY: "auto",
//   height: "100%",
//   outline: "none",
// };

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
        <Box sx={style}>
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
