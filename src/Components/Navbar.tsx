import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type NavbarProps = {
  onSelect: (section: string) => void;
};

const navItems = ["Home", "Education", "Experience", "Projects", "Contact"];

const Navbar: React.FC<NavbarProps> = ({ onSelect }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (item: string) => {
    setDrawerOpen(false);
    onSelect(item.toLowerCase());
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#1e1e1e" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Dinesh
          </Typography>

          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: "2rem" }}>
              {navItems.map((item) => (
                <Typography
                  key={item}
                  onClick={() => handleClick(item)}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "#ff4a57" },
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#1e1e1e", // true black
            width: 250,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              component="button"
              key={item}
              onClick={() => handleClick(item)}
              sx={{
                textAlign: "left",
                padding: "1rem",
                backgroundColor: "#1e1e1e",
                "&:hover": {
                  backgroundColor: "#111", // dark gray hover
                  color: "#ff4a57", // red on hover
                },
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "white", // use parent color
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
