import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string; 
}

export const FormsPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: 'juan@gmail.com',
      password: '123456',
    },
  });

  const Submit = (myForm: FormInputs) => {
    console.log({ myForm });
  };


  return (
    <>
      <form onSubmit={handleSubmit(Submit)}>
        <h3>Formulario</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Email"
            {...register('email', { required: true })} 
          />
          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: true })} 
          />
          <button type="submit">Ingresar</button>
        </div>
      </form>


      <pre>
        {JSON.stringify(register, null, 2)}
      </pre>
    </>
  );
}
