import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    //const INIT_URL ="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const Hot_url = "https://plus.unsplash.com/premium_photo-1688804790113-809f21d2e7cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const Rain_Url = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const Cold_Url = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return (
        <div>
            
            <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={info.humidity > 80 ? Rain_Url : info.temp < 17 ? Cold_Url :  Hot_url }
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={("span")}>
                    <p>temperature = {info.temp}&deg;c</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>minTemp = {info.minTemp}</p>
                    <p>maxTemp = {info.maxTemp}</p>
                    <p>whaether is described as {info.weather} and feelsLike as {info.temp}&deg;c</p>

                </Typography>
                </CardContent>
                
                </Card>
            </div>
        </div>
    )
}