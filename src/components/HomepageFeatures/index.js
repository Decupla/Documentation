import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

import DeveloperImg from '@site/static/img/developer.png';
import ContentManagementImg from '@site/static/img/content-management.png';

const FeatureList = [
  {
    title: 'Developer Documentation',
    image: DeveloperImg,
    link: '/docs/category/developer-documentation',
    imageWidth: "35%",
    description: (
      <>
        Learn how to set up Decupla and how to integrate it into your application
      </>
    ),
  },
  {
    title: 'User Documentation',
    image: ContentManagementImg,
    link: '/docs/category/user-documentation',
    imageWidth: "40%",
    description: (
      <>
        Learn how to use Decupla and manage your content with it
      </>
    ),
  },
];

function Feature({ title, description, image, imageWidth, link }) {
  return (
    <Link to={link} className={clsx('col col--4 hidden-link')}>
      <div className="card">
        <div className="text--center padding-vert--md">
          <div className="card-img-container">
            <img width={imageWidth} src={image} alt="" />
          </div>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify-content-center">
          {/* Fix: Zentriert die Features */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
