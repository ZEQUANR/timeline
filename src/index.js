import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Head } from "./modules/head"
import { Left } from "./modules/left"
import { Right } from "./modules/right"

ReactDOM.render(
  <div className="h-screen">
    <Head></Head>
    <div className="w-screen h-5/6 p-2">
      <Right></Right>
      <Left></Left>
    </div>
  </div>,
  document.getElementById("root")
)
