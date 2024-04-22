import React, { useState } from "react";

export const Formulario = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkedMe, setCheckedMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function handleEmail(event) {
        setEmail(event.target.value)
    };

    function handlePassword(event) {
        setPassword(event.target.value)
    };

    function handleCheck(event) {
        setCheckedMe(event.target.checked)
    }

    function handleSubmit(event) {
        event.preventDefault();
    };

    const handleReset = () => {
        setEmail("");
        setPassword("");
        setCheckedMe(false);
    }

    const dataToSend = {
        email: email,
        password: password,
        accept: checkedMe,
    }

    function togglePassword() {
        setShowPassword(!showPassword);
    }


    return (
        <>
            <h1>Formulario</h1>
            <form className="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmail}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                    />

                    <i onClick={togglePassword} class={showPassword ? "fas fa-regular fa-eye" : "fas fa-regular fa-eye-slash"}></i>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Fecha</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter date"
                        value={email}
                        onChange={handleEmail}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        checked={checkedMe}
                        onChange={handleCheck}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary mx-2">Submit</button>
                <button type="reset" className="btn btn-warning mx-2" onClick={handleReset}>Reset</button>
            </form>
        </>
    )

}