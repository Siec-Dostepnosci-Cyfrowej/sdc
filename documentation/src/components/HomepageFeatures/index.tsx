import Heading from '@theme/Heading';
import clsx from 'clsx';
import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  svgId: string;
  description: ReactNode;
};

// SVGs are rendered as <use> references to static/img/images.svg (an SVG sprite),
// not as inline SVG in the HTML document (SiteLint rule: svg_too_large).
// To add a new SVG to the sprite, append a <symbol id="..."> to images.svg.
const FeatureList: FeatureItem[] = [
  {
    title: 'Zmierz się z nami z tym wyzwaniem!',
    svgId: 'joo-01',
    description: (
      <>
        Sieć pracuje nad systemem wdrażania dostępności cyfrowej w podmiotach publicznych w&nbsp;Polsce.
      </>
    ),
  },
  {
    title: 'Miej wpływ na dostępność cyfrową!',
    svgId: 'joo-04',
    description: (
      <>
        Siłą Sieci dostępności cyfrowej jest doświadczenie i aktywność uczestniczek i uczestników.
      </>
    ),
  },
  {
    title: 'Dołącz do Sieci dostępności cyfrowej!',
    svgId: 'joo-03',
    description: (
      <>
        Jeśli chcesz mieć wpływ na tworzenie rozwiązań na rzecz dostępności cyfrowej, dołącz do nas!
      </>
    ),
  },
];

function Feature({title, svgId, description}: FeatureItem) {
  const {siteConfig} = useDocusaurusContext();
  const spriteUrl = `${siteConfig.baseUrl}img/images.svg#${svgId}`;

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <svg
          className={styles.featureSvg}
          role="img"
          aria-hidden="true"
          focusable="false">
          <use href={spriteUrl} xlinkHref={spriteUrl} />
        </svg>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
