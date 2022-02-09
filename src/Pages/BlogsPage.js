//  Don't need to import React
import allBlogs from '../Components/allBlogs';

function BlogsPage() {
    return (
        <div>
            <div className="b-title">
                {/* Lets change this to a different element */}
                <title title="Recent Blogs" span="Recent Blogs" />
            </div>
            <div className="BlogsPage">
                {
                    // Adding parens to make the returned jsx easier to read
                    allBlogs.map((blog)=>{
                        return (
                            <div className="blog" key={blog.id}>
                                <div className="blog-content">
                                    {/* We should strive to always include an alt prop to be accessbible */}
                                    <img src={blog.image} alt="Blog"/>
                                    <a href={blog.link} className="blog-link">
                                        {blog.title}
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div> 
        </div>
    )
}

export default BlogsPage;
