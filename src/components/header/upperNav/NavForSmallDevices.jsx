import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";
import Cart from "./Cart";
import Account from "./Account";
import hamburg from "../../../assets/icons/hamburgIcon.svg";
import { useState } from "react";
import { Box, Drawer } from "@mui/material";

const style = {
  position: "fixed",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  // borderRadius: "0.938rem",
  boxShadow: 30,
  overflowY: "auto",
  outline: "none",
  paddingInline: "2.1875rem",
};

const NavForSmallDevices = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  return (
    <>
      <nav className="navBar">
        <NavLink to={"/"}>
          <Logo height={30} width={25} />
        </NavLink>

        <div onClick={toggleDrawer(true)}>
          <img src={hamburg} alt="hambueg icon" />
        </div>

        {drawerOpen ? (
          <Drawer
            PaperProps={{ sx: { width: "100%" } }}
            anchor={"right"}
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            sx={style}
          >
            <span onClick={toggleDrawer(false)} className="drawer-cross">
              X
            </span>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                ml: "auto",
                mt: 1,
                mr: 2,
              }}
            >
              <div className="drawer_menu">
                <Menu />
                <div className="drawer_menu-cartAccount">
                  <Cart />
                  <Account />
                </div>
              </div>
            </Box>
          </Drawer>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};
export default NavForSmallDevices;
