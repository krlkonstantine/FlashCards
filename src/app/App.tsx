import {Counter} from "features/counter/Counter";
import {useAppDispatch, useAppSelector} from "app/hooks";
import React, {useEffect} from "react";
import {appActions} from "app/app.slice";
import {Pages} from "features/components/Pages/Pages";
import {GlobalError} from "common/components/GlobalError/GlobalError";

function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
       setTimeout(()=>{
            dispatch(appActions.setIsLoading({isLoading:false}))
       },3000)
    }, []);

    return (
        <div className="App">
            {isLoading && <h1>Loader...</h1>}
            <Pages/>
            <GlobalError/>
        </div>
    );
}

export default App;