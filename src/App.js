import './App.css';
import Layout from './layout/Layout'
import routes from './routes'
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          {routes.map((route) => {
            return <Route {...route} />
          })}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;