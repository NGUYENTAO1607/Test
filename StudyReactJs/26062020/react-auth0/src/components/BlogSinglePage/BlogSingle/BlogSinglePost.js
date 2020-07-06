import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <div className="blog">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="blog_posts d-flex flex-row align-items-start justify-content-between">
                    {/* Blog post */}
                    <div className="blog_post">
                      <div className="blog_image" style={{backgroundImage: 'url(images/blog_4.jpg)'}} />
                      <div className="blog_text">Etiam leo nibh, consectetur nec orci et, tempus tempus ex</div>
                      <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                    </div>
                    {/* Blog post */}
                    <div className="blog_post">
                      <div className="blog_image" style={{backgroundImage: 'url(images/blog_5.jpg)'}} />
                      <div className="blog_text">Sed viverra pellentesque dictum. Aenean ligula justo, viverra in lacus porttitor</div>
                      <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                    </div>
                    {/* Blog post */}
                    <div className="blog_post">
                      <div className="blog_image" style={{backgroundImage: 'url(images/blog_6.jpg)'}} />
                      <div className="blog_text">In nisl tortor, tempus nec ex vitae, bibendum rutrum mi. Integer tempus nisi</div>
                      <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                    </div>
                  </div>
                </div>	
              </div>
            </div>
          </div>
        );
    }
}

export default Blog;