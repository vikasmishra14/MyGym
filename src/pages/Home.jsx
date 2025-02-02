import { Image, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../assets/img5.jpeg';
import img2 from '../assets/img6.jpeg';
import img3 from '../assets/img8.jpeg';
import img4 from '../assets/img9.jpeg';
import Card from '../components/MyCard';
import jsonData from '../db/data.json'; 
import chest from '../assets/chest-icon.webp';
import leg from '../assets/leg.webp';
import neck from '../assets/neck.webp';
import shoulder from '../assets/shoulder.webp';
import armIcon3 from '../assets/triceps.webp';
import thigh from '../assets/man.png';
import absIcon from '../assets/abs.png';
import bodyParts from '../assets/bodyparts.jfif';

const Home = () => {

    const [data, setData] = useState(jsonData);

    const [queryData, setQueryData] = useState([]);

    const [exerciseDisplay, setExerciseDisplay] = useState(true);

    let waistExercises = data.filter(obj => obj.bodyPart.includes("waist"));
    let upperLegsExercises = data.filter(obj => obj.bodyPart.includes("upper leg"));
    let backExercises = data.filter(obj => obj.bodyPart.includes("back"));
    let tricepExercises = data.filter(obj => obj.bodyPart.includes("upper arms") && obj.target.includes("tricep"));
    let bicepExercises = data.filter(obj => obj.bodyPart.includes("upper arms") && obj.target.includes("bicep"));
    let chestExercises = data.filter(obj => obj.bodyPart.includes("chest"));
    let shoulderExercises = data.filter(obj => obj.bodyPart.includes("shoulder"));
    let lowerArmExercises = data.filter(obj => obj.bodyPart.includes("lower arms"));
    let lowerLegExercises = data.filter(obj => obj.bodyPart.includes("lower legs"));
    let cardioExercises = data.filter(obj => obj.bodyPart.includes("cardio"));
    let neckExercises = data.filter(obj => obj.bodyPart.includes("neck"));


    const handleMenuClick = (query) => {

        if (query == "bicep") {
            const res = data.filter(obj => obj.target.includes(query));
            if (res.length != 0) {
                setQueryData(res);
                setExerciseDisplay(false);
            }
        } else if (query == "tricep") {
            const res = data.filter(obj => obj.target.includes(query));
            if (res.length != 0) {
                setQueryData(res);
                setExerciseDisplay(false);
            }
        } else {
            const res = data.filter(obj => obj.bodyPart.includes(query));
            if (res.length != 0) {
                setQueryData(res);
                setExerciseDisplay(false);
            }
        }
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };


    useEffect(() => {
        setData(jsonData);
    }, [])

    return (

        <>

            <div className='imageCont'>
                <Image preview={false} width={"600px"} src={bodyParts} />
            </div>




            <div className='imageCont'>
                <Image preview={false} width={"300px"} src={img1} />
                <Image preview={false} width={"300px"} src={img2} />
                <Image preview={false} width={"300px"} src={img3} />
                <Image preview={false} width={"300px"} src={img4} />
            </div>

            <div style={{ margin: "auto", marginTop: "50px", marginBottom: "30px" }}>
                <Carousel responsive={responsive}>
                    <div onClick={() => handleMenuClick("bicep")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={armIcon1} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='magenta'>Biceps Exercises</Tag></h3>
                    </div>
                    <div onClick={() => handleMenuClick("chest")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={chest} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='cyan'>Chest Exercises</Tag></h3>
                    </div>
                    <div onClick={() => handleMenuClick("back")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={back} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='green'>Back Exercises</Tag></h3>
                    </div>
                    <div onClick={() => handleMenuClick("shoulder")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={shoulder} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='red'>Shoulders Exercises</Tag></h3>
                    </div>
                    <div onClick={() => handleMenuClick("tricep")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={armIcon2} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='volcano'>Triceps Exercises</Tag></h3>
                    </div>
                    <div onClick={() => handleMenuClick("waist")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={absIcon} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='cyan'>Abs Exercises</Tag></h3>
                    </div>
                    <div onClick={() => handleMenuClick("upper legs")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={thigh} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='purple'>Upper Legs Exercises</Tag></h3>
                    </div>
                    <div onClick={() => handleMenuClick("lower legs")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={leg} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='blue'>Lower Legs Exercises</Tag></h3>
                    </div>
                    <div onClick={() => handleMenuClick("lower arm")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={armIcon3} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='teal'>Lower Arm Exercises</Tag></h3>
                    </div>
                    <div onClick={() => handleMenuClick("cardio")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={cardio} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='orange'>Cardio Exercises</Tag></h3>
                    </div>
                    <div onClick={() => handleMenuClick("neck")} style={{ margin: "20px", border: "1px dashed black", cursor: "pointer", padding: "50px", textAlign: "center" }}>
                        <Image preview={false} width={"50px"} height={"50px"} src={neck} />
                        <h3 style={{ marginTop: "20px" }}><Tag color='cyan'>Neck Exercises</Tag></h3>
                    </div>
                </Carousel>
            </div>

            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        chestExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>

            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        bicepExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>

            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        backExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>


            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        waistExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>

            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        upperLegsExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>

            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        shoulderExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>


            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        tricepExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>

            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        lowerArmExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>

            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        lowerLegExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>


            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        cardioExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>


            <span style={exerciseDisplay ? { display: "block" } : { display: "none" }}>
                <Carousel responsive={responsive}>
                    {
                        neckExercises.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </Carousel>
            </span>

            <span style={exerciseDisplay ? { display: "none" } : { display: "block" }}>
                <div className='imageCont'>
                    {
                        queryData.map((elem) => (
                            <Card key={elem.id} props={elem} />
                        ))
                    }
                </div>
            </span>

        </>


    )
}

export default Home