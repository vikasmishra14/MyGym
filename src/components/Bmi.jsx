import { Breadcrumb, Button, Form, Input, Progress } from 'antd';
import React, { useState } from 'react';

const Bmi = () => {


    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState("");
    const [under18, setUnder18] = useState("");

    const calculateBMI = (weight, height) => {
        return weight / (height * height);
    }


    const interpretBMI = (bmi) => {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            return "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }


    const runBMICalculator = (values) => {
        var age = parseInt(values.age);
        var weight = parseFloat(values.weight);
        var height = parseFloat(height);
        height = height / 100;

        var bmi = calculateBMI(weight, height); 

        setBmi(bmi);
        setCategory(category);

        if (age < 18) {
            setUnder18("Note: BMI may not be an accurate indicator for individuals under 18 years old.");
        }
    }


    return (

        <>

            <Breadcrumb
                style={{ margin: "20px" }}
                items={[
                    {
                        title: "Home",
                    },
                    {
                        title: 'BMI',
                    },
                ]}
            />

            <div style={{ margin: "auto", padding: "30px", textAlign: "center", width: "80%" }}>
                <h1 style={{ marginBottom: "25px" }}>BMI Calculator</h1>
                <Form

                    onFinish={runBMICalculator}

                    name="basic"
                    style={{
                        width: "100%",
                    }}>
                    <Form name={"weight"} label="Weight in kg's" rules={[
                        {
                            required: true,
                            message: 'Please input your weight!',
                        },
                    ]}><Input /></Form.Item>

                    <Form name={"height"} label="Height in cm's" rules={[
                        {
                            required: true,
                            message: 'Please input your height!',
                        },
                    ]}><Input /></Form.Item>
                    <Form.Item name={"age"} label="Age in years" rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                    ]}><Input /></Form.Item>
                    <Form.Item style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button type='primary' htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
            </div>

            <div style={{ width: "70%", margin: "auto", textAlign: "center" }}>
                <h2>BMI Result:</h2>
                <Progress style={{ marginTop: "20px", marginBottom: "20px" }} type="circle" percent={bmi.toFixed(2)} format={(percent) => `${percent} BMI`} size={200} status={category == "Obese" ? "exception" : category == "Overweight" ? "active" : category == "Normal weight" ? "success" : "exception"} />
                <p>Category: {category}</p>
                <p>{under18}</p> 
            <h4 style={{ textAlign: "center", marginTop: "20px", color: "orange" }}>For Gaining Weight:</h4>
            <h5 style={{ textAlign: "center", marginTop: "20px", color: "green" }}>Vegetarian Diet:</h5>
            <div className='dietContainer'>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Protein-Rich Foods**:</p>
                    <p>- Legumes (beans, lentils, chickpeas)</p>
                    <p>- Tofu and tempeh</p>
                    <p>- Quinoa and other whole grains</p>
                    <p>- Nuts and seeds (almonds, walnuts, chia seeds)</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Healthy Fats**:</p>
                    <p>- Avocados</p>
                    <p>- Olive oil</p>
                    <p>- Coconut milk or coconut oil</p>
                    <p>- Nuts and seeds</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Complex Carbohydrates**:</p>
                    <p>- Whole grain bread and pasta</p>
                    <p>- Brown rice</p>
                    <p>- Sweet potatoes</p>
                    <p>- Oats</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Fruits and Vegetables**:</p>
                    <p>- Include a variety of colorful fruits and vegetables for essential vitamins and minerals.</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Regular Meals and Snacks**:</p>
                    <p>- Eat 3 main meals and 2-3 snacks per day to increase calorie intake.</p>
                </div>
            </div>

            <h5 style={{ textAlign: "center", marginTop: "20px", color: "orangered" }}>Non-Vegetarian Diet:</h5>

            <div className='dietContainer'> 
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Lean Proteins**:</p>
                    <p>- Chicken breast</p>
                    <p>- Turkey</p>
                    <p>- Fish (salmon, tuna)</p>
                    <p>- Eggs</p>
                    <p>- Lean cuts of chevon or mutton</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Healthy Fats**:</p>
                    <p>- Fatty fish (salmon, mackerel)</p>
                     
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Complex Carbohydrates**:</p>
                    <p>- Whole grain bread and pasta</p>
                    <p>- Brown rice</p>
                    <p>- Sweet potatoes</p>
                    <p>- Quinoa</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Fruits and Vegetables**:</p>
                    <p>- Include a variety of colorful fruits and vegetables for essential vitamins and minerals.</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Regular Meals and Snacks**:</p>
                    <p>- Eat 3 main meals and 2-3 snacks per day to increase calorie intake.</p>
                </div>
            </div>

            <h4 style={{ textAlign: "center", marginTop: "20px", color: "orange" }}>For Losing Weight:</h4>

            <h5 style={{ textAlign: "center", marginTop: "20px", color: "green" }}>Vegetarian Diet:</h5>

            <div className='dietContainer'>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**High-Fiber Foods**:</p>
                    <p>- Leafy greens (spinach, kale)</p>
                    <p>- Cruciferous vegetables (broccoli, cauliflower)</p>
                    <p>- Berries</p>
                    <p>- Whole grains (quinoa, barley)</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Lean Proteins**:</p>
                    <p>- Tofu and tempeh</p>
                    <p>- Legumes (beans, lentils)</p>
                    <p>- Greek yogurt or cottage cheese</p>
                    <p>- Eggs</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Healthy Fats**:</p>
                    <p>- Avocados</p>
                    <p>- Nuts and seeds</p>
                    <p>- Olive oil</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Limit Processed Foods and Sugary Snacks**:</p>
                    <p>- Avoid sugary drinks and snacks.</p>
                    <p>- Choose whole, minimally processed foods.</p>
                </div>
            </div>

            <h5 style={{ textAlign: "center", marginTop: "20px", color: "orangered" }}>Non-Vegetarian Diet:</h5>

            <div className='dietContainer'>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Lean Proteins**:</p>
                    <p>- Same as vegetarian diet.</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Healthy Fats**:</p>
                    <p>- Same as vegetarian diet.</p>
                </div>
                <div>
                    <p style={{ fontWeight: "bold", color: "teal" }}>**Limit Processed Foods and Sugary Snacks**:</p>
                    <p>- Same as vegetarian diet.</p>
                </div>
            </div>

        </>
    )
}

export default Bmi