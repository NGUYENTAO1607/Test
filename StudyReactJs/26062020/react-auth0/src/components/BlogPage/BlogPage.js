import React, { Component } from 'react';
import HomeBlog from './Blog/HomeBlog'
import Blog from './Blog/Blog'
class BlogPage extends Component {
    render() {
        return (
            <div>
                <HomeBlog></HomeBlog>
                <Blog></Blog>

            </div>
        );
    }
}

export default BlogPage;