import React from 'react';
import clsx from "clsx";

import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

import data from "../../data/configs.json";
import styles from "./styles.module.css"

function WebsiteLink({to, children}) {
  return (
    <Link to={to}>
      {children || (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

function TeamProfileCard({className, name, children, githubUrl, homeUrl, srcUrl}) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={githubUrl + '.png'}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {homeUrl && (
              <a className={clsx(
                "button",
                styles["button--tertiary"],
                )}
                href={homeUrl}>
                Website
              </a>
            )}
            {srcUrl && (
              <a className={clsx(
                "button",
                styles["button--tertiary"],
                )}
                href={srcUrl}>
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props) {
  return (
    <TeamProfileCard {...props} className={'col col--6 margin-bottom--lg'} />
  );
}

export function ActiveTeamRow() {
  return (
    <div className="row">
      {data.map(({website, info, source, org, name}) => {
          return (
            <TeamProfileCardCol
              key={name}
              name={name}
              githubUrl={org}
              homeUrl={website}
              srcUrl={source}>
              <Translate>{info}</Translate>
            </TeamProfileCardCol>
          );
      })}
    </div>
  );
}

