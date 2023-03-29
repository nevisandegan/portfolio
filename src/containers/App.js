import {useMediaQuery } from "@mui/material";
import {useTheme} from "@mui/material/styles"
import { useEffect, useState } from "react";
import PagesContainer from "./PagesContainer";
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import {Page} from "../components/pages";
import SidebarCaontaienr from "./SidebarContainer";
import DraweActionButton from "../components/drawer/DrawerActionButton";
import SwipeableViews from "react-swipeable-views";
//context
import MainContext from "../context";
//img
//
import {About, Home,Resume,Contact} from "../pages"
import Comments from "../pages/Comments";
//css

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const theme=useTheme();
  const isMdUp=useMediaQuery(theme.breakpoints.up("md"));


  useEffect(()=>
    {
        if(isMdUp)
        {
          setDrawerOpen(false);
        }
    },[isMdUp])

  const handlePageNumber = (event, newValue) => {
    
    setPageNumber(newValue);
  };
  const handleChangeIndex=index=>
  {
    setPageNumber(index)
  }
  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
    >
      <MainLayout>
        <SidebarCaontaienr>
          <Sidebar pageNumber={pageNumber} handleChange={handlePageNumber} />
        </SidebarCaontaienr>
        <DraweActionButton />
        <PagesContainer>
          <SwipeableViews 
            index={pageNumber}
            onChangeIndex={handleChangeIndex}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home  helmetTitle={"وب سایت شخصی نویسندگان"}/>
            </Page>
            <Page pageNumber={pageNumber} index={1}>
           <About  helmetTitle={"وب سایت نویسندگان | درباره من"}/>
            </Page>
            <Page pageNumber={pageNumber} index={2}>
             <Resume helmetTitle={"وب سایت نویسندگان | رزومه من"}/>
            </Page>
            <Page pageNumber={pageNumber} index={3}>
          <Comments helmetTitle="وب سایت نویسندگان | نظرات"/>
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Contact helmetTitle="وب سایت نویسندگان | ارتباط با من"/>
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
