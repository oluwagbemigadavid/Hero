import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import Placeholder from './Placeholder'
import { CarModel } from '../Models'

export default function Experience()
{

    return <>

        {/* <Perf position="bottom-right" /> */}

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias= {0.04} />
        <ambientLight intensity={ 0.5 } />

        <Suspense
            fallback={<Placeholder position-y={0.5} scale={[2,3,2]} />}
        >
            <CarModel scale={15} />
        </Suspense>

    </>
}