import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <br /><br /><br />
        <footer class="footer">
  	 <div class="footer-container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>explore</h4>
  	 			<ul>
  	 				<li><Link to='/' >home</Link></li>
  	 				<li><Link to='/commands' >commands</Link></li>
  	 				<li><Link to='/policy' >privacy policy</Link></li>
  	 				<li><Link to='/terms' >terms</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get in touch</h4>
  	 			<ul>
  	 				<li><Link to='/invite' >invite</Link></li>
  	 				<li><Link to='/support' >support server</Link></li>
  	 				<li><Link to='/vote' >vote</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>info</h4>
  	 			<ul>
  	 				<li><Link to='/faq' >faq</Link></li>
                    <li><Link to='/blogs' >blogs</Link></li>
                    <li><Link to='/tutorials' >tutorials</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>developer</h4>
  	 			<ul>
                    <li><Link to='/support' >zhen#0002</Link></li>
                </ul>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </>
    )
}

export default Footer