import icon01lg from '../assets/lead-generation.png'
import icon02ba from '../assets/brand-awareness.png'
import icon03cm from '../assets/cost-management.png'


const Sidebar = () => {
    return (
        <aside>
            <div className="benefit-lead">
                <h3>Lead Generation</h3>
                <img src={icon01lg} />
                <p>
                    Inbound strategies for lead generation require less work for your business, bringing customers directly to your website.
                </p>
            </div>
            <div className="benefit-brand">
                <h3>Brand Awareness</h3>
                <img src={icon02ba} />
                <p>
                    Users find your business through paid and organic searches, increasing the search ranking and visibility for your business.
                </p>
            </div>
            <div className="benefit-cost">
                <h3>Cost Management</h3>
                <img src={icon03cm} />
                <p>
                    As the search ranking for your business increases, your advertising costs decrease, and you no longer need to advertise your page.
                </p>
            </div>
        </aside>
    )
}
export default Sidebar;