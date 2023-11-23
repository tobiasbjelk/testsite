import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Unified Cloud Excellence',
    Svg: require('@site/static/img/greencloud.svg').default,
    description: (
      <>
        Streamline your cloud operations with our standardized platform, harmonizing top cloud capabilities for superior performance and efficiency. 
      </>
    ),
  },
  {
    title: 'Innovative Hybrid Solutions',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Unlock the full potential of your cloud journey by leveraging our platform's strength in integrating diverse cloud environments with on-premise solutions.
      </>
    ),
  },
  {
    title: 'Architecture driven',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Our platform is meticulously designed with a robust, architecture-first approach, ensuring that every aspect adhere Lantmännens arhcitectual artifacts.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
