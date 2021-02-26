import 'react-toastify/dist/ReactToastify.css';

import { Container, Grid } from "@material-ui/core";
import { addMaintenance, getMaintenances } from "./api/maintenances";
import { useEffect, useState } from "react";

import { Car } from "./components/Car";
import { MyAppBar } from "./components/MyAppBar";
import { ToastContainer } from 'react-toastify';
import { getCars } from "./api/cars";

function App() {
  const [cars, setCars] = useState([]);
  const [maintenances, setMaintenances] = useState(null);

  useEffect(() => {
    getCars().then(setCars).catch(console.log);

    getMaintenances().then(setMaintenances).catch(console.log);
  }, []);
  return (
    <div>
      <MyAppBar />
      <Container style={{ marginTop: "10px" }}>
        <Grid container justify="center" alignItems="center" spacing={2}>
          {maintenances && (
            <>
              {cars.map((car) => (
                <Grid key={car.id} item>
                  <Car addMaintenance={addMaintenance} maintenances={maintenances} car={car} />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
