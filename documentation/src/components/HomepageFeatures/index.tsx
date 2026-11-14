import Heading from '@theme/Heading';
import clsx from 'clsx';
import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type SvgId = 'joo-01' | 'joo-03' | 'joo-04';

type FeatureItem = {
  description: ReactNode;
  svgId: SvgId;
  title: string;
};

// SVGs are rendered as <use> references to static/img/images.svg (an SVG sprite),
// not as inline SVG in the HTML document (SiteLint rule: svg_too_large).
// To add a new SVG to the sprite, add the file name to FILES in
// documentation/scripts/build-images-sprite.js and regenerate images.svg.
const FeatureList: FeatureItem[] = [
  {
    description: (
      <>
        Sieć pracuje nad systemem wdrażania dostępności cyfrowej w podmiotach publicznych w&nbsp;Polsce.
      </>
    ),
    svgId: 'joo-01',
    title: 'Zmierz się z nami z tym wyzwaniem!'
  },
  {
    description: (
      <>
        Siłą Sieci dostępności cyfrowej jest doświadczenie i aktywność uczestniczek i uczestników.
      </>
    ),
    svgId: 'joo-04',
    title: 'Miej wpływ na dostępność cyfrową!'
  },
  {
    description: (
      <>
        Jeśli chcesz mieć wpływ na tworzenie rozwiązań na rzecz dostępności cyfrowej, dołącz do nas!
      </>
    ),
    svgId: 'joo-03',
    title: 'Dołącz do Sieci dostępności cyfrowej!'
  }
];

function Feature({title, svgId, description}: FeatureItem) {
  const spriteUrl = `${useBaseUrl('/img/images.svg')}#${svgId}`;

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <svg
          className={styles.featureSvg}
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
