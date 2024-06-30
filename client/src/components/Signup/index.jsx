import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Signup = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userType: '',
        secretKey: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.userType === 'Admin' && data.secretKey !== 'Durgaa@01') {
            alert('Invalid Admin');
        } else {
            try {
                const url = 'http://localhost:3000/api/users';
                const { data: res } = await axios.post(url, data);
                navigate('/login');
                console.log(res.message);
            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    setError(error.response.data.message);
                }
            }
        }
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to='/login'>
                        <button type='button' className={styles.white_btn}>
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="userType"
                                    value="User"
                                    onChange={handleChange}
                                />
                                User
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="userType"
                                    value="Admin"
                                    onChange={handleChange}
                                />
                                Admin
                            </label>
                        </div>
                        {data.userType === 'Admin' && (
                            <div className={styles.input_container}>
                                <label>Secret Key</label>
                                <input
                                    type="text"
                                    placeholder="Secret Key"
                                    name="secretKey"
                                    onChange={handleChange}
                                    value={data.secretKey}
                                    className={styles.input}
                                />
                            </div>
                        )}
                        <input
                            type='text'
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type='submit' className={styles.green_btn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
