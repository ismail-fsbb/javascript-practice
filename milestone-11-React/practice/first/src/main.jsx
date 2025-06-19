import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Visible from './components/visible.jsx'
import Count from './components/count.jsx'


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Count />
		<Visible />
	</StrictMode>,
)
