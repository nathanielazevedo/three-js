import { DragControls } from 'three/examples/jsm/controls/DragControls'
import {extend, useThree } from 'react-three-fiber'
import {useRef, useEffect, useState} from 'react';
extend({DragControls})

const Dragable = props => {
  const groupRef = useRef();
  const controlsRef = useRef();
  const { camera, gl, scene }= useThree();
  const [children, setChildren] = useState([]);

  useEffect(() => {
    setChildren(groupRef.current.children);
  },[])

  useEffect(() => {
    controlsRef.current.addEventListener('hoveron', function(e){
      scene.orbitControls.enabled = false;
    })
    controlsRef.current.addEventListener('hoveroff', function(e){
      scene.orbitControls.enabled = true;
    })
    controlsRef.current.addEventListener('drag', function(e){
      e.object.api?.position.copy(e.object.position);
      e.object.api?.velocity.set(0,0,0);
    })
    controlsRef.current.addEventListener('dragstart', function(e){
      e.object.api?.mass.set(0);
    })
    controlsRef.current.addEventListener('dragend', function(e){
      e.object.api?.mass.set(1);
    })
  }, [children])

  return(
    <group ref={groupRef}>
      <dragControls 
        transformGroup={props.transformGroup}
        ref={controlsRef}
        args={[children, camera, gl.domElement]}
      />
      {props.children}
    </group>
  )
}

export default Dragable;