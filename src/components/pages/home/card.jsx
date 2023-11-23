import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { baseUrl } from '../../../utils';

export default function Cards(props) {
    const { title, subtitle, image, price, id } = props;


    return (
        <Card sx={{ width: 345, cursor: 'pointer' }}  >
            <CardMedia
                component="img"
                alt={title}
                height="160"
                image={`${baseUrl}${image}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Mayur Shubham
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='success' size="small">{price ? price : "Free"}</Button>
            </CardActions>
        </Card>
    );
}
