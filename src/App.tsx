import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import setup from "./utlis/intersecptor";

import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
	setup();

	const queryClient = new QueryClient();

	return (
		<>
			<div>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<AppRoutes />
					</BrowserRouter>
				</QueryClientProvider>
			</div>
		</>
	);
}

export default App;
