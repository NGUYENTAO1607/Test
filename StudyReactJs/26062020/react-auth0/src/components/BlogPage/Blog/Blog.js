import React, { Component } from 'react';

class Blog extends Component {
   
    
    render() {
        return (
            <div>
                <div className="home">
                    <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/shop_background.jpg" />
                    <div className="home_overlay" />
                    <div className="home_content d-flex flex-column align-items-center justify-content-center">
                        <h2 className="home_title">Technological Blog</h2>
                       
                    </div>
                </div>
                {/* Blog */}
                <div className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="blog_posts d-flex flex-row align-items-start justify-content-between">
                                    {/* Blog post */}
                                    <div className="blog_post">
                                        <div className="blog_image" style={{ backgroundImage: 'url(images/blog_1.jpg)' }} />
                                        <div className="blog_text">Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada.</div>
                                        <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                    </div>
                                    {/* Blog post */}
                                    <div className="blog_post">
                                        <div className="blog_image" style={{ backgroundImage: 'url(images/blog_2.jpg)' }} />
                                        <div className="blog_text">Cras lobortis nisl nec libero pulvinar lacinia. Nunc sed ullamcorper massa.</div>
                                        <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                    </div>
                                    {/* Blog post */}
                                    <div className="blog_post">
                                        <div className="blog_image" style={{ backgroundImage: 'url(images/blog_3.jpg)' }} />
                                        <div className="blog_text">Fusce tincidunt nulla magna, ac euismod quam viverra id. Fusce eget metus feugiat</div>
                                        <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                    </div>
                                    {/* Blog post */}
                                    <div className="blog_post">
                                        <div className="blog_image" style={{ backgroundImage: 'url(images/blog_4.jpg)' }} />
                                        <div className="blog_text">Etiam leo nibh, consectetur nec orci et, tempus tempus ex</div>
                                        <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                    </div>
                                    {/* Blog post */}
                                    <div className="blog_post">
                                        <div className="blog_image" style={{ backgroundImage: 'url(images/blog_5.jpg)' }} />
                                        <div className="blog_text">Sed viverra pellentesque dictum. Aenean ligula justo, viverra in lacus porttitor</div>
                                        <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                    </div>
                                    {/* Blog post */}
                                    <div className="blog_post">
                                        <div className="blog_image" style={{ backgroundImage: 'url(images/blog_6.jpg)' }} />
                                        <div className="blog_text">In nisl tortor, tempus nec ex vitae, bibendum rutrum mi. Integer tempus nisi</div>
                                        <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                    </div>
                                    {/* Blog post */}
                                    <div className="blog_post">
                                        <div className="blog_image" style={{ backgroundImage: 'url(images/blog_7.jpg)' }} />
                                        <div className="blog_text">Make Life Easier on Yourself by Accepting “Good Enough.” Don’t Pursue Perfection.</div>
                                        <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                    </div>
                                    {/* Blog post */}
                                    <div className="blog_post">
                                        <div className="blog_image" style={{ backgroundImage: 'url(images/blog_8.jpg)' }} />
                                        <div className="blog_text">13 Reasons You Are Failing At Life And Becoming A Bum</div>
                                        <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                    </div>
                                    {/* Blog post */}
                                    <div className="blog_post">
                                        <div className="blog_image" style={{ backgroundImage: 'url(images/blog_9.jpg)' }} />
                                        <div className="blog_text">4 Steps to Getting Anything You Want In Life</div>
                                        <div className="blog_button"><a href="blog_single.html">Continue Reading</a></div>
                                    </div>
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