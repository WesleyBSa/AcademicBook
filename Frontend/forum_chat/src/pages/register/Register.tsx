import image from '../../assets/santissimo.png'
import { FcGoogle } from "react-icons/fc";
import { Body, Button, Div_Mid, P, Input, Box, DivButton, A, Bottom } from '../register/themes';


function Register() {



    return (
        <Body>
            <div className="top">
                <div className="image"><img src={image} alt="santissimo_logo" /></div>
            </div>

            <>
                <Div_Mid>

                    <P>Nome completo : </P>
                    <Input type="text" />

                    <P>Endereço de e-mail : </P>
                    <Input type="text" />

                    <P>Senha :</P>
                    <Input type="text" />

                    <P>Repita a Senha :</P>
                    <Input type="text" />
                </Div_Mid>

            </>

            <Bottom>
                <DivButton>
                    <Button>Registra-se</Button>
                    <FcGoogle size={37} cursor='pointer' />
                </DivButton>

                <Box>
                    <A href="/">Login</A>
                </Box>

            </Bottom>
        </Body>
    )

}

export default Register
