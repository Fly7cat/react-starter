import Navbar from "./components/Navbar";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "hello1" },
    { id: 2, text: "hello2" },
    { id: 3, text: "hello3" },
  ]); // 添加
  const addItem = (item) => setItems([...items,item]); 
  // 删除
  const deleteItem = (item) => {
    if (window.confirm("Delete This Item?")) {
      setItems(items.filter((current) => current.id !== item.id));
    }
  }; 
  // 编辑
  const editItem = (item) => {
    const input = window.prompt("Update Text:", item.text);
    if (input)
      setItems(
        items.map((current) =>
          current.id === item.id ? { ...current, text: input } : current
        )
      );
  }; 
  // 清除
  const clearItem = () => setItems([]);

  return (
    <div className="wrapper bg-dark text-white">
       <Navbar items={items} clearItem={clearItem} />
       <div className="container pt-5">
         <div className="col-12 col-lg-6 mx-auto mt-5 p-5 border border-light rounded">
             <Form addItem={addItem} />
             <List items={items} deleteItem={deleteItem} editItem={editItem}/>
        </div>
      </div>
    </div>
  )
}
