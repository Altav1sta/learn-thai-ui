import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import React from "react";
import useForm from "../hooks/useForm";
import Center from "./Center";

const getFreshModel = () => ({
    email: "",
    name: ""
});

const validate = (form) => {
    let validationObj = {};
    validationObj.email = (/\S+@\S+\.\S+/).test(form.values.email)
        ? ""
        : "Email is invalid";
    validationObj.name = form.values.name !== ""
        ? ""
        : "Name is required";
    form.setErrors(validationObj);
    return Object.values(validationObj).every(x => x === "");
}

export default function LoginForm() {
    const form = useForm(getFreshModel);
    const login = e => {
        e.preventDefault();
        if (validate(form)) console.log(form.values);
    }    

    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        Learn Thai
                    </Typography>
                    <Box sx={{ '& .MuiTextField-root': { m: 1, width: "90%" } }}>
                        <form noValidate onSubmit={login}>
                            <TextField
                                label="Email"
                                name="email"
                                value={form.values.email}
                                onChange={form.handleInputChange}
                                variant="outlined"
                                {...(form.errors.email && { error: true, helperText: form.errors.email })}
                            />
                            <TextField
                                label="Name"
                                name="name"
                                values={form.values.name}
                                onChange={form.handleInputChange}
                                variant="outlined"
                                {...(form.errors.name && { error: true, helperText: form.errors.name })}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: "90%" }}
                            >
                                Start
                            </Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}