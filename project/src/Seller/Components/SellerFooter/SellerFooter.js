import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SellerFooter extends Component {
  render() {
    return (
      <div>
  <footer className="main-footer">
    <strong>Copyright © 2023-2024 <Link href="#">E-commerce.io</Link>.</strong>
    All rights reserved.
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b> 1.0.0
    </div>
  </footer>
</div>

    )
  }
}
