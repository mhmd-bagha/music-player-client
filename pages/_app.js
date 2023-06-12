import 'Styles/_variables.scss'
import 'Styles/globals.css'
import Layout from "Component/layout";
import {ContextProvider} from "@/context/store";
import {Provider} from "react-redux";
import {persistor, store} from '@/redux/store'
import {PersistGate} from "redux-persist/integration/react";

export default function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ContextProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ContextProvider>
            </PersistGate>
        </Provider>
    )
}
