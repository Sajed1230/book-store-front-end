import styled from "styled-components"
import Header from "./src/header";
import { Outlet } from "react-router-dom";


const MainDiv=styled.div`
background-color: aquamarine;
padding: 0%;
`




export default function Loyout(){



return <MainDiv>
<Header />
<Outlet />
</MainDiv>;

}