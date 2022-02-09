import { useCallback } from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
// Clean up
import portfolios from '../Components/allportfolios';
import { useState } from 'react';

// Lets make 'All' a constant
// It seems like a bit overkill now, but imagine if the usage of 'All' grows
// and then you need to refactor it to be some other string,
// having it as a constant would make the refactor much easier since you
// only need to change it in one spot
const ALL = 'All';
const allCategories = [ALL, ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
    // When adding in categories state, use below
    // const [categories, setCategories] = useState(allCategories);
    // Looks like we don't need to keep categories in state
    const [menuItems, setMenuItems] = useState(portfolios);

    // Lets memoize this function since its used as a prop
    const filter = useCallback((category) =>{
        if(category === ALL){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }, []);

    return (
        <div className="PortfolioPage">
            <div className="title">
                {/* Lets use a different element here */}
                <title title="Portfolios" span="portfolios" />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={allCategories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage;
