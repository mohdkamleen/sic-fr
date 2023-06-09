import { Link } from 'react-router-dom';
function Footer() {
    return ( 
        <> 
            <div className='footer-section' >
                 <div>
                    <h4>Our Website</h4>
                    <Link className='footer-item' to="/">Home </Link> <br />
                    <Link className='footer-item' to="/bill">Bill</Link> <br />
                    <Link className='footer-item' to="/about">About</Link> <br />
                    <Link className='footer-item' to="/admin">Admin</Link> 
                 </div>
                 <div>
                    <h4>Our Team</h4>
                    <span  className='footer-item'>Wakil Ahmad (TL)</span><br />
                    <span className='footer-item'>Mohd Wazeh</span><br />
                    <span className='footer-item'>Mohd Kamleen</span><br />
                    <span  className='footer-item'>Abusad Ahmad</span>
                 </div> 
                 <div>
                    <h4>Contact Us</h4>
                    <p style={{wordBreak:"break-word"}}> +91 9838706427 , +91 7309711987 </p>
                    <p>smartcarparking@gmail.com</p>
                    <p>Lucknow University, Lucknow, Uttar Pradesh 226021</p> 
                 </div> 
            </div><br />
                 <p style={{textAlign:"center",margin:"10px 0"}}>&copy; {new Date().getFullYear()} CarParking. All Rights Reserved.</p>
        </>
    );
}

export default Footer;