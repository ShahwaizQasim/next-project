import { NextPage } from 'next'
import Navbar from '../components/Navbar'

interface Props { }

const Login: NextPage<Props> = ({ }) => {


    return <div>

        <Navbar />



        <h1>Hello This Login Page</h1>
    </div>
}

export default Login