import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import UserContext from "../contexts/UserContext";
import "../assets/css/reset.css"
import Login from './Login'
import Register from './Register'
import Habits from './Habits'
import Today from './Today'
import History from './History';
import styled from 'styled-components'

export default function App(){

    const [loginData, setLoginData] = useState({email: '', password: ''})
    const [userData, setUserData] = useState({})
    const [habitToAdd, setHabitToAdd] = useState(false)
    const [obj, setObj] = useState({name:'', days: []})
    const [loading, setLoading] = useState(false)
    const [deleteH, setDeleteH] = useState(false)
    const [habsDone, setHabsDone] = useState(0)
    const [habsNumber, setHabsNumber] = useState(0)
    const contextValue = {loginData, setLoginData, userData, setUserData, habitToAdd, setHabitToAdd, obj, setObj, deleteH, setDeleteH, loading, setLoading, habsDone, setHabsDone, habsNumber, setHabsNumber}
    

    return(
        <AppDiv>
            <BrowserRouter>
                <UserContext.Provider value={contextValue}>
                    <Routes>
                        <Route path="/" element={<Login />}/>
                        <Route path="/cadastro" element={<Register />}/>
                        <Route path="/habitos" element={<Habits />}/>
                        <Route path="/hoje" element={<Today />}/>
                        <Route path="/historico" element={<History />}/>
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </AppDiv>
    )
}

const AppDiv = styled.div`
    padding-bottom: 100px;
`