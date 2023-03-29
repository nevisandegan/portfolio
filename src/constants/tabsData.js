import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
  } from "@mui/icons-material";

  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
export const tabsData=()=>
{
    const tabs = [
        {
          labell: "صفحه اصلی",
          iconn: <HomeRounded fontSize="large"/>,
          ...tabProps(0),
        },
        {
          labell: "درباره ی من",
          iconn: <FaceRounded fontSize="large"/>,
          ...tabProps(1),
        },
        {
          labell: "رزومه ی من",
          iconn: <TextSnippetRounded fontSize="large"/>,
          ...tabProps(2),
        },
       
        {
          labell: "نظرات",
          iconn: <MessageRounded fontSize="large"/>,
          ...tabProps(3),
        },
        {
          labell: "ارتباط با من",
          iconn: <ConnectWithoutContactRounded fontSize="large"/>,
          ...tabProps(4),
        },
      ];
      return tabs;
}

