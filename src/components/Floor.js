import * as THREE from 'three'
import { useBox } from 'use-cannon';

const Floor = props => {
  const [ref, api] = useBox(() => ({args:[200,1,200], ...props}));
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]}/>
      <meshPhysicalMaterial transparent opacity={0.2}/>
    </mesh>
  )
}

export default Floor;