import planning from '../data/planning'
import Card from '../components/Card'
import { useState } from 'react';

export default function Planning() {
    const [data, setData] = useState(planning);
  return (
        <div>
            {data?.map((trip) => (
                <div key={trip.id}>
                    <Card
                        image={trip.image}
                        city={trip.city}
                        day={trip.day}
                        date={trip.date}
                        hotel={trip.hotel}
                        tags={trip.tags}
                        morning={trip.morning}
                        afternoon={trip.afternoon}
                    />
                </div>
            ))}
        </div>
    );
}
