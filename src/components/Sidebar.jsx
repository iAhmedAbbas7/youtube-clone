import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  // Sidebar Main Container
  <Stack
    direction={"row"}
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      px: { sx: 0, md: 2 },
      borderBottom: {
        sx: "none",
        sm: "2px solid #e3e3e3",
        xs: "2px solid #e3e3e3",
        lg: "none",
        md: "none",
        xl: "none",
      },
    }}
  >
    {/* Individual Categories */}
    {categories.map((category) => (
      <button
        style={{
          background:
            category.name === selectedCategory && "rgba(114, 113, 113, 0.3)",
          color: "#727171",
        }}
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
      >
        <span
          style={{
            color: "red",
            marginRight: "15px",
          }}
          className="sidebar-icon"
        >
          {category.icon}
        </span>
        <span
          style={{ color: "#727171", fontWeight: 500 }}
          className="sidebar-title"
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
