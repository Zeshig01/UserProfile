import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        gender: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Added loading state
    const [errors, setErrors] = useState({}); // Added for form validation

    // Form validation function
    const validateForm = () => {
        const newErrors = {};
        if (!formData.username.trim()) newErrors.username = 'Username is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.password) newErrors.password = 'Password is required';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);
        setErrors({});
        
        try {
            const response = await axios.post('http://localhost:8000/register', formData, {
                headers: {
                    'Content-Type': 'application/json' // Changed from FormData to JSON
                }
            });
            
            if (response.status === 201 || response.status === 200) {
                setMessage('Profile created successfully!');
                setFormData({ username: '', email: '', gender: '' ,password: '' });
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error creating profile.');
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>

                {message && (
                    <p className={`text-center font-semibold ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                        {message}
                    </p>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            onChange={handleChange}
                            value={formData.username}
                            type="text"
                            name="username"
                            placeholder="Enter user name"
                            className={`w-full px-4 py-3 rounded-lg border ${
                                errors.username ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                            disabled={isLoading}
                        />
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                    </div>

                    <div>
                        <input
                            onChange={handleChange}
                            value={formData.email}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className={`w-full px-4 py-3 rounded-lg border ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                            disabled={isLoading}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <select
                            onChange={handleChange}
                            value={formData.gender}
                            name="gender"
                            className={`w-full px-4 py-3 rounded-lg border ${
                                errors.gender ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700 appearance-none`}
                            disabled={isLoading}
                        >
                            <option value="" disabled>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                    </div>
                    <div>
                        <input
                            onChange={handleChange}
                            value={formData.password}
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className={`w-full px-4 py-3 rounded-lg border ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                            disabled={isLoading}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-3 rounded-lg transition duration-200 font-semibold ${
                            isLoading 
                                ? 'bg-blue-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;