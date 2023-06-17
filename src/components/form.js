import { useState } from "react";

const Form = () => {

    let[form, setForm] = useState({
        username: "", email: "", password: "", confirmPassword: "",
    });
    let[error, setError] = useState("");
    let[success, setSuccess] = useState("");

    function handleSignup(e) {
        e.preventDefault();
        let a = form.email.indexOf("@");
        let d = form.email.lastIndexOf(".");
        if(form.username === "" || form.email === "" || form.password ==="" || form.confirmPassword === "") {
            setSuccess("");
            setError("All fields are mandatory!");
        } else if(!form.username.trim().includes(" ")) {
            setSuccess("");
            setError("Enter Full Name");
        } else if(!form.email.includes("@") || !form.email.includes(".") || !form.email.indexOf(a,".") || form.email.includes("@.") || d+2 > form.email.length-1 || form.email.length < 7) {
            setSuccess("");
            setError("Invalid Email Address");
        } else if(form.password !== form.confirmPassword) {
            setSuccess("");
            setError("Passwords don't match");
        } else if(form.password.length < 6) {
            setSuccess("");
            setError("Password should be atleast 6 characters");
        } else {
            setError("");
            setSuccess("Successfully signedup!");
        }

    }

    return (
        <form>
            <h1>Signup</h1>
            <input type="text" placeholder="Full Name" onChange={(e)=> setForm({...form, username: e.target.value})}/>
            <input type="email" placeholder="Email" onChange={(e)=> setForm({...form, email: e.target.value.trim()})}/>
            <input type="password" placeholder="Password" onChange={(e)=> setForm({...form, password: e.target.value})}/>
            <input type="password" placeholder="Confirm Password" onChange={(e)=> setForm({...form, confirmPassword: e.target.value})}/>
            <p className="error">{error}</p>
            <p className="success">{success}</p>
            <button onClick={(e) => handleSignup(e)}>Signup</button>
        </form>
    )
}

export default Form;