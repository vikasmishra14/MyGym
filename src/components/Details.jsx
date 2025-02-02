import { Breadcrumb, Image, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import jsonObjects from '../db/data.json';
import MyCard from './MyCard';

const Details = () => {

    const [data, setData] = useState({});

    const [exercises, setExercises] = useState([]); 

    const { id } = useParams();

    const navigate = useNavigate();


    useEffect(() => {

        let res = jsonObjects.find(obj => obj.id == id);

        if (!res) {
            navigate("*");
            return;
        }

        res.name = res.name.charAt(0).toUpperCase() + res.name.slice(1);

        const related = jsonObjects.filter(obj => obj.bodyPart.includes(res.bodyPart));

        setData(res); 
        setExercises(related);

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    }, [id])

    return (
        <>

            <Breadcrumb
                style={{ margin: "20px" }}
                items={[
                    {
                        title: <Link to={"/"}>Home</Link>,
                    },
                    {
                        title: 'Details',
                    },
                ]}
            />

            <div id='container' style={loaded ? { display: "block" } : { display: "none" }}>
                <Image preview={false} src={data.gifUrl} /> 
                <p style={{ marginTop: "20px" }}><Tag color="magenta">{data.bodyPart}</Tag> <Tag color="cyan">{data.target}</Tag></p>
                <p style={{ lineHeight: "20px", marginTop: "30px" }}>{data.details}</p>
            </div>

            <h2 style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px", color: "teal" }}>Related Exercises</h2>

            <div className='imageCont' style={loaded ? { display: "flex" } : { display: "none" }}>
                {
                    exercises.map((elem) => (
                        <MyCard key={elem.id} props={elem} />
                    ))
                }
            </div>
        </>
    )
}

export default Details