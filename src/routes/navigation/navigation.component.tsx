import { Fragment } from "react";
import { Outlet } from "react-router";

import "./navigation.component.js"
import NavigationBar from "../../components/shared/navigation/navigation.component.jsx";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationBar/>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation