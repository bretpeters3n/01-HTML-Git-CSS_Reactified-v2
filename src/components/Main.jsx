import image01seo from '../assets/search-engine-optimization.jpg'
import image02orm from '../assets/online-reputation-management.jpg'
import image03smm from '../assets/social-media-marketing.jpg'

const Main = () => {
    return (
        <main>
            <div id="search-engine-optimization" className="search-engine-optimization">
                <img src={image01seo} className="float-left" />
                <h2>Search Engine Optimization</h2>
                <p>
                    The dominance of mobile internet use means that users are searching for the right business as they travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase your visibility and find the right customers for your business.
                </p>
            </div>
            <div id="online-reputation-management" className="online-reputation-management">
                <img src={image02orm} className="float-right" />
                <h2>Online Reputation Management</h2>
                <p>
                    The web is full of opinions, and some of these can be negative. Social media allows anyone with an internet connection to say whatever they want about your business. Online Reputation Management gives you the control over what potential customers see when they search for your business.
                </p>
            </div>
            <div id="social-media-marketing" className="social-media-marketing">
                <img src={image03smm} className="float-left" />
                <h2>Social Media Marketing</h2>
                <p>
                    Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation.
                </p>
            </div>
        </main>
    )
}
export default Main;