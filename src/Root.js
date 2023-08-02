import { Outlet } from 'react-router-dom';
import Nav from './Nav.js';
function Rootlayout(){
    return(
        <div>
            <Nav />
            <main className="header">
                <Outlet />
            </main>
        </div>
    );
}
 export default Rootlayout;