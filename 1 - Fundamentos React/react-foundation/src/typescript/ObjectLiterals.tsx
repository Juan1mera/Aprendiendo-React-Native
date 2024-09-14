interface Person{
    firstName: string;
    lastName: string;
    age: number;
    adress:adress;
}
interface adress{
    country: string;
    houseNumber: number;
}


export const ObjectLiterals = () => {
    const person: Person = {
        age: 17,
        firstName: "Juan",
        lastName: "Mera",
        adress: {
            country: 'Ecuador',
            houseNumber: 123
        }
    }

    

  return (
    <>
        <h3>
            Objetos Literales
        </h3>
        <pre>
        {JSON.stringify(person, null, 2)}

        </pre>

    </>
  )
}
