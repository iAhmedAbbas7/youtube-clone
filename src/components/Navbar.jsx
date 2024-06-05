import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  // Navbar Main Container
  <Stack
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "white",
      top: 0,
      alignItems: "center",
      justifyContent: { xs: "center", sm: "center", md: "space-between" },
      overflow: "hidden",
      borderBottom: "2px solid #e3e3e3",
      flexDirection: { xs: "column", sm: "column", md: "row" },
      zIndex: 1000,
    }}
  >
    {/* Navbar Logo */}
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", minWidth: "25vw" }}
    >
      <img src={LOGO} alt="logo" height={"32px"} width={"143px"} />
    </Link>
    {/* Navbar Search-Bar */}
    <SearchBar />
  </Stack>
);

export default Navbar;
