import { Navbar } from "../../../Components/Client/Navbar"

export const HomeClient = () => {

  
  console.log(window.location.pathname);
  

  return (
    <>
      <Navbar  />
      <div>
        <h1>Este sera el home</h1>
      </div>
    </>
    
  )
}
