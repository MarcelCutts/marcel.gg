import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Marcel Cutts"
      meta={[
        { name: 'description', content: "Marcel Cutts' personal site" },
        {
          name: 'keywords',
          content: 'Marcel Cutts, work, history, programming, engineering',
        },
      ]}
    />
    <div className="template">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
