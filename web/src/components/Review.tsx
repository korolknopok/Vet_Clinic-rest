// @ts-ignore
import React, {useState, useEffect} from 'react';
import {TiDelete} from "react-icons/ti";
import {
    Alert,
    Button,
    Container, IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newReview, setNewReview] = useState({
        author: '',
        content: '',
        rating: 5,
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        fetch('https://localhost:7205/api/Review')
            .then(response => response.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        fetch('https://localhost:7205/api/Review', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ...newReview,
                date: new Date().toISOString(),
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при отправке отзыва');
                }
                return response.json();
            })
            .then(data => {
                setReviews([data, ...reviews]);
                setNewReview({author: '', content: '', rating: 5});
                setSuccessMessage('Отзыв добавлен успешно!');
            })
            .catch(err => setError(err.message));
    };

    const handleDeleteReview = (id: number) => {
        fetch(`https://localhost:7205/api/Review/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error');
                }
                setReviews(reviews.filter(review => review.id !== id));
                setSuccessMessage('Отзыв удалён успешно!');
            })
            .catch(err => {
                console.error('Error', err);
            });
    };

    const handleChange = e => {
        const {name, value} = e.target;
        setNewReview({...newReview, [name]: value});
    };

    const handleCloseSnackbar = () => {
        setError(null);
        setSuccessMessage('');
    };

    if (loading) {
        return <div>Загрузка отзывов...</div>;
    }

    return (
        <Container>
            <Typography variant="h4" marginTop={'10px'} gutterBottom>Отзывы</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Автор"
                    name="author"
                    value={newReview.author}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Отзыв"
                    name="content"
                    value={newReview.content}
                    onChange={handleChange}
                    required
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                />
                <TextField
                    label="Оценка"
                    name="rating"
                    value={newReview.rating}
                    onChange={handleChange}
                    select
                    fullWidth
                    margin="normal"
                >
                    {[1, 2, 3, 4, 5].map(num => (
                        <MenuItem key={num} value={num}>
                            {num}
                        </MenuItem>
                    ))}
                </TextField>
                <Button type="submit" variant="contained" color="primary">Добавить отзыв</Button>
            </form>

            {error && (
                <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="error">{error}</Alert>
                </Snackbar>
            )}

            {successMessage && (
                <Snackbar open={Boolean(successMessage)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success">{successMessage}</Alert>
                </Snackbar>
            )}
            {reviews.length === 0 ? (
                <Typography variant="body1">Нет отзывов</Typography>
            ) : (
                <List>
                    {reviews.map(review => (
                        <ListItem key={review.id}>
                            <ListItemText
                                primary={<strong>{review.author}</strong>}
                                secondary={
                                    <>
                                        <div>{review.content}</div>
                                        <div>Оценка: {review.rating} / 5</div>
                                        <div>Дата: {new Date(review.date).toLocaleDateString()}</div>
                                    </>
                                }
                            />
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteReview(review.id)}>
                                <TiDelete/>
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default Review;
