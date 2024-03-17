import { useLocation } from "react-router-dom";
import Navigation from "../Components/Navigation";
import CategoryCard from "../Components/RestaurantShower/CategoryCard";

function CategoryAll() {

    const location = useLocation();
    const categoryName = location.state.categoryName;
    const desription = location.state.desc;
    const restaurantData = location.state.filterData;

    return (
        <>
            <Navigation />
            <div className='mb-6 max-w-full'>
                <div className='mb-10 relative max-w-full p-0'>
                    <div className='max-w-[1152px] mx-auto mt-10'>
                        <div className='max-w-full'>
                            <div className='max-w-full'>
                                <div className='max-w-full flex items-center justify-start flex-row'>
                                    <span className='text-5xl font-bold tracking-tight transform-none text-[#191919] text-legt m-0 p-0 block'>
                                        {categoryName}
                                    </span>
                                </div>
                                <span className='mt-3 text-base font-medium transform-none text-left m-0 p-0 block text-[#767676]'>{desription}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative w-full h-full mt-2'>
                  <div className='relative z-0 box-border'>
                    <div className='max-w-[1280px] mx-auto box-border'>
                        <CategoryCard restaurantList={restaurantData} structure='block' />
                    </div>
                </div>
            </div>
        </>
    )

}


export default CategoryAll;