import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import workService from "../../../service/work.service";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";

const UpdateWorkForm = () => {

    const [workData, setWorkData] = useState({
        description: '',
        photo: '',
        link: '',
        attendees: [],
    })

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { work_id } = useParams();

    useEffect(() => {
        workService
            .getWorkDetails(work_id)
            .then((response) => {
                const { description, photo, link } = response.data;
                setWorkData({ description, photo, link });
            })
            .catch((error) => {
                console.error("Error al cargar los datos del evento: ", error);
            });
    }, [work_id]);

    const handleInputChange = (e) => {
        const { value, name } = e.target;

        setWorkData({
            ...workData,
            [name]: value,
        });
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        workService
            .editWork(work_id, workData)
            .then(() => {
                console.log("work update ");
                navigate("/");
            })
            .catch((err) => {
                console.error("Error update: ", err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Form style={{ width: '900px' }} onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>description</Form.Label>
                <Form.Control
                    type="text"
                    value={workData.description}
                    name="description"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    value={workData.description}
                    name="description"
                    onChange={handleInputChange}
                />
            </Form.Group>

            {isLoading ? (
                <Loader />
            ) : (
                <Button className="buttonClick" variant="warning" style={{ width: '300px' }} type="submit">
                    Update work
                </Button>
            )}
        </Form>
    );
};

export default UpdateWorkForm;
