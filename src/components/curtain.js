import React from "react"
import { slide as Menu } from "react-burger-menu"

function Curtain({ children, isOpen, onClose }) {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#FAFAF9",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#FAFAF9",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    bmItem: {},
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  }

  return (
    <Menu
      customBurgerIcon={false}
      styles={styles}
      width="100%"
      isOpen={isOpen}
      onClose={onClose}
      right
    >
      {children}
    </Menu>
  )
}

export default Curtain
