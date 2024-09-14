
export const BasicTypes = () => {
    const name:string = 'Juan';
    const age:number = 17;
    const isActive:boolean = false;

    const powers:string[] = ['Velocidad', 'Volar', 'Nadar'];

  return (
    <>
        <h3>Tipos Basicos</h3>
        {name} {age} {isActive ? 'false' : 'true'}
        <br />

        {powers.join(', ')}
    </>
  )
}
