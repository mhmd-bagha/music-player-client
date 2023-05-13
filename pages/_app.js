import 'Styles/_variables.scss'
import 'Styles/globals.css'
import Layout from "Component/layout";
import {ContextProvider} from "@/context/store";

export default function App({Component, pageProps}) {
    return (
        <ContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ContextProvider>
    )
}
