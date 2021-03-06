import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosQuoteOutline = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M418 224c17.6 0 30 12.4 30 30v384c0 46.6-8.6 90-26.6 128-7 15-13.6 26-18.8 34h-38.6c25.4-38 50-90.6 50-161v-31h-156c-17.6 0-34-16.4-34-34v-320c0-17 15.8-30 34-30h160zM418 192h-160c-35.4 0-66 26.6-66 62v320c0 35.4 30.6 66 66 66h124c0 128-92 192-92 192h128c0 0 62-67.2 62-194 0-91.4 0-283.6 0-384 0-35.4-26.6-62-62-62v0z M770 224c17.6 0 30 12.4 30 30v384c0 46.6-8.6 90-26.6 128-7 15-13.6 26-18.8 34h-38.6c25.4-38 50-90.6 50-161v-31h-156c-17.6 0-34-16.4-34-34v-320c0-17 15.8-30 34-30h160zM770 192h-160c-35.4 0-66 26.6-66 62v320c0 35.4 30.6 66 66 66h124c0 128-92 192-92 192h128c0 0 62-67.2 62-194 0-91.4 0-283.6 0-384 0-35.4-26.6-62-62-62v0z"></path>
    </SVG>
  )
}


IosQuoteOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosQuoteOutline.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default IosQuoteOutline
