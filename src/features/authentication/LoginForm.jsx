import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from '../../ui/SpinnerMini';


function LoginForm() {
    const [email, setEmail] = useState("raph4sure0@gmail.com");
    const [password, setPassword] = useState("pass1234");
    const { login, isLoading } = useLogin();

    // used email and password
    // raph4sure@gmail.com
    // raph4sure0@gmail.com
    // pass1234

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;

        login({ email, password });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Email address">
                <Input
                    type="email"
                    id="email"
                    // This makes this form better for password managers
                    autoComplete="username"
                    value={email}
                    disabled={isLoading}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormRowVertical>
            <FormRowVertical label="Password">
                <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    disabled={isLoading}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormRowVertical>
            <FormRowVertical>
                <Button size="large" disabled={isLoading}>
                    {!isLoading ? "Log In" : <SpinnerMini />}
                </Button>
            </FormRowVertical>
        </Form>
    );
}

export default LoginForm;
