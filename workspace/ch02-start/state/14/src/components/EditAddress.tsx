import { Fragment } from "react/jsx-runtime";

interface AddressBook {
  id: number;
  name: string;
  value: string;
}

interface EditAddressProps {
  addressBook: AddressBook[];
}

function EditAddress({ addressBook }: EditAddressProps) {
  const list = addressBook.map((address: AddressBook) => {
    return (
      <Fragment key={address.id}>
        <label htmlFor={address.id.toString()}>{address.name}</label>
        <input type="text" id={address.id.toString()} name={address.id.toString()} value={address.value} />
        <br />
      </Fragment>
    );
  });
  return list;
}

export default EditAddress;