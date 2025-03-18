import { BrowserRouter, Routes, Route } from "react-router-dom";
import routesConfig from "./routes/AppConfig"; 
import React, { Suspense } from "react";
import Spin from "./components/ui/spin"; // Import the Spin component

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {routesConfig.map((route, index) => {
            const Layout = route.layout || React.Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Suspense fallback={<Spin />}> 
                      <route.component />
                    </Suspense>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
