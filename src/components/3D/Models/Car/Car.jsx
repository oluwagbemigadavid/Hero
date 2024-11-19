import { Center, Clone, useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { useEffect, useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { useCar, useNav } from '../../../../providers'
import * as THREE from 'three';

const Car = () => {  

 

  const { scale, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls({
    scale:
    {
        value: 1.32,
        min: - 0,
        max: 3,
        step: 0.0001
    },
    positionX:
    {
        value: 0.11,
        min: - 3,
        max: 3,
        step: 0.0001
    },
    positionY:
    {
        value: 0.20,
        min: - 9,
        max: 3,
        step: 0.0001
    },
    positionZ:
    {
        value: 0.37,
        min: - 9,
        max: 3,
        step: 0.0001
    },
    rotationX:
    {
        value: -1.93,
        min: -9,
        max: 3,
        step: 0.0001
    },
    rotationY:
    {
        value: 3.09,
        min: - 6,
        max: 6,
        step: 0.0001
    },
    rotationZ:
    {
        value: -0.12,
        min: - 3,
        max: 6,
        step: 0.0001
    },
   
})

  const {activeMenu, navSwitch, toNav} = useNav()
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isFeatures, SetisFeatures] = useState(activeMenu.value === 'features')
  const carRef = useRef()
  const {params, setParams} = useCar()

  useEffect(() => { 
    if(navSwitch){
      setShouldAnimate(true); 
    }
   
    const timeout = setTimeout(() => {
      setShouldAnimate(false);
    }, 3000);
  
    return () => clearTimeout(timeout);  
  }, [navSwitch]);

  const targetValues = {
    home: {
      position: new THREE.Vector3(0.11, 0.20, 0.37),
      rotation: new THREE.Euler(-1.93, 3.09, -0.12),
      scale: 1.32,
    },
    about: {
      position: new THREE.Vector3(0.11, 0.20, -1.92),
      rotation: new THREE.Euler(-1.70, 3.09, 3.03),
      scale: 1.32,
    },
    features: {
      position: new THREE.Vector3(0.11, 0.20, -1.92),
      rotation: new THREE.Euler(-1.93, 3.09, 1.58),
      scale: 0.88,
    },
    'how-to-use': {
      position: new THREE.Vector3(0.11, 0.20, 0.37),
      rotation: new THREE.Euler(-1.93, 3.09, -0.12),
      scale: 1.32,
    },
  };

  useFrame((_, delta) => {
    if (!shouldAnimate || !carRef.current) return;

    const target = targetValues[toNav];
    const current = carRef.current;

    // Smoothly interpolate position
    current.position.lerp(target.position, delta * 2);

    // Smoothly interpolate rotation (uses SLERP for quaternions)
    const currentQuat = new THREE.Quaternion().setFromEuler(current.rotation);
    const targetQuat = new THREE.Quaternion().setFromEuler(target.rotation);
    currentQuat.slerp(targetQuat, delta * 2);
    current.rotation.setFromQuaternion(currentQuat);

    // Smoothly interpolate scale
    current.scale.lerp(new THREE.Vector3(target.scale, target.scale, target.scale), delta * 2);
  });


  const car = useGLTF('./ds.glb')
  // console.log(car)
  const { nodes, materials } = useGLTF('./ds.glb')
  return (
    <group dispose={null}>
      <group position={[ positionX, positionY, positionZ]} rotation={[rotationX, rotationY, rotationZ]} scale={scale} ref={carRef}>
        <group position={[-0.113, -1.818, -0.543]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_trunk_60_carpaint_custom02_LOD2.geometry}
            material={materials['Material.001']}
            position={[0.427, -0.004, 0]}
            rotation={[0, 0, Math.PI]}
            scale={4.734}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_trunk_60_details_LOD2.geometry}
            material={materials['Material.004']}
            position={[0.427, -0.004, 0]}
            rotation={[0, 0, Math.PI]}
            scale={4.734}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_trunk_60_details_LOD2001.geometry}
            material={materials['Material.001']}
            position={[0.427, -0.004, 0]}
            rotation={[0, 0, Math.PI]}
            scale={4.734}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_trunk_60_details_normal_LOD2.geometry}
            material={nodes.detach_trunk_60_details_normal_LOD2.material}
            position={[0.427, -0.004, 0]}
            rotation={[0, 0, Math.PI]}
            scale={4.734}
          />
        </group>
        <group position={[-0.086, -0.329, 0.526]} rotation={[Math.PI / 2, 0, Math.PI]}>
          <group position={[-0.836, 0.342, 1.391]}>
            <group rotation={[0.438, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBL_caliper_calipers_LOD6.geometry}
                material={materials['Material.012']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
            </group>
            <group position={[0, -0.003, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBL_details_LOD2.geometry}
                material={materials['Material.014']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBL_details_normal_LOD2.geometry}
                material={materials['Material.008']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBL_rims_LOD2.geometry}
                material={materials['Material.010']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
            </group>
            <group position={[0, -0.003, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBL_motion_details_LOD2.geometry}
                material={nodes.wheelBL_motion_details_LOD2.material}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBL_motion_details_normal_LOD2.geometry}
                material={materials['Material.008']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBL_motion_rims_LOD2.geometry}
                material={materials['Material.008']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelBL_tire_tires_LOD2.geometry}
              material={materials['Material.007']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.wheelBL_emissive_mesh_brakedisk_emissive_mesh_brakedisk_42f474a.geometry
              }
              material={materials['Material.011']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
          </group>
          <group position={[0.836, 0.342, 1.391]}>
            <group rotation={[0.438, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBR_caliper_calipers_LOD6.geometry}
                material={materials['Material.012']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
            </group>
            <group position={[0, -0.003, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBR_details_LOD2.geometry}
                material={materials['Material.014']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBR_details_normal_LOD2.geometry}
                material={materials['Material.008']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBR_rims_LOD2.geometry}
                material={materials['Material.010']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
            </group>
            <group position={[0, -0.003, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBR_motion_details_LOD2.geometry}
                material={nodes.wheelBR_motion_details_LOD2.material}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBR_motion_details_normal_LOD2.geometry}
                material={materials['Material.008']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.wheelBR_motion_rims_LOD2.geometry}
                material={materials['Material.008']}
                position={[-0.431, 0.005, 0]}
                scale={4.734}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelBR_tire_tires_LOD2.geometry}
              material={materials['Material.007']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.wheelBR_emissive_mesh_brakedisk_emissive_mesh_brakedisk_935131c.geometry
              }
              material={materials['Material.011']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
          </group>
          <group position={[-0.864, 0.338, -1.387]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFL_details_LOD2.geometry}
              material={materials['Material.014']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFL_details_normal_LOD2.geometry}
              material={materials['Material.008']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFL_rims_LOD2.geometry}
              material={materials['Material.010']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFL_motion_details_LOD2.geometry}
              material={nodes.wheelFL_motion_details_LOD2.material}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFL_motion_details_normal_LOD2.geometry}
              material={materials['Material.008']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFL_motion_rims_LOD2.geometry}
              material={materials['Material.008']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFL_tire_tires_LOD2.geometry}
              material={materials['Material.007']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFL_caliper_calipers_LOD6.geometry}
              material={materials['Material.012']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.wheelFL_emissive_mesh_brakedisk_emissive_mesh_brakedisk_37d1039.geometry
              }
              material={materials['Material.011']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
          </group>
          <group position={[0.864, 0.338, -1.387]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFR_details_LOD2.geometry}
              material={materials['Material.014']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFR_rims_LOD2.geometry}
              material={materials['Material.010']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFR_motion_details_LOD2.geometry}
              material={materials['Material.007']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFR_motion_details_normal_LOD2.geometry}
              material={materials['Material.007']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFR_motion_rims_LOD2.geometry}
              material={materials['Material.013']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFR_tire_tires_LOD2.geometry}
              material={materials['Material.007']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheelFR_caliper_calipers_LOD6.geometry}
              material={materials['Material.012']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.wheelFR_emissive_mesh_brakedisk_emissive_mesh_brakedisk_6d623a7.geometry
              }
              material={materials['Material.011']}
              position={[-0.431, 0.005, 0]}
              scale={4.734}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_carpaint_LOD2.geometry}
              material={materials['Material.001']}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_details_LOD2.geometry}
              material={materials['Material.003']}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_details_normal_LOD2.geometry}
              material={materials['Material.005']}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_details_normal_LOD2001.geometry}
              material={materials['Material.009']}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_details_normal_LOD2002.geometry}
              material={materials['Material.009']}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_details_normal_LOD2003.geometry}
              material={materials['Material.006']}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_details_normal_LOD2004.geometry}
              material={materials['Material.006']}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_emissive_ID_rear_LOD2.geometry}
              material={materials['Material.004']}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_emissive_ID_rear_LOD2001.geometry}
              material={materials['Material.004']}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_emissive_ID_thirdlight_LOD2.geometry}
              material={materials['Material.004']}
              position={[-0.431, 0.005, 0]}
              rotation={[-Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_tiled_carbon_LOD2.geometry}
              material={materials['Material.003']}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_underside_LOD2.geometry}
              material={nodes.chassis_underside_LOD2.material}
              position={[-0.431, 0.005, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={4.734}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.finestrini_1.geometry}
            material={materials['Material.002']}
            position={[0, 1.045, -0.03]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vetro.geometry}
            material={materials['Material.002']}
            position={[0, 0.741, 0.034]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          />
        </group>
        <group position={[-0.086, 1.957, -0.065]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_hood_80_carpaint_custom01_LOD2.geometry}
            material={materials['Material.001']}
            position={[-0.431, 0.005, 0]}
            scale={4.734}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_hood_80_carpaint_LOD2.geometry}
            material={materials['Material.001']}
            position={[-0.431, 0.005, 0]}
            scale={4.734}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_hood_80_details_LOD2.geometry}
            material={materials['Material.003']}
            position={[-0.431, 0.005, 0]}
            scale={4.734}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_hood_80_details_normal_LOD2.geometry}
            material={nodes.detach_hood_80_details_normal_LOD2.material}
            position={[-0.431, 0.005, 0]}
            scale={4.734}
          />
        </group>
        <group position={[0.786, -2.14, 0.344]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_bumper_B_5_details_normal_LOD2.geometry}
            material={materials['Material.004']}
            position={[-0.431, 0.005, 0]}
            scale={4.734}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_bumper_B_5_tiled_carbon_LOD2.geometry}
            material={materials['Material.008']}
            position={[-0.431, 0.005, 0]}
            scale={4.734}
          />
        </group>
        <group position={[-1.028, 0.456, -0.159]} rotation={[Math.PI / 2, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_door_R_50_carpaint_LOD2.geometry}
            material={materials['Material.001']}
            position={[-0.431, 0.005, 0]}
            scale={4.734}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_door_R_50_details_LOD2.geometry}
            material={materials['Material.003']}
            position={[-0.431, 0.005, 0]}
            scale={4.734}
          />
        </group>
        <group position={[0.858, 0.455, -0.159]} rotation={[-Math.PI / 2, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_door_L_50_carpaint_LOD2.geometry}
            material={materials['Material.001']}
            position={[-0.431, 0.005, 0]}
            scale={4.734}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_door_L_50_details_LOD2.geometry}
            material={materials['Material.003']}
            position={[-0.431, 0.005, 0]}
            scale={4.734}
          />
        </group>
        <group position={[-1.037, 1.425, 0.387]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_bumper_F_5_LOD_LOD16.geometry}
            material={nodes.detach_bumper_F_5_LOD_LOD16.material}
            position={[-0.431, 0.005, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={4.734}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.detach_bumper_F_5_LOD_tiled_carbon_LOD16.geometry}
            material={materials['Material.005']}
            position={[-0.431, 0.005, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={4.734}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.volante.geometry}
          material={nodes.volante.material}
          position={[0.706, -0.006, -0.331]}
          rotation={[0.312, 0, Math.PI]}
          scale={4.734}
        />
      </group>
    </group>
  )
}

export default Car
