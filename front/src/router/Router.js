import SiteRoot from "../site/SiteRoot";

const { default: Login } = require("../Login/Login");
const { default: Register } = require("../Register/Register");

const Router=[{
    path:"/",
    element:<SiteRoot/>,

    children:[{
        path:"register",
        element:<Register/>
    },
{
    path:"login",
    element:<Login/>
}]

    
}]

export default Router