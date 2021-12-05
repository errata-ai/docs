import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import Button from '../components/Button';
import Layout from '@theme/Layout';

import feCss from "../css/index/feature.module.css"
import flCss from "../css/index/flashy.module.css"
import inCss from "../css/index/integration.module.css"
import juCss from "../css/index/jumbotron.module.css"
import usCss from "../css/index/usp.module.css"
import seCss from "../css/section.module.css"

import logos from "../data/logos.json"

const Integration = () => (
  <section
    className={clsx(
      seCss.section,
      seCss["section--inner"],
      seCss["section--center"],
    )}
  >
    <h2
      className={clsx(
        seCss.section__title,
        seCss["section__title--wide"],
        "text--center",
      )}
    >
      Used by writers around the world
    </h2>

    <p
      className={clsx(
        seCss.section__subtitle,
        seCss["section__subtitle--narrow"],
        "text--center",
      )}
    >
      Check out open-source Vale configurations from companies and organizations
      around the world.
    </p>

    <Button href="/community">Learn more</Button>

    <div className={inCss.integration}>
      {logos.map(({ img, alt, url }) => (
        <a href={url} key={alt} target="_blank" rel="noreferrer">
          <p className={inCss.integration__item}>
            <img
              src={img}
              alt={alt}
              width={60}
              height={60}
              className={seCss.logo}
            />
            {alt}
          </p>
        </a>
      ))}
    </div>
  </section>
)

const images = [
  {
    original: '/img/previews/st.png',
  },
];

const Top = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <section
      className={clsx(seCss["section--inner"], seCss["section--center"])}
    >
      <div className={juCss.jumbotron}>
        <h1
          className={clsx(
            seCss.section__title,
            seCss["section__title--jumbotron"],
            seCss["section__title--accent"],
          )}
        >
          <i>Your</i> style, <i>our</i> editor
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
          )}
        >
          NLP-powered tools for automated style guide enforcement,
          including <b>Vale</b>, <b>Vale Server</b>, and <b>Vale Studio</b>.
        </p>

        <div className={clsx(juCss.jumbotron__cta)}>
          <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />
        </div>
      </div>
    </section>
  )
}

const Usp = () => (
  <section className={clsx(seCss.section, seCss["section--odd"])}>
    <div className={seCss["section--inner"]}>
      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <img
            alt="An SVG graphic of a command-line interface"
            className={usCss.usp__illustration}
            height={113}
            src="/img/pages/index/pages.svg"
            width={176}
          />

          <h2 className={usCss.usp__title}>
            <a href="/vale/about">Vale CLI</a>
          </h2>

          <p className={usCss.usp__description}>Free &amp; open source</p>
          <p className={usCss.usp__description}>
            Easy-to-install, standalone binary
          </p>
          <p className={usCss.usp__description}>Highly customizable</p>
        </div>
      </div>

      <div className={clsx(usCss.usp, usCss["usp--wide"])}>
        <div className={usCss.usp__inner}>
          <img
            alt="An SVG graphic of a desktop monitor"
            className={usCss.usp__illustration}
            height={113}
            src="/img/pages/index/monitor.svg"
            width={176}
          />

          <h2 className={usCss.usp__title}>
            <a href="/vale-server/install/">Vale Server</a>
          </h2>

          <p className={usCss.usp__description}>Native, C++ GUI for Vale</p>
          <p className={usCss.usp__description}>
            Manage multiple Vale configurations
          </p>
          <p className={usCss.usp__description}>
            Plugins for browser-based apps
          </p>
        </div>
      </div>

      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <img
            alt="A code editor containing a SQL statement"
            className={usCss.usp__illustration}
            height={113}
            src="/img/pages/index/browser.svg"
            width={176}
          />

          <h2 className={usCss.usp__title}>
            <a href="https://vale-studio.errata.ai/">Vale Studio</a>
          </h2>

          <p className={usCss.usp__description}>
            Test, debug, &amp; share Vale rules
          </p>
          <p className={usCss.usp__description}>Integrates with RegEx101</p>
          <p className={usCss.usp__description}>
            Live NLP for multiple languages
          </p>
        </div>
      </div>
    </div>
  </section>
)

const Cards = () => (
  <section className={clsx(seCss.section, seCss["section--odd"])}>
    <div className={clsx(seCss["section--inner"], seCss["section--center"])}>
      <h3
        className={clsx(
          seCss.section__title,
          feCss["section__title--wide"],
          "text--center",
        )}
      >
        Why Vale &#123;CLI, Server, Studio, ...&#125;?
      </h3>

      <p
        className={clsx(
          seCss.section__subtitle,
          seCss["section__subtitle--narrow"],
          "text--center",
        )}
      >
        Vale, and its ecosystem of related software and tools, offers an
        unmatched combination of privacy, performance, and extensibility.
      </p>

      <div
        className={clsx(
          seCss.section__footer,
          seCss["section__footer--feature-cards"],
        )}
      >
        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Privacy</h3>
          <p className={feCss.feature__content}>
            Both Vale CLI and Vale Server operate entirely offline&mdash;meaning
            your content is never sent to a remote server for processing.
          </p>
          <a href="/privacy" className={feCss.feature__footer}>
            Learn more ›
          </a>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Performance</h3>
          <p className={feCss.feature__content}>
            Vale CLI, which powers both Vale Server and Vale Studio, offers
            unmatched performance across multiple document types.
          </p>
          <a
            href="https://github.com/errata-ai/vale#benchmarks"
            className={feCss.feature__footer}
          >
            Learn more ›
          </a>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Extensibility</h3>
          <p className={feCss.feature__content}>
            Vale doesn&apos;t attempt to teach you <i>how</i> to write;
            it&apos;s a tool <i>for</i> writers. You get to create your own
            rules according to your own content.
          </p>
          <a
            href="/vale/styles"
            className={feCss.feature__footer}
          >
            Learn more ›
          </a>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>
            Syntax- and context-aware linting
          </h3>
          <p className={feCss.feature__content}>
            Vale has a rich understanding of many markup formats, allowing it to
            avoid syntax-related false positives and intelligently exclude code
            snippets from prose-related rules.
          </p>
          <a
            href="/vale/scoping"
            className={feCss.feature__footer}
          >
            Learn more ›
          </a>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>
            State-of-the-art natural language processing (NLP)
          </h3>
          <p className={feCss.feature__content}>
            Vale leverages the open-source
            <a href="https://spacy.io/"> spaCy</a> library to allow for
            advanced, NLP-based rules in multiple languages, including English,
            Chinese, German, Russian, and Spanish.
          </p>
          <a
            href="#"
            className={feCss.feature__footer}
          >
            Learn more ›
          </a>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>An open-source core</h3>
          <p className={feCss.feature__content}>
            All of our tools and software embrace the culture of open
            source&mdash;Vale, its styles, and its plugins are all open source
            and permissively licensed.
          </p>
          <a
            href="https://github.com/errata-ai"
            className={feCss.feature__footer}
          >
            Learn more ›
          </a>
        </div>
      </div>
    </div>
  </section>
)

const Community = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <section
      className={clsx(
        seCss.section,
        seCss["section--inner"],
        seCss["section--center"],
      )}
    >
      <h2
        className={clsx(
          seCss.section__title,
          seCss["section__title--wide"],
          "text--center",
        )}
      >
        Join the community
      </h2>
      <p
        className={clsx(
          seCss.section__subtitle,
          seCss["section__subtitle--narrow"],
          "text--center",
        )}
      >
        Vale has an active community on both GitHub and Slack.
      </p>

      <div
        className={clsx(
          seCss.section__footer,
          seCss["section__footer--console"],
        )}
      >
        <div className={flCss.flashy}>
          <img
            alt="Slack logo"
            height={76}
            src="/img/logos/slack.png"
            title="Slack"
            width={76}
            className={seCss.logo}
          />
          <h3 className={flCss.flashy__title}>Slack</h3>
          <p className={flCss.flashy__content}>
            Discuss Vale with users from around the world over at the&nbsp;
            <i>testthedocs</i> channel on the Write the Docs Slack network.
          </p>

          <div className={flCss.flashy__links}>
            <a
              className={flCss.flashy__link}
              href="https://writethedocs.slack.com/archives/CBWQQ5E57"
              rel="noopener noreferrer"
              target="_blank"
            >
              Join Slack&nbsp;&nbsp;&gt;
            </a>
          </div>
        </div>

        <div className={clsx(flCss.flashy, flCss["flashy--primary"])}>
          <img
            alt="GitHub logo"
            height={76}
            src="/img/logos/github2.png"
            title="GitHub"
            width={76}
            className={seCss.logo}
          />
          <h3 className={flCss.flashy__title}>GitHub</h3>
          <p className={flCss.flashy__content}>
            Browse source code, ask questions, report bugs, submit feature
            requests, create PRs, and more on GitHub.
          </p>

          <div className={flCss.flashy__links}>
            <a
              className={flCss.flashy__link}
              href="https://github.com/errata-ai"
              rel="noopener noreferrer"
              target="_blank"
            >
              Go to GitHub&nbsp;&nbsp;&gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  const { siteConfig } = useDocusaurusContext()
  const title = "errata.ai"

  return (
    <Layout
      canonical=""
      description={siteConfig.customFields.description}
      title={title}
    >
      <Top />
      <Usp />
      <Integration />
      <Cards />
      <Community />
    </Layout>
  )
}

export default Home