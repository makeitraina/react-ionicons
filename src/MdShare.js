import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdShare = props => {
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
      <path d="M767.644 688.854c-32.090 0-62.048 10.652-83.442 31.958l-305.914-176.84c2.142-10.656 4.284-19.186 4.284-29.838 0-10.656-2.142-19.186-4.284-29.838l301.652-174.7c23.524 21.306 53.482 34.082 87.704 34.082 70.59 0 128.356-57.532 128.356-127.84 0-70.304-57.766-127.838-128.356-127.838-70.594 0-128.358 57.534-128.358 127.84 0 10.654 2.13 19.186 4.284 29.838l-301.642 174.7c-23.534-21.308-53.482-34.082-87.712-34.082-70.592 0-126.216 57.532-126.216 127.84 0 70.306 57.754 127.84 128.356 127.84 34.23 0 64.178-12.778 87.712-34.084l303.782 176.842c-2.152 8.51-4.282 17.042-4.282 27.694 0 68.188 55.612 123.574 124.074 123.574 68.458 0 124.072-55.386 124.072-123.574 0.002-68.188-55.61-123.574-124.070-123.574z"></path>
    </SVG>
  )
}


MdShare.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdShare.propTypes = {
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


export default MdShare
