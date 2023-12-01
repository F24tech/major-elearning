import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { baseUrl } from '../../../utils';
import { Stack } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


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
                <Typography gutterBottom variant="h6" component="div" noWrap={true}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Mayur Shubham <Button color='success' size="small"  > 0<CurrencyRupeeIcon />{price ? price : "Free"}</Button>
                </Typography>


            </CardContent>
            <CardActions  >
                <Stack flexDirection={'row'} gap={1} style={{ width: '100%' }}>

                    <Button variant='contained' fullWidth color='primary' size="medium" startIcon={<AddShoppingCartIcon />}>Add To Card</Button>
                    <Button variant='contained' fullWidth color='error' size="medium" startIcon={<FavoriteBorderIcon />} >Wishlist</Button>
                </Stack>

            </CardActions>
        </Card>
    );
}
