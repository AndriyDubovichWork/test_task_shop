import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StylesProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const client = new ApolloClient({
	uri: 'https://shop-api-andriydubovichwork.vercel.app/',
	cache: new InMemoryCache(),
});

root.render(
	<ApolloProvider client={client}>
		<StylesProvider injectFirst={false}>
			<RecoilRoot>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</RecoilRoot>
		</StylesProvider>
	</ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
