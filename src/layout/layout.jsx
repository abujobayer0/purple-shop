import React, { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  styled,
  Grid,
  Hidden,
  IconButton,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import useFetchTags from "../hooks/useFetchTags";
import useFetchProducts from "../hooks/useFetchProducts";
import useFetchCategories from "../hooks/useFetchCategories";
import useFetchCollection from "../hooks/useFetchCollection";
import { Categories, Collections, Tags, NavBar } from "../components";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = styled(Box)(({ theme }) => ({
  top: "65px",
  zIndex: 100,
  width: "100%",
  borderRadius: "0px 0px 5px 5px",
  padding: "10px",
  overflowY: "auto",
  position: "sticky",
  [theme.breakpoints.down("md")]: { top: "20px" },
  borderLeft: "1px solid #f0f0f0",
  borderRight: "1px solid #f0f0f0",
  borderBottom: "1px solid #f0f0f0",
}));

const DrawerSidebar = styled(Drawer)(({ theme }) => ({
  width: "40%",
  overflowY: "auto",
}));

const Layout = () => {
  const [tag, setTag] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  let queryUrl;

  if (tag !== "") {
    queryUrl = `/items?tag=${encodeURIComponent(tag)}`;
  }

  const url = queryUrl || "/items";
  const tags = useFetchTags();
  const categories = useFetchCategories();
  const collections = useFetchCollection();

  useFetchProducts(url);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Grid container justifyContent="center" spacing={4}>
          <Hidden mdUp>
            <IconButton onClick={openDrawer}>
              <MenuIcon />
            </IconButton>
            <DrawerSidebar
              anchor="left"
              open={isDrawerOpen}
              onClose={closeDrawer}
            >
              <Sidebar>
                <Categories
                  closeDrawer={closeDrawer}
                  setTag={setTag}
                  categories={categories}
                />
                <Collections
                  closeDrawer={closeDrawer}
                  setTag={setTag}
                  collections={collections}
                />
              </Sidebar>
            </DrawerSidebar>
          </Hidden>
          <Hidden mdDown>
            <Grid item xs={3}>
              <Sidebar>
                <Categories
                  closeDrawer={closeDrawer}
                  setTag={setTag}
                  categories={categories}
                />
                <Collections
                  setTag={setTag}
                  closeDrawer={closeDrawer}
                  collections={collections}
                />
              </Sidebar>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={9}>
            <Tags
              active={tag}
              openDrawer={openDrawer}
              setTag={setTag}
              tags={tags}
            />
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
