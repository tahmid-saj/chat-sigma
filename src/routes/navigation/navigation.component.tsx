import { Fragment } from "react";
import { Outlet } from "react-router";

import NavigationBar from "../../components/shared/navigation/navigation.component";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationBar/>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation