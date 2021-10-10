import { Helmet } from 'react-helmet';
import {
  Switch,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import './Payment.css';
import * as React from 'react';
import PaymentKR from 'src/components/payment/PaymentKR';
import PaymentGL from 'src/components/payment/PaymentGL';

const Payment = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Helmet>
        <title>Payment | Material Kit</title>
      </Helmet>
      <div className="payment">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              구매 물품명
            </Typography>
            <Typography variant="h5" component="div">
              스파게티 요리책
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              $10.29
            </Typography>
            <Typography variant="body2">
              배송 주소:
              <br />
              경기도 수원시 팔달구 권선로 777
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">구매취소</Button>
          </CardActions>
        </Card>
      </div>
      <div className="toggles">
        <div>
          <div className="toggle-label">Global</div>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            label="he"
          />
          <div className="toggle-label">Korean</div>
        </div>
      </div>
      <div className="whole">{checked ? <PaymentKR /> : <PaymentGL />}</div>
    </>
  );
};

export default Payment;
