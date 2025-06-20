import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Visible from './components/visible.jsx'
import Count from './components/count.jsx'
import UserList from "./components/UserList.jsx";


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Count />
		<Visible />
		<UserList />
	</StrictMode>,
)
