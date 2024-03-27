import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  const IMG_URL =
    "https://images.unsplash.com/photo-1628525805814-cf9fe2582727?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox ">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={IMG_URL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Temperature : {info.temp}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Min Temp : {info.tempmin}&deg;C</p>
            <p>Max Temp : {info.tempmax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> feels like :{" "}
              {info.feelsLike}&deg;C{" "}
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
