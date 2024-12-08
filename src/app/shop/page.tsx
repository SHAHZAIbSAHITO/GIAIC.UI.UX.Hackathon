// Importing necessary components and dependencies for the shop page
import BreadcrumbShop from "../components/shop-page/BreadcrumbShop";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"; // UI components for creating dropdown menus
import { FiSliders } from "react-icons/fi"; // Icon for future enhancements or filters (not used here)
import { 
  newArrivalsData, 
  relatedProductData, 
  topSellingData 
} from "../page"; // Sample product data arrays for rendering product cards
import ProductCard from "../components/cart-page/ProductCard"; // Reusable component for displaying individual products
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious, 
  PaginationEllipsis 
} from "@/components/ui/pagination"; // Pagination components for navigation between product pages

// Defining the main functional component for the shop page
const ShopPage: React.FC = () => {
  return (
    <main className="pb-20">
      {/* Wrapper to control maximum width and horizontal padding */}
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        {/* Horizontal line for a clean visual separation */}
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />

        {/* Breadcrumb navigation for better UX */}
        <BreadcrumbShop />

        {/* Main content wrapper */}
        <div className="flex flex-col w-full space-y-5">
          {/* Header section containing the title and sorting options */}
          <div className="flex flex-col lg:flex-row lg:justify-between">
            {/* Section for page title */}
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
              {/* MobileFilters component is intentionally removed */}
            </div>

            {/* Sorting and product count */}
            <div className="flex flex-col sm:items-center sm:flex-row">
              {/* Displaying the current product range */}
              <span className="text-sm md:text-base text-black/60 mr-3">
                Showing 1-10 of 100 Products
              </span>

              {/* Dropdown for sorting options */}
              <div className="flex items-center">
                Sort by:{" "}
                <Select defaultValue="most-popular">
                  <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Options for sorting products */}
                    <SelectItem value="most-popular">Most Popular</SelectItem>
                    <SelectItem value="low-price">Low Price</SelectItem>
                    <SelectItem value="high-price">High Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Product grid section */}
          <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {/* Mapping through product data arrays to render cards */}
            {[...relatedProductData.slice(1, 4), ...newArrivalsData.slice(1, 4), ...topSellingData.slice(1, 4)].map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>

          {/* Divider line */}
          <hr className="border-t-black/10" />

          {/* Pagination for navigating through product pages */}
          <Pagination className="justify-between">
            {/* Previous page button */}
            <PaginationPrevious href="#" className="border border-black/10" />
            
            {/* Pagination links */}
            <PaginationContent>
              {/* Individual page links */}
              <PaginationItem>
                <PaginationLink href="#" className="text-black/50 font-medium text-sm" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="hidden lg:block">
                <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                  3
                </PaginationLink>
              </PaginationItem>
              {/* Ellipsis for skipped pages */}
              <PaginationItem>
                <PaginationEllipsis className="text-black/50 font-medium text-sm" />
              </PaginationItem>
              <PaginationItem className="hidden lg:block">
                <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                  8
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="hidden sm:block">
                <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                  9
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-black/50 font-medium text-sm">
                  10
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
            
            {/* Next page button */}
            <PaginationNext href="#" className="border border-black/10" />
          </Pagination>
        </div>
      </div>
    </main>
  );
};

// Exporting the ShopPage component 
export default ShopPage;