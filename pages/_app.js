import 'Styles/globals.scss'
import 'Styles/import-tailwind.css'
import Layout from "Component/layout";

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
