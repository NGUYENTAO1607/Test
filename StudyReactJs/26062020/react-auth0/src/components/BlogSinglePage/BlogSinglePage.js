import React, { Component } from 'react';
import HomeSinglePost from './BlogSingle/HomeSinglePost'
import SinglePost from './BlogSingle/SinglePost'
import BlogSinglePost from './BlogSingle/BlogSinglePost' 
class BlogSinglePage extends Component {
    render() {
        return (
            <div>
                <HomeSinglePost></HomeSinglePost>
                <SinglePost></SinglePost>
                <BlogSinglePost></BlogSinglePost>
            </div>
        );
    }
}

export default BlogSinglePage;