import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import MailOutline from "@mui/icons-material/MailOutline";

import Navigation from "../Navigation";

const drawerWidth = 200;
const Layout = ({ children }) => (
  <Box
    sx={{
      display: "flex",
    }}
  >
    <CssBaseline />
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Betsy Losen</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <MailOutline />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Navigation />
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Toolbar />
      {children}
    </Box>
  </Box>
);

export default Layout;
