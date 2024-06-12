import ShowChartIcon from "@mui/icons-material/ShowChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import CategoryIcon from "@mui/icons-material/Category";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LayersIcon from "@mui/icons-material/Layers";

export const upperList = [
  { text: "Dashboard", icon: <ShowChartIcon /> },
  { text: "Chart", icon: <DashboardIcon /> },
  { text: "Bar Chart", icon: <BarChartIcon /> },
  { text: "Pie Chart", icon: <PieChartIcon /> },
];

export const lowerList = [
  { text: "Product", icon: <Inventory2Icon /> },
  { text: "Costumers", icon: <CurrencyRupeeIcon /> },
  { text: "Overview", icon: <LayersIcon /> },
  { text: "Category", icon: <CategoryIcon /> },
  { text: "Offers", icon: <LocalOfferIcon /> },
];
