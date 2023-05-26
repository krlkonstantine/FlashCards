import {Counter} from "features/counter/Counter";
import React, {useEffect} from "react";
import {Pages} from "features/components/Pages/Pages";
import {GlobalError} from "common/components/GlobalError/GlobalError";
import {LinearProgress} from "@mui/material";
import {useAppSelector} from "common/hooks";

function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading);

    /*    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(()=>{
             dispatch(appActions.setIsLoading({isLoading:false}))
        },3000)
     }, []);*/

    return (
        <div className="App">
            {isLoading && <LinearProgress />}
            <Pages/>
            <GlobalError/>
        </div>
    );
}

export default App;