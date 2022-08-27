import Github from '../logo/github-brands.svg';
import Fb from '../logo/facebook-brands.svg';
import Linkedin from '../logo/linkedin-brands.svg';
import Instagram from '../logo/instagram-brands.svg';
import Codeforces from '../logo/codeforces-svgrepo-com.svg';

const InfoCard = (prop) => {
  return (
    <div className="info">
      <div className="name">{prop.name}</div>
      <div className="title">Full Stack Developer</div>
      <ul className="icons">
          <li><a href='https://github.com/umang-singla'><i class="fa-brands fa-github icon"></i></a></li>
          <li><a href='https://www.facebook.com/singlaumang/'><i class="fa-brands fa-facebook icon"></i></a></li>
          <li><a href='https://www.instagram.com/umang__singla/'><i class="fa-brands fa-instagram icon"></i></a></li>
          <li><a href='https://www.linkedin.com/in/umang-singla/'><i class="fa-brands fa-linkedin icon"></i></a></li>
          <li><a href='https://codeforces.com/profile/umangsingla617'><i class="fa-solid fa-chart-simple icon fa-flip-horizontal"></i></a></li>
      </ul>
    </div>
  );
};

export default InfoCard;
