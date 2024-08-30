import image from '../../assets/santissimo.png'
import { FcGoogle } from "react-icons/fc";
import { Mid, Body, Button, Div_Mid, P, Input, P_alt, Box, A } from '../login/themes';


function Login() {



    return (
        <Body>
            <div className="top">
                <div className="image"><img src={image} alt="santissimo_logo" /></div>
            </div>

            <Mid>
                <Div_Mid>
                    <P>Endereço de e-mail : </P>
                    <Input type="text" />

                    <P>Senha :</P>
                    <Input type="text" />
                </Div_Mid>

                <div>
                    <Button>Login</Button>
                </div>

            </Mid>

            <div className="bottom">
                <P_alt> Não possui conta ? </P_alt>
                <Box>
                    <A href="/register">Registre-se</A>
                    <FcGoogle size={32} cursor='pointer' />
                </Box>


            </div>
        </Body>
    )

}

export default Login
