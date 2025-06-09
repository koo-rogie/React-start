import { Fragment } from "react/jsx-runtime";

interface AddressBook {
  id: number;
  name: string;
  value: string;
}

interface EditAddressProps {
  addressBook: AddressBook[];
  handleAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function EditAddress({ addressBook, handleAddressChange }: EditAddressProps) {
  const list = addressBook.map((address: AddressBook) => {
    return (
      <Fragment key={address.id}>
        <label htmlFor={address.id.toString()}>{address.name}</label>
        <input type="text" id={address.id.toString()} name={address.id.toString()} value={address.value} onChange={handleAddressChange} />
        <br />
      </Fragment>
    );
  });
  return list;
}

export default EditAddress;
