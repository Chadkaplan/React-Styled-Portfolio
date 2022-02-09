//  Dont need to import react

function Categories({ filter, categories }) {
    return (
        <div className="buttons">
            {
                categories.map((cat) => {
                    // Using the index as the key doesn't actually help since React already knows the index
                    // I'd suggest cat as the unique key, since even if there is a duplicate of the key
                    // each of the buttons would work the exact same anyway, so they would essentially be the same button in practice
                    return <button type="button" className="btn-port" onClick={()=> filter(cat)} key={cat}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories;
