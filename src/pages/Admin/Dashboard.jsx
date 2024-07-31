import { twMerge } from "tailwind-merge";
import AdminDashboardContainer from "../../components/Container/AdminDashboardContainer";
import AdminTopTitle from "../../components/Container/AdminTopTitle";
import DashboardAnalysis from "../../components/Cards/DashboardAnalysis";
import Search from "../../components/Search/Search";
import SearchBtn from "../../components/Buttons/SearchBtn";
import AntTable from "../../components/Table/Table";
import TabsContainer from "../../components/Container/TabsContainer";
import {
  demoOrdersList,
  demoPendingOrders,
  topSellingProducts,
} from "../../constants/tableData";

const Dashboard = () => {
  const tabs = [
    {
      label: "Active Orders",
      key: "1",
      children: (
        <AntTable columns={demoOrdersList.columns} data={demoOrdersList.data} />
      ),
    },
    {
      label: "Pending Orders",
      key: "2",
      children: (
        <AntTable
          columns={demoPendingOrders.columns}
          data={demoPendingOrders.data}
        />
      ),
    },
    {
      label: "Top Selling Products",
      key: "3",
      children: (
        <AntTable
          columns={topSellingProducts.columns}
          data={topSellingProducts.data}
        />
      ),
    },
  ];

  return (
    <AdminDashboardContainer>
      <div className={twMerge(" px-8 pt-8")}>
        <AdminTopTitle
          h1="Welcome back, Kirubel"
          para="Here is what is happening in your store today."
        />

        <div className={twMerge("mt-16")}>
          <DashboardAnalysis total={1000} time="Today" orders="500" />

          <div className={twMerge("flex items-center gap-8 mt-16")}>
            <div>
              <Search
                name={"searchProduct"}
                placeholder="Search for an order"
                hasKey={true}
                keys={[
                  { label: "Product Name", value: "productName" },
                  { label: "Ordered By", value: "orderedBy" },
                ]}
              />
            </div>

            <SearchBtn onClick={() => null} label="Search" />
          </div>

          <div className={twMerge("mt-8")}>
            <TabsContainer items={tabs} onChange={(key) => console.log(key)} />
          </div>
        </div>
      </div>
    </AdminDashboardContainer>
  );
};

export default Dashboard;
