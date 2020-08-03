/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/styles/utils"

const icons = {
  triangle: {
    shape: (
      <React.Fragment>
      <text>&#9834;</text>
      </React.Fragment>
    ),
    viewBox: `0 -25 30 30`,
  },
  circle: {
    shape: (
      <React.Fragment>
      <text>&#9839;</text>
      </React.Fragment>
    ),
    viewBox: `0 -25 30 30`,
  },
  arrowUp: {
    shape: (
      <React.Fragment>
      <text>&#9835;</text>
      </React.Fragment>
    ),
    viewBox: `0 -25 30 30`,
  },
  upDown: {
    shape: (
      <React.Fragment>
      <text>&#9837;</text>
      </React.Fragment>
    ),
    viewBox: `0 -25 30 30`,
  },
  box: {
    shape: (
      <React.Fragment>
      <text>&#119137;</text>
      </React.Fragment>
    ),
    viewBox: `0 -25 30 30`,
  },
  hexa: {
    shape: (
      <React.Fragment>
      <text>&#119070;</text>
      </React.Fragment>
    ),
    viewBox: `0 -25 30 30`,
  },
  cross: {
    shape: (
      <React.Fragment>
      <text>&#119074;</text>
      </React.Fragment>
    ),
    viewBox: `0 -25 30 30`,
  },
}

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const SVG = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG
