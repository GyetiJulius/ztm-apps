import React from "react";
import './homepage.styles.scss'
import Directory from "../../components/directory/directory.component";

const HomePage = ({history}) => {
    return(
        <Directory history={history}/>
    )
}

export default HomePage;
