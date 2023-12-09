import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import Layout from "../layout/layout.jsx";
import Home from '../routes/home/page.jsx';
import About from "../routes/about/page.jsx";
import Contact from "../routes/contact/page.jsx"
import Login from "../routes/login/page.jsx";
import News from "../routes/news/page.jsx";
import RandomFacts from "../routes/randomFacts/page.jsx";
import Photos from "../routes/photos/page.jsx";
import Todos from "../routes/todos/page.jsx";


function App (){
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/news" element={<News/>}/>
					<Route path="/random-facts" element={<RandomFacts/>}/>
					<Route path="/photos" element={<Photos/>}/>
					<Route path="/todo" element={<Todos/>}/>								
				</Route>
			</>
		)
	)

	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	)
}

export default App;