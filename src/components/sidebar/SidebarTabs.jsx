import { Tabs, Tab } from "@mui/material";
//icons
//css
import "./css/style.css";
import { useContext } from "react";
import MainContext from "../../context";
import { tabsData } from "../../constants/tabsData"
const SidebarTabs = () => {
  const { setDrawerOpen, pageNumber, handlePageNumber } =
    useContext(MainContext);
  const data = tabsData();
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.labell}
          icon={tab.iconn}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              mx: 1,
              my: 0.3,
              border: "1px solid",
              borderRadius: 2,
              fontSize: "1.4rem",
            },
          }}
          {...tab}
          onClick={() => setDrawerOpen(false)}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
