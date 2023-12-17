import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import "./list.css"

import { useState } from "react";

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />

    </div>
  )
}

export default List