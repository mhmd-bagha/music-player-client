import 'Styles/globals.scss'
import 'Styles/import-tailwind.css'
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
