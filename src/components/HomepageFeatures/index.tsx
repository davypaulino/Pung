import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🌄 Backend',
    Svg: require('@site/static/img/back.svg').default,
    description: (
      <ul className={styles.list}>
        <li>🌐 <strong>Linguagens:</strong> Django e .Net</li>
        <li>🐳 <strong>Build:</strong> Docker</li>
        <li>🔧 <strong>Ferramentas:</strong> Git, Make e Github Codespace</li>
      </ul>
    ),
  },
  {
    title: '🌳 Frontend',
    Svg: require('@site/static/img/front.svg').default,
    description: (
      <ul className={styles.list}>
        <li>⚡ <strong>Linguagem:</strong> React com Next.js</li>
        <li>🎨 <strong>Estilo:</strong> Tailwind CSS</li>
        <li>🐳 <strong>Build:</strong> Docker</li>
        <li>🛠️ <strong>Ferramentas:</strong> Git, Github Codespace e Make</li>
      </ul>
    ),
  },
  {
    title: '⚙️ Infraestrutura',
    Svg: require('@site/static/img/infra.svg').default,
    description: (
      <ul className={styles.list}>
        <li>💬 <strong>Mensageria e Cache:</strong> Redis</li>
        <li>🗄️ <strong>Banco de Dados:</strong> PostgreSQL</li>
        <li>🌀 <strong>Proxy e Loadbalance:</strong> Nginx</li>
        <li>🐳 <strong>Orquestração de Containers:</strong> Docker Compose</li>
      </ul>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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
