import { BrowserRouter, Route, Switch } from "react-router-dom";

import PlanLayout from "./pages/Layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Amigos from "./pages/Amigos";
import Upcoming from "./pages/Upcoming";

import AppLayout from "./pages/Layouts/AppLayout";

import "./App.css";

function App() {
   return (
      <BrowserRouter>
         <Route
            exact
            path={[
               "/",
               "/invite",
               "/get_username",
               "/code_confirm",
               "/allow_notification",
            ]}
         >
            <PlanLayout>
               <Switch>
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/invite" component={PhoneConfirmation} />
                  <Route exact path="/code_confirm" component={CodeConfirm} />
                  <Route
                     exact
                     path="/allow_notification"
                     component={AllowNotification}
                  />
               </Switch>
            </PlanLayout>
         </Route>
         <Route
            exact
            path={[
               "/home",
               "/explore",
               "/profile",
               "/notifications",
               "/amigos",
               "/upcoming",
            ]}
         >
            <AppLayout>
               <Switch>
                  <Route exact path="/home" component={() => <Home />} />
                  <Route exact path="/explore" component={Explore} />
                  <Route exact path="/profile" component={Profile} />
                  <Route
                     exact
                     path="/notifications"
                     component={Notifications}
                  />
                  <Route exact path="/amigos" component={Amigos} />
                  <Route exact path="/upcoming" component={Upcoming} />
               </Switch>
            </AppLayout>
         </Route>
      </BrowserRouter>
   );
}

export default App;
