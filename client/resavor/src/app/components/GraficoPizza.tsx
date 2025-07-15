
import { PieChart } from '@mui/x-charts/PieChart'



export default function GraficoPizza() {
  return (
    <PieChart
      colors={['#4a4a4a', '#252f42', '#818181', '#111111', '#2c1448', '#dadadb']}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A'},
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
            { id: 3, value: 80, label: 'series D' },
            { id: 4, value: 40, label: 'series D' },
            { id: 5, value: 18, label: 'series D' },
          ]

        }
      ]}
      height={400}
      width={400}
    />
  );
}