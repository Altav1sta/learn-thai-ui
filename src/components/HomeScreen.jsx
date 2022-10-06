import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";

export default function HomeScreen() {
    const context = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (context.value.userId == null) navigate('/signin');
    }, [context.value.userId, navigate]);

    return (
        <div>
            <h1>HOME</h1>
            <h3>{context.value.userEmail}</h3>
        </div>
    );
}