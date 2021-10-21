import React from 'react'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="top-right-separator hidden-xs"></div>
            
            <div className="container">
                <div className="col-md-8 col-md-offset-2 col-sm-12">
                    <div className="row center">
                        <div className="section-title mb-100">
                            <div className="process-numbers">03</div>
                            <h2>portfolio</h2>
                            <p className="module-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="row categories-grid">
                        <nav className="categories">
                            <ul className="portfolio_filter">
                                <li><a href="/" className="active" data-filter="*">all</a></li>
                                <li><a href="/" data-filter=".photography">photography</a></li>
                                <li><a href="/" data-filter=".web">webdesign</a></li>
                                <li><a href="/" data-filter=".logo">logo</a></li>
                                <li><a href="/" data-filter=".graphics">graphics</a></li>
                                <li><a href="/" data-filter=".ads">advertising</a></li>
                                <li><a href="/" data-filter=".fashion">fashion</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="col-md-9">
                    <div className="row portfolio_container">
                        <div className="col-md-4 photography">
                            <a href="single-project.html" className="portfolio_item work-grid">
                                <img src="assets/img 2.jpg" alt="" />
                                <div className="portfolio_item_hover">
                                    <div className="item_info">
                                        <span>Brave man</span>
                                        <em>photography</em>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-md-4 fashion logo">
                            <a href="single-project.html" className="portfolio_item work-grid">
                                <img src="assets/img 3.jpg" alt="" />
                                <div className="portfolio_item_hover">
                                    <div className="item_info">
                                        <span>super man</span>
                                        <em>photography</em>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-md-4 ads graphics">
                            <a href="single-project.html" className="portfolio_item work-grid">
                                <img src="assets/img 1.jpg" alt="" />
                                <div className="portfolio_item_hover">
                                    <div className="item_info">
                                        <span>bat man</span>
                                        <em>photography</em>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 fashion ads">
                            <a href="single-project.html" className="portfolio_item work-grid">
                                <img src="assets/img 4.jpg" alt="" />
                                <div className="portfolio_item_hover">
                                    <div className="item_info">
                                        <span>spider man</span>
                                        <em>photography</em>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-md-4 graphics ads">
                            <a href="single-project.html" className="portfolio_item work-grid">
                                <img src="assets/img 3.jpg" alt="" />
                                <div className="portfolio_item_hover">
                                    <div className="item_info">
                                        <span>iron man</span>
                                        <em>photography</em>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-md-4 logo web photography">
                            <a href="single-project.html" className="portfolio_item work-grid">
                                <img src="assets/img 1.jpg" alt="" />
                                <div className="portfolio_item_hover">
                                    <div className="item_info">
                                        <span>iron man</span>
                                        <em>photography</em>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-md-4 ads graphics">
                            <a href="single-project.html" className="portfolio_item work-grid">
                                <img src="assets/img 2.jpg" alt="" />
                                <div className="portfolio_item_hover">
                                    <div className="item_info">
                                        <span>iron man</span>
                                        <em>photography</em>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-md-4 web fashion photography">
                            <a href="single-project.html" className="portfolio_item work-grid">
                                <img src="assets/img 3.jpg" alt="" />
                                <div className="portfolio_item_hover">
                                    <div className="item_info">
                                        <span>iron man</span>
                                        <em>photography</em>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-md-4 fashion logo">
                            <a href="single-project.html" className="portfolio_item work-grid">
                                <img src="assets/img 1.jpg" alt="" />
                                <div className="portfolio_item_hover">
                                    <div className="item_info">
                                        <span>iron man</span>
                                        <em>photography</em>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
