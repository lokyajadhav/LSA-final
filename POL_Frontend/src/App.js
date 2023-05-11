import './App.css';
import {
	BrowserRouter as Router,
  	Route,
	Routes
} from "react-router-dom";
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import MineBlock from './components/MineBlock/MineBlock';
import Chain from './components/Chain/Chain';
import Miners from './components/Miners/Miners';

const App = () => {
	return (
		<>
		<Router>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route exact path="/register" element={<Registration/>}/>
				<Route exact path="/mine" element={<MineBlock/>}/>
				<Route exact path='/chain' element={<Chain/>}/>
				<Route exact path='/miners' element={<Miners/>}/>
			</Routes>
		</Router>
		</>
	);
}

export default App;
