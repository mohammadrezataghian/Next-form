import React from 'react'

const ErrorSvg = () => {
  return (
    <>
      <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-1.5 -1.5 53.00 53.00"
    width="13px"
    height="13px"
    fill="#fc0303"
    stroke="#fc0303"
    className="inline-block mr-1"
  >
    <g strokeWidth="0"></g>
    <g strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.2"></g>
    <g>
      <circle style={{ fill: "#da7062" }} cx="25" cy="25" r="25"></circle>
      <polyline
        style={{
          fill: "none",
          stroke: "#ff0505",
          strokeWidth: "0.95",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
        }}
        points="16,34 25,25 34,16"
      ></polyline>
      <polyline
        style={{
          fill: "none",
          stroke: "#ff0505",
          strokeWidth: "0.95",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
        }}
        points="16,16 25,25 34,34"
      ></polyline>
    </g>
  </svg>
    </>
  )
}

export default ErrorSvg
