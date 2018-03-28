import React from 'react'
import Link from 'gatsby-link'

import './index.css'


const buttonContent = [
  { text: "Twitter", url: "https://twitter.com/marcelcutts"},
  { text: "Talks", url: "https://speakerdex.co/marcel"},
  { text: "Medium", url: "https://medium.com/@marcel.cutts/latest"},
  { text: "Email", url: "mailto:marcel@asgard.tech"} 
];

const ExternalLink = ({content}) => <a href={content.url} className="externalLink"> {content.text} </a>;

const IndexPage = () => (
  <div className="index">
    <h1>Marcel Cutts</h1>
    <p className="narcissism">Technologist with a relentless vendetta against mediocrity.</p>
    <div className="externalLinkContainer"> {buttonContent.map(c => <ExternalLink content={c} key={c.text} />)} </div>
  </div>
)

export default IndexPage
