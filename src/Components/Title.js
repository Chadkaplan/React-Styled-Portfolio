

// Components should be capitalized
// https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type
function Title({title, span}) {
    return (
        <div className="Title">
            <h3>
                {title}
                <span> {span}</span>
            </h3>
        </div>
    )
}

export default title;
