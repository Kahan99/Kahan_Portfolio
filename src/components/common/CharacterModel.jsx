import { useGLTF } from "@react-three/drei"

export default function CharacterModel(props) {
  const { scene } = useGLTF("/models/character.glb") // Replace with your actual path

  return <primitive object={scene} {...props} />
}
