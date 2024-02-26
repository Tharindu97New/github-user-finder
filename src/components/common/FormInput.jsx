import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function FormInput({type = "text", onChange, value }) {
  return (
    <FormControl>
      <Input type={type} value={value} onChange={onChange} width="100%" />
    </FormControl>
  );
}

export default FormInput;
