import { useState } from 'react';

function NewItemForm({ addItem }: { addItem: (item: string) => void }) {
  const [value, setValue] = useState<string>();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addItem(value);
        setValue('');
      }}
    >
      <label htmlFor={'item-input'}>Input Your Item : </label>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button>Add Item</button>
    </form>
  );
}
function Shopping() {
  const [items, setItems] = useState<string[]>(['Apple', 'Banana']);

  const addItem = (item: string) => {
    items.push(item);
    setItems(items);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <NewItemForm addItem={addItem} />
    </div>
  );
}

export default Shopping;
