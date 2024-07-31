import { twMerge } from "tailwind-merge";
import AdminDashboardContainer from "../../components/Container/AdminDashboardContainer";
import AdminTopTitle from "../../components/Container/AdminTopTitle";
import Search from "../../components/Search/Search";
import SearchBtn from "../../components/Buttons/SearchBtn";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import AntTable from "../../components/Table/Table";
import { products } from "../../constants/tableData";

const Products = () => {
  return (
    <AdminDashboardContainer>
      <div className={twMerge(" px-8 pt-8")}>
        <AdminTopTitle h1="Products" para="Manage your products from here." />

        <div className={twMerge("mt-16")}>
          <div className={twMerge("flex justify-between items-center mb-8")}>
            <div className={twMerge("flex items-center gap-4")}>
              <Search
                name="searchProducts"
                hasKey={false}
                placeholder="Search for Products"
              />

              <SearchBtn label="Search" onClick={() => null} />
            </div>
            <PrimaryBtn
              style={"py-[11px] px-7 rounded-[16px]"}
              label="+ Add Product"
              onClick={() => null}
            />
          </div>

          <div>
            <h2
              className={twMerge(
                "text-[16px] mb-8 font-medium text-PRIMARY/80"
              )}
            >
              Products
            </h2>

            <AntTable data={products.data} columns={products.column} />
          </div>
        </div>
      </div>
    </AdminDashboardContainer>
  );
};

export default Products;
