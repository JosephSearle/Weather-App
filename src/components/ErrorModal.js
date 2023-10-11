import { Modal, Box, Typography, Button } from "@mui/material"
import thinking from '../images/error_modal_imgs/thinking.png'
import forbidden from '../images/error_modal_imgs/forbidden.png'
import { useEffect, useState } from "react";

function ErrorModal(props) {
    const errors = new Map([
        ["api", [forbidden, "OH NO!!!", "API call limit reached for the day, try again tomorrow", "Close"]],
        ["location", [thinking, "OOPS!!!", "I don't know that location, try again", "TRY AGAIN"]]
    ]);

    const [errorType, setErrorType] = useState([])

    useEffect(() => {
        setErrorType(errors.get(props.errorType));
    }, [props.errorType])

    return (
        <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: '30px',
                    boxShadow: 24,
                    p: 4,
                }}
                className="modal-container"
                >
                    <Typography variant="h3" sx={{marginBottom: '20px'}}>
                        {errorType[1]}
                    </Typography>
                    <img src={errorType[0]} alt='thinking' className='thinking-image'/>
                    <Typography variant='span' sx={{marginTop: '20px'}}>
                        {errorType[2]}
                    </Typography>
                    <Button variant='contained' sx={{marginTop:'20px', borderRadius:'30px'}} onClick={props.handleClose}>{errorType[3]}</Button>
                </Box>
            </Modal>
    )
}

export default ErrorModal