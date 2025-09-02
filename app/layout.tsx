import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Link from "next/link";

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="some-key">HKU CCAI9024</Banner>
const navbar = (
    <Navbar
        logo={
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img src="/images/general/hku_logo.png" alt="HKU Logo" width={200} height={20}/>
                <img src="/images/general/ids_logo.png" alt="IDS Logo" width={200} height={20}/>
            </div>
        }
    />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({children}) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
        <Head>
            <link rel="shortcut icon" href="/images/general/hku_icon.jpg"/>
        </Head>
        <body>
        <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/HKU-CCAI9024/hku-ccai9024/tree/main"
            // footer={footer}
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}