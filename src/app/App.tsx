import {Counter} from "features/counter/Counter";
import React, {useEffect} from "react";
import {Pages} from "features/components/Pages/Pages";
import {GlobalError} from "common/components/GlobalError/GlobalError";
import {LinearProgress} from "@mui/material";
import {useAppSelector} from "common/hooks";
import {Header} from "features/components/Header/Header";

function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading);


    return (
        <div className="App">
            {isLoading && <LinearProgress />}
            <Pages/>
            <GlobalError/>
        </div>
    );
}

export default App;