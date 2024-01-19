import Container from '../Container/Container';
import Rating from '../Rating/Rating';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import './Main.scss'
const Main = () => {
    return (
        <div className='Main'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Container />} />
                    <Route path="/rating" element={<Rating />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main