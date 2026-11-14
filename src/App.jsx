import { createRoutesFromElements } from "react-router-dom";
import HomeIndex from "./pages/homepage/HomeIndex"

const routes = createRoutesFromElements(
  <>
    <Route index loader={step1Loader} Component={StepOne} />
    <Route path="step-2" loader={step2Loader} Component={StepTwo} />
    <Route path="step-3" loader={step3Loader} Component={StepThree} />
  </>
);


function App() {

  return (
    <>
      <HomeIndex />
    </>
  )
}

export default App
