import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router'

class Legal extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
<Nav />
            <div className="container footerPad">
            <div className="row">
                <div className="col-sm-6">
                    <h3>PRIVACY & SECURITY</h3>
                    <hr />
                    <h4>What information do we collect?</h4>
                    <p>We collect information from you when you register on our site, place an order or subscribe to our newsletter. When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, phone number or credit card information. You may, however, visit our site anonymously.  </p>
                    <h4>What do we use your information for?</h4>
                    <p>Any of the information we collect from you may be used in one of the following ways:</p>

                    <ul>
                        <li>To personalize your experience(your information helps us to better respond to your individual needs)</li>
                        <li><em>To improve our website</em> (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
                        <li> <em>To improve customer service</em> (your information helps us to more effectively respond to your customer service requests and support needs)</li>
                        <li> <em>To process transactions.</em>  Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
                        <li> To administer a contest, promotion, survey or other site feature</li>
                        <li> <em>To send periodic emails</em>
                        The email address you provide for order processing, will only be used to send you information and updates pertaining to your order.
                        Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.</li>

                    </ul>


                    <h4>How do we protect your information?</h4>
                    <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to?keep the information confidential. After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.  </p>
                    <h4>Do we use cookies?</h4>
                    <p>Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information. </p>
                    <p>We use cookies to help us remember and process the items in your shopping cart and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business. </p>
                    <h4>Do we disclose any information to outside parties?</h4>
                    <p>
                        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
                    </p>
                    <h4>Third party links</h4>
                    <p>
                        Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
                        <h4>Indiana Online Privacy Protection Act Compliance</h4>
                        <p>
                            Because we value your privacy we have taken the necessary precautions to be in compliance with the Indiana Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent. As part of the Indiana Online Privacy Protection Act, all users of our site may make any changes to their information at anytime by logging into their control panel and going to the 'My Profile' page.</p>

                            <h3>ONLINE PRIVACY POLICY ONLY</h3>
                            <hr />
                            <p>
                                This online privacy policy applies only to information collected through our website and not to information collected offline.
                            </p>
                            <h4>Your Consent</h4>
                            <p>
                                By using our site, you consent to our web site privacy policy.
                            </p>
                            <h4>Changes to our Privacy Policy</h4>
                            <p>
                                If we decide to change our privacy policy, we will post those changes on this page. This policy was last modified on 8/31/2010
                            </p>

                        </div>
                        <div className="col-sm-6">
                            <img src="/images/iron-glory/security.jpg" />
                        </div>
                    </div>
                </div>
            <Footer />
</div>
            )
        }
    }

    export default Legal
