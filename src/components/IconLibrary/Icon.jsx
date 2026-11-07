import { icons } from "./IconLibrary.jsx";



function Icon({name,classname}){


    return(


        <span className={classname}>

            {icons[name]}

        </span>
    )

}

export default Icon

