import { NextPage } from 'next'
import Navbar from '../components/Navbar';

interface Props { }

const AboutUs: NextPage<Props> = ({ }) => {
    return <div>
        <Navbar />
        <h1>This is Contact Page</h1>
    </div>
}

export default AboutUs;