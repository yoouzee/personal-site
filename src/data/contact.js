import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/yoouzee',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/yoouzee/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/toh-yu-ze',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/_yoouzee',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:yuzetoh@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
