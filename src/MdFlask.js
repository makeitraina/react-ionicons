import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdFlask = props => {
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
      <path d="M873.8 708.8l-201.8-324.8v-192h64v-96h-448v96h64v192l-199.8 324.8c-16.8 31.8-25 62.8-24.2 91.2 2.2 73 57.4 128 130.2 128h511.8c72.6 0 124.2-55.2 126-128 0.6-28.4-5.2-59.4-22.2-91.2zM310.2 608l59-96h286.2l59.6 96h-404.8z"></path>
    </SVG>
  )
}


MdFlask.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdFlask.propTypes = {
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


export default MdFlask
