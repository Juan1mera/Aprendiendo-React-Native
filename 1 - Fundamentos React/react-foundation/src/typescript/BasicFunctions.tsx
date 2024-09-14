
export const BasicFunctions = () => {
    const sum = (a:number, b:number) => {
        return a + b;
    }


    return (
      <>
          <h3>Funciones Basicas</h3>    
          <span>El resultado de sumar: {sum(5, 6)}</span>
      </>
    )
}
