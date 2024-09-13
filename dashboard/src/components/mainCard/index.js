import { Card, CardActionArea, CardMedia } from "@mui/material";

const MainCard=({children})=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       {children}
      </CardActionArea>
    </Card>
  );
}
export default MainCard