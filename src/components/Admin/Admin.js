import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from '../styles/Button.style'
import { MyContainer } from '../styles/div.style'
// import { GreenButton, RedButton, VioletButton } from '../styles/Button.style'
function Admin() {
    return (
        <React.Fragment>

            admin
            <nav>
                <Link to='/admin/gestionpost'>
                   GestionPost
                </Link>
                <Link to='/admin/dashboard'>
                    Dashboard
                </Link>
            </nav>
            <Outlet />
            <MyContainer>
            <Button bg="red">Test</Button>
            <Button bg="violet">Test</Button>
            <Button bg="green">Test</Button>
            <Button bg="blue">Test</Button>
             </MyContainer>
            {/* <GreenButton>test</GreenButton>
            <RedButton>valider</RedButton>
            <VioletButton>Reset</VioletButton> */}
        </React.Fragment>
    )
}

export default Admin