import Header from '../components/header';
import Section1 from '../components/section1';
import Features from '../components/features';
import Bluebox from '../components/bluebox';
import XerocodeWay from '../components/xerocodeway';
import Newsletter from '../components/newsletter';
// import SmNav from '../components/sm-nav';

export default function Home() {
    return (
        <main>
            <Header />
            {/* <SmNav /> */}
            <Section1 />
            <Features />
            <Bluebox />
            <XerocodeWay />
            <Newsletter />
        </main>
    );
}
