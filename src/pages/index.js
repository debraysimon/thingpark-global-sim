import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <html>
            <div style="width: auto;">
                <img src="./images/Main-image.jpg" style="margin-left: -30px;" />
            </div>
            <br/>
            <h1>Quick Links</h1>
            <div class="grid-container">
                <div class="grid-item">
                    <img src="./images/roue-dentee.png" style="width: 100px;height: 100px;" />
                </div>
                <div class="grid-item">
                    <img src="./images/Icon-PDFs.png" style="width: 100px;height: 100px;" />
                </div>
                <div class="grid-item">
                    <img src="./images/FAQbig.png" style="width: 100px;height: 100px;" />
                </div>
                <div class="grid-item">
                    <img src="./images/Icon-Forum.png" style="width: 100px;height: 100px;" />
                </div>
                <div class="grid-item">
                    <a href="/thingpark-global-sim/B-Feature-Topics/TP-Global-Sim_C/Overview.html" class="textColorStyle" >What is ThingPark Global SIM?</a>
                </div>
                <div class="grid-item">
                    <a href="/thingpark-global-sim/D-Reference/DocLibrary_R/README.html" class="textColorStyle">Documentation library</a>
                </div>
                <div class="grid-item">
                    <a href="/thingpark-global-sim/D-Reference/FAQ_R/" class="textColorStyle" >FAQ</a>
                </div>
                <div class="grid-item">
                    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=gCAXKRAf30SQ8u1TcLIAq29TSlU_bqhCs9niKVwlVPtUOExQTUlIN09ISFBRSlQ3V01KSlgyNjYyRS4u" class="textColorStyle">Support Portal</a>
                </div>
            </div>
        </html>
        </Layout>
    );
}
