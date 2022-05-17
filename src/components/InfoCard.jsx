import Github from '../logo/github-brands.svg';
import Fb from '../logo/facebook-brands.svg';
import Linkedin from '../logo/linkedin-brands.svg';
import Instagram from '../logo/instagram-brands.svg';
import Codeforces from '../logo/codeforces-svgrepo-com.svg';

const InfoCard = () => {
  return (
    <div className="info">
      <div className="name">Umang Singla</div>
      <div className="title">Full Stack Developer</div>
      <ul className="icons">
          <li><a href='https://github.com/umang-singla'><img className='logo' src={Github} /></a></li>
          <li><a href='https://www.facebook.com/singlaumang'><img className='logo' src={Fb} /></a></li>
          <li><a href='https://www.instagram.com/umang__singla/'><img className='logo' src={Instagram} /></a></li>
          <li><a href='https://www.linkedin.com/in/umang-singla/'><img className='logo' src={Linkedin} /></a></li>
          <li><a href='https://codeforces.com/profile/umangsingla617'><img className='logo' src={Codeforces} /></a></li>
      </ul>
    </div>
  );
};

export default InfoCard;
